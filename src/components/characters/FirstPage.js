import React, { useState } from 'react'
import CharacterCard from './CharacterCard'

function FirstPage ({ firstPage, createCard }) {

  const createFirstPage = () => {
    // console.log(lastPage)
    return firstPage.map(character => {
      return <CharacterCard character={ character } key={ character.id } />
    })
  }

  return (
    <div>
      <ul className="grid grid-cols-2">
        {createFirstPage()}
      </ul>
    </div>
  )
}

export default FirstPage