import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList({ characters }) {
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  
  
  function paginate(array, page_size, page_number) {
    const arrayStart = page_number * page_size
    const arrayEnd = page_number * page_size + page_size
    return characters.slice(arrayStart, arrayEnd)
  }

  const nextPage = () => {
    return pageNumber == 1 ?
      pageNumber :
    setPageNumber(pageNumber + 1)
  }

  const prevPage = () => {
    // this ternary prevents the counter from going below 0
    return pageNumber == 0 ?
      pageNumber :
      setPageNumber(pageNumber - 1)
  }

  // ATTEMPT AT PAGINATION
  // const createCard = () => characterArray.slice(0,9).map(character => {
  //   return <CharacterCard character={ character } key={ character.id } />
  // })

  //ORIGINAL FUNCTION FOR RENDERING CARDS 
  //This function maps ("breaks open") characters object (state) and passes it down to CharacterCard. Then, for each character in state, it returns CharacterCard with a key prop attached 
  const createCard = () => paginate(characters, pageSize, pageNumber).map(character => { 
    return (
      <CharacterCard character={ character } key={ character.id } />
    )
  })



  return (
    <div className="w-full h-1/4 p-1.5 bg-gray-100">
      <ul className="flex flex-row flex-wrap">
        {createCard()}
      </ul>
      <button type="button" onClick={prevPage} className="border-2 border-black m-1">prev</button> 
      <button type="button" onClick={nextPage} className="border-2 border-black m-1">next</button> 
    </div>
  )
}

export default CharacterList;