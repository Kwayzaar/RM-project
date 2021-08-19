import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header'
import CharacterList from './components/characters/CharacterList'

function App() {
  const [characters, setCharacter] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  
  const parse = response => response.json()
  //addToState drills right down to results array and adds to state 
  const addToCharacters = ({results}) => setCharacter(results)
  //The call to character url only returns first 20 characters 
  const characterURL = `https://rickandmortyapi.com/api/character?page=${pageNumber}`
  
  const fetchCharacters = () => {
    fetch(characterURL)
    .then(parse)
    .then(addToCharacters)
  }

  //Use Effect to make the fetch
  useEffect(() => {
    function fetchAllPages(pageNumber) {
      if (pageNumber < 1) {
        return []
      } else {
        fetchCharacters()
      }
    }

    fetchAllPages()
  }, [])

  return (
    <div>
      <Header />
      <CharacterList characters={ characters } />
    </div>
  );
}

export default App;
