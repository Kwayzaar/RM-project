import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList() {
  const [characters, setCharacter] = useState([])
  
  //Use Effect to make the fetch
  //Call to character url only returns first 20 characters 
  useEffect(() => {
    const characterURL = "https://rickandmortyapi.com/api/character"

    fetch(characterURL)
    .then(res => res.json())
    .then(({results}) => {
      setCharacter({ characters: results })
      // console.log(data)
    })
  }, [])
  
  // const showCharacters = () => characters.results.map(character => {
    // return <img src={character.image} />
    //   return <CharacterCard 
    //     key={ character.id }  
    //     character={ character }
    // />
    
  //   })

  return (
    <div>
      <CharacterCard characters={ characters } key={ characters.id} />
    </div>
  )
}

export default CharacterList;