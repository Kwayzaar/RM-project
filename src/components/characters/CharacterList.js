import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList({ characters }) {
  const [pageNumber, setPageNumber] = useState(1)
  
  
  function paginate(array, page_size, page_number) {
    return characters.slice(page_number * page_size, page_number * page_size + page_size)
  }

  // ATTEMPT AT PAGINATION
  // const createCard = () => characterArray.slice(0,9).map(character => {
  //   return <CharacterCard character={ character } key={ character.id } />
  // })

  //ORIGINAL FUNCTION FOR RENDERING CARDS 
  //This function maps ("breaks open") characters object (state) and passes it down to CharacterCard. Then, for each character in state, it returns CharacterCard with a key prop attached 
  const createCard = () => characters.map(character => { 
    return (
      <CharacterCard character={ character } key={ character.id } />
    )
  })



  return (
    <div className="w-full h-1/4 p-1.5 bg-gray-100">
      <ul className="flex flex-row flex-wrap">
        {createCard()}
      </ul>
      <button type="button" >next</button> 
    </div>
  )
}

export default CharacterList;