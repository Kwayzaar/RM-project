import './App.css';
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
    <div className="bg-rick-and-morty bg-center bg-cover bg-fixed md:pt-24 pt-4 h-full flex-col">
      <Title />
      <Header />
      <CharacterList characters={ characters } />
      <Locations />
    </div>
  );
}

export default App;
