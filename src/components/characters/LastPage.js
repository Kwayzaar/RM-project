import React, { useState } from 'react'
import CharacterCard from './CharacterCard'

function LastPage ({ lastPage, createCard }) {

  const createLastPage = () => {
    // console.log(lastPage)
    return lastPage.map(character => {
      return <CharacterCard character={ character } key={ character.id } />
    })
  }

  return (
    <div>
      <ul className="grid grid-cols-2">
        {createLastPage()}
      </ul>
    </div>
  )
}

export default LastPage