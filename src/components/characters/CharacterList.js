import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList() {
  const [characters, setCharacter] = useState([])
  
  //Use Effect to make the fetch
  //Call to character url only returns first 20 characters 
  useEffect(() => {
    const characterURL = "https://rickandmortyapi.com/api/character"

    fetch(characterURL)
    .then(response => response.json())
    .then(({results}) => setCharacter(results))
  }, [])
  
  const createCard = () => characters.map(character => { 
    return <CharacterCard character={ character } key={ character.id } />
  })

  return (
    <div>
      <ul>
        {createCard()}
      </ul>
    </div>
  )
}

export default CharacterList;