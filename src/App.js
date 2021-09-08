import './App.css';
import './index.css'
import React, { useState, useEffect } from 'react';
import Title from './components/Title'
import Header from './components/Header'
import CharacterList from './components/characters/CharacterList'
import Locations from './components/Locations'

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
          // console.log(newResponse.results)
          const response = [...previousResponse, ...newResponse.results]
          
          if (newResponse.info.next !== null) {
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
      <div className="h-full w-full bg-rick-and-morty sm:bg-rm-landscape bg-center bg-cover bg-fixed 2xl:pt-24 pt-4 ">
        <Title />
        <Header />
        <CharacterList characters={ characters } />
        <Locations />
      </div>
    </div>
  );
}

export default App;
