import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList() {
  const [characters, setCharacter] = useState([])
  
  
  const parse = response => response.json()
  //addToState drills right down to results array and adds to state 
  const addToState = ({results}) => setCharacter(results)
  //The call to character url only returns first 20 characters 
  const characterURL = "https://rickandmortyapi.com/api/character"
  
  //Use Effect to make the fetch
  useEffect(() => {
    fetch(characterURL)
    .then(parse)
    .then(addToState)
  }, [])
  
  //This function maps ("breaks open") characters object (state) and passes it down to CharacterCard. Then, for each character in state, it returns CharacterCard with a key prop attached 
  const createCard = () => characters.map(character => { 
    return <CharacterCard character={ character } key={ character.id } />
  })

  return (
    <div className="w-full h-1/4 p-1.5 bg-gray-100">
      <ul className="flex flex-row flex-wrap">
        {createCard()}
      </ul>
    </div>
  )
}

export default CharacterList;