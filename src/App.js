import './App.css';
import React, { useState, useEffect } from 'react';
import Title from './components/Title'
import Header from './components/Header'
import CharacterContainer from './components/characters/CharacterContainer'
import LocationContainer from './components/locations/LocationContainer'

function App() {
  const [characters, setCharacters] = useState([])
  const [locations, setLocations] = useState([])
  
  const parse = response => response.json()
  

  // fetches first 60 characters from API 
  function paginatedFetch(
    characterURL = `https://rickandmortyapi.com/api/character/`,
    page = 1,
    previousResponse = []
  ) {
      return fetch(`${characterURL}?page=${page}`)
        .then(parse)
        .then(newResponse => {
          // console.log(newResponse)
          const response = [...previousResponse, ...newResponse.results]
          
          if (newResponse.info.next !== `${characterURL}?page=4`) {
            page++
            
            return paginatedFetch(characterURL, page, response)
          }
          return setCharacters(response)
          
        })
      }

  // pulls location data out of character fetch 
  function getLocations(arr) {
    let locationArr = []
    for(let i = 0; i < arr.length; i++){
      locationArr.push(arr[i].location)
    }
    return setLocations(locationArr)
  }

  //Use Effect to make the fetch
  useEffect(() => {
    paginatedFetch()
  }, [])
  
  // use effect to make getLocations run only when character state is updated 
  useEffect(() => {
    getLocations(characters)    
  }, [characters])

  return (
    <div className="h-screen w-screen flex-col text-red-hat">
      <main>
        <div className="bg-rm-background bg-center bg-cover bg-fixed 2xl:pt-24 pt-4">
          <Title />
          <Header />
          <CharacterContainer characters={ characters } />
          <LocationContainer locations={ locations }/>
        </div>
      </main>
    </div>
  );
}

export default App;