import React, { useState } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList({ characters }) {
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(6)

  let totalPages = Math.ceil(characters.length / pageSize)

  // allows user to paginate 6 at a time through array of characters
  function paginate(array, pageSize, pageNumber) {
    const arrayStart = pageNumber * pageSize
    const arrayEnd = pageNumber * pageSize + pageSize
    return characters.slice(arrayStart, arrayEnd)
  }

  // renders 6 characters as cards, at page open first 6 characters
  const createCard = () => paginate(characters, pageSize, pageNumber).map(character => { 
    return (
      <CharacterCard character={ character } key={ character.id } />
    )
  })

    const nextPage = () => {
      // this ternary prevents the increment counter from going above 1 when paginating forward
      setTimeout(() => {
        return pageNumber === totalPages - 1 ?
          pageNumber :
          setPageNumber(pageNumber + 1)
        }, 200)
    }

    const prevPage = () => {
      // This ternary prevents the decrement counter from going below 0 when paginating backward
      setTimeout(() => {
        return pageNumber === 0 ?
        pageNumber :
        setPageNumber(pageNumber - 1)
      }, 200)
    }
    
    const jumpToLast = () => {
      return pageNumber === totalPages ?
      pageNumber :
      setPageNumber(totalPages - 1) 
    }

    const jumpToFirst = () => {
      return pageNumber === 0 ?
      pageNumber :
      setPageNumber(0)
    }

  return (
    <div className="flex-col w-full min-h-full overflow-hidden p-1.5 bg-white shadow-lg">
      <ul className="grid grid-cols-2 order-1 ">      
        {createCard()}
      </ul>
      <div className="order-2 flex flex-row items-center justify-center m-2">
        <button type="button" onClick={prevPage} className="border-2 border-black m-1">prev</button> 
        <button type="button" onClick={jumpToFirst}>First</button>
        <button type="button" onClick={jumpToLast}>Last</button>
        <button type="button" onClick={nextPage} className="border-2 border-black m-1">next</button> 
      </div>
    </div>
  )
}

export default CharacterList;