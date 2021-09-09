import React, { useState } from 'react'
import CharacterCard from './CharacterCard'
import Buttons from './Buttons'

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

  return (
    <div className="flex-col w-full min-h-full overflow-hidden p-1.5 bg-white shadow-lg">
      <ul className="grid grid-cols-2 order-1 sm:grid-cols-3 sm:px-20">      
        {createCard()}
      </ul>
      <Buttons pageNumber={pageNumber} setPageNumber={setPageNumber} pageSize={pageSize} totalPages={totalPages} />
    </div>
  )
}

export default CharacterList;