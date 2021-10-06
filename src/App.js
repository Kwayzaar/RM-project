import './App.css';
import React, { useState, useEffect } from 'react';
import Title from './components/Title'
import Header from './components/Header'
import CharacterContainer from './components/characters/CharacterContainer'
import LocationContainer from './locations/LocationContainer'

function App() {
  const [characters, setCharacters] = useState([])
  
  const parse = response => response.json()
  
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

  //Use Effect to make the fetch
  useEffect(() => {
    paginatedFetch()
  }, [])

  return (
    <div className="h-screen w-screen flex-col">
      <div className="bg-rm-background bg-center bg-cover bg-fixed 2xl:pt-24 pt-4">
        <Title />
        <Header />
        <CharacterContainer characters={ characters } />
        <LocationContainer characters={ characters }/>
      </div>
    </div>
  );
}

export default App;