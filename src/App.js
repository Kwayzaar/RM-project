import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header'
import CharacterList from './components/characters/CharacterList'

function App() {
  const [characters, setCharacter] = useState([])  
  
  const parse = response => response.json()
  //addToState drills right down to results array and adds to state 
  const addToState = ({results}) => setCharacter(results)
  //The call to character url only returns first 20 characters 
  const characterURL = "https://rickandmortyapi.com/api/character/?page=1"
  
  //Use Effect to make the fetch
  useEffect(() => {
    fetch(characterURL)
    .then(parse)
    .then(addToState)
  }, [])

  return (
    <div>
      <Header />
      <CharacterList characters={ characters } />
    </div>
  );
}

export default App;
