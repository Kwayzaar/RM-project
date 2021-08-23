import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header'
import CharacterList from './components/characters/CharacterList'

function App() {
  const [characters, setCharacters] = useState([])
  const [groupNumber, setGroupNumber] = useState(1)
  
  const parse = response => response.json()
  //addToState drills right down to results array and adds to state 
  const addToCharacters = ({results}) => setCharacters(results)
  //The call to character url only returns first 20 characters 
  
  function paginatedFetch(
    characterURL = `https://rickandmortyapi.com/api/character/`,
    page = 1,
    previousResponse = []
  ) {
      return fetch(`${characterURL}?page=${page}`)
        .then(parse)
        .then(newResponse => {
          console.log(newResponse.results)
          const response = [...previousResponse, ...newResponse.results]
          
          if (newResponse.info.next === null) {
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
    <div>
      <Header />
      <CharacterList characters={ characters } />
    </div>
  );
}

export default App;
