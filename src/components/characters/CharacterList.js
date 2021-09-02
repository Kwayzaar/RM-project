import React, { useState } from 'react'
import CharacterCard from './CharacterCard'
import LastPage from './LastPage'
import FirstPage from './FirstPage'

function CharacterList({ characters }) {
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(6)
  const [showMainPage, setShowMainPage] = useState(true)
  const [showLastPage, setShowLastPage] = useState(false)
  const [showFirstPage, setShowFirstPage] = useState(false)

  let totalPages = Math.ceil(characters.length / pageSize)

  // allows user to paginate 6 at a time through array of characters
  function paginate(array, pageSize, pageNumber) {
    const arrayStart = pageNumber * pageSize
    const arrayEnd = pageNumber * pageSize + pageSize
    return characters.slice(arrayStart, arrayEnd)
  }

  // renders first 6 characters as cards on page open 
  const createCard = () => paginate(characters, pageSize, pageNumber).map(character => { 
    return (
      <CharacterCard character={ character } key={ character.id } />
    )
  })

  const createLastSet = () => paginate(characters, pageSize, totalPages).map(character => {
      return (<CharacterCard character={ character } key={ character.id } />
      )
    })

  const prevPage = () => {
    // This ternary prevents the decrement counter from going below 0 when paginating backward
    return pageNumber === 0 ?
      pageNumber :
      setPageNumber(pageNumber - 1)
  }

  const nextPage = () => {
    // this ternary prevents the increment counter from going above 1 when paginating forward
    return pageNumber === totalPages ?
      pageNumber :
      setPageNumber(pageNumber + 1)
  }

  const onClickFirst = () => {
    setShowMainPage(false)
    setShowFirstPage(true)
    setShowLastPage(false)
    // setPageNumber(0)
  }
  const onClickLast = () => { 
    setShowMainPage(false)
    setShowFirstPage(false)
    setShowLastPage(true)
    setPageNumber(totalPages)
  }

  return (
    <div className="w-full h-1/4 p-1.5 bg-gray-100">
      {/* <LastPage lastPage={ characters.slice(-7,-1)}/> */}
      <ul className="grid grid-cols-2">      
        { showMainPage ? createCard() : null}
        {showLastPage ? createLastSet() : null }
        {showFirstPage ? <FirstPage firstPage={ characters.slice(0,6)}/> : null}
      </ul>
      <div className="flex flex-row items-center justify-center">
        <button type="button" onClick={prevPage} className="border-2 border-black m-1">prev</button> 
        <button type="button" onClick={onClickFirst}>First</button>
        <button type="button" onClick={onClickLast}>Last</button>
        <button type="button" onClick={nextPage} className="border-2 border-black m-1">next</button> 
      </div>
    </div>
  )
}

export default CharacterList;