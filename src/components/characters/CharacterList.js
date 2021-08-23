import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList({ characters }) {
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(6)
  
  
  function paginate(array, page_size, page_number) {
    const arrayStart = page_number * page_size
    const arrayEnd = page_number * page_size + page_size
    return characters.slice(arrayStart, arrayEnd)
  }

  const nextPage = () => {
    // this ternary prevents the counter from going above 1
    return pageNumber == 3 ?
      pageNumber :
    setPageNumber(pageNumber + 1)
  }

  const prevPage = () => {
    // this ternary prevents the counter from going below 0
    return pageNumber == 0 ?
      pageNumber :
      setPageNumber(pageNumber - 1)
  }

  const createCard = () => paginate(characters, pageSize, pageNumber).map(character => { 
    return (
      <CharacterCard character={ character } key={ character.id } />
    )
  })


  return (
    <div className="w-full h-1/4 p-1.5 bg-gray-100">
      <ul className="grid grid-cols-2">
        {/* {createCard()} */}
      </ul>
      <div className="flex flex-row items-center justify-center">
        <button type="button" onClick={prevPage} className="border-2 border-black m-1">prev</button> 
        <button type="button" onClick={nextPage} className="border-2 border-black m-1">next</button> 
      </div>
    </div>
  )
}

export default CharacterList;