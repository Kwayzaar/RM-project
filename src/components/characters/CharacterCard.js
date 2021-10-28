import { useState } from 'react'
import CharacterPopup from '../characterProfile/CharacterPopup'

function CharacterCard({ character }) {
  const [popup, setPopup] = useState(false)
  
  return (
  <div>
    <li className="flex flex-col items-center m-2" alt="character-icons">
      <h2 className="flex items-center text-center h-full" alt={character.name}>
        { character.name }
      </h2>
        <img onClick={() => setPopup(true) } src={ character.image } className="w-28 sm:w-28 sm:h-28 rounded-lg shadow-lg h-28" alt={character.name + " image"}
        />
    </li>

    <CharacterPopup trigger={popup} setTrigger={setPopup}>
      <div className="">
        <div>
          <p>Hello</p>
        </div>
      </div>
    </CharacterPopup>
  </div>
  )}

export default CharacterCard; 