import React, { useState, useEffect } from 'react'
import { dataToEsm } from 'rollup-pluginutils'
import CharacterCard from './CharacterCard'

function CharacterList() {
  const [characters, setCharacter] = useState([])
  
  //Use Effect to make the fetch
  //Call to character url only return first 20 characters 
  useEffect(() => {
    const characterURL = "https://rickandmortyapi.com/api/character"
    fetch(characterURL)
    .then(res => res.json())
    .then(data => {
      setCharacter(data)
      // console.log(characters)
    })
  }, [])

  const showCharacters = () => characters.results.map(character => {
    // return <CharacterCard key={character.id} />
    return (
      <ul>
        <li><img src={character.image}/></li>
      </ul>
    )
    })

  return (
    <div>
      {showCharacters()}
    </div>
  )
}

export default CharacterList;