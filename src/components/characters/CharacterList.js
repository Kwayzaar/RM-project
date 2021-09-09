import React, { useState } from 'react'
import CharacterCard from './CharacterCard'
import Buttons from './Buttons'

function CharacterList({ characters }) {
  const [pageNumber, setPageNumber] = useState(0)
  const [pageSize, setPageSize] = useState(6)

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
    <div className="flex-col min-w-full min-h-full overflow-hidden p-1.5 bg-blue-100 shadow-lg overflow-hidden">
      <div className="background-none">
        <ul className="grid grid-cols-2 order-1 sm:grid-cols-3 sm:px-20">      
          {createCard()}
        </ul>
        <Buttons 
          characters={ characters }
          pageNumber={ pageNumber}  
          setPageNumber={ setPageNumber } 
          pageSize={ pageSize }
        />
      </div>
    </div>
  )
}

export default CharacterList;