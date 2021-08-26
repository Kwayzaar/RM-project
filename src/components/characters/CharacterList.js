import React, { useState } from 'react'
import CharacterCard from './CharacterCard'

function CharacterList({ characters }) {
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(6)

  const [lastPage, setLastPage] = useState([])
  const [firstPage, setFirstPage] = useState([])

  let totalPages = Math.ceil(characters.length / pageSize)
  // console.log(totalPages)
  

  function paginate(array, pageSize, pageNumber) {
    const arrayStart = pageNumber * pageSize
    const arrayEnd = pageNumber * pageSize + pageSize
    return characters.slice(arrayStart, arrayEnd)
  }

  const nextPage = () => {
    // this ternary prevents the increment counter from going above 1
    return pageNumber === totalPages ?
      pageNumber :
    setPageNumber(pageNumber + 1)
  }

  const prevPage = () => {
    // this ternary prevents the decrement counter from going below 0
    return pageNumber === 0 ?
      pageNumber :
      setPageNumber(pageNumber - 1)
  }

  const goToLastPage = () => {
    setLastPage(characters.slice(-7, -1))
    setPageNumber(totalPages)
    setPageSize(6)
    console.log(lastPage)
    console.log(pageNumber)
    console.log(pageSize)
  }
  

  const createCard = () => paginate(characters, pageSize, pageNumber).map(character => { 
    return (
      <CharacterCard character={ character } key={ character.id } />
    )
  })


  return (
    <div className="w-full h-1/4 p-1.5 bg-gray-100">
      <ul className="grid grid-cols-2">
        {createCard()}
      </ul>
      <div className="flex flex-row items-center justify-center">
        <button type="button" onClick={prevPage} className="border-2 border-black m-1">prev</button> 
        <button type="button" onClick="">First</button>
        <button type="button" onClick={goToLastPage}>Last</button>
        <button type="button" onClick={nextPage} className="border-2 border-black m-1">next</button> 
      </div>
    </div>
  )
}

export default CharacterList;