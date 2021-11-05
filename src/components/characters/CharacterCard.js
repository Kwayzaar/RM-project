import { useState } from 'react'
import Modal from 'react-modal'
import CharacterPopup from '../characterProfile/CharacterPopup'

function CharacterCard({ character }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
  }

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      backgroundColor       : '#F0AA89'      
    }
  }
  
  return (
    <div>
    <li className="flex flex-col items-center m-2" alt="character-icons">
      <button onClick={() => toggleModal()}>
        <h2 className="flex items-center text-center h-full" alt={character.name}>
          { character.name }
        </h2>
        <img src={ character.image } className="w-28 sm:w-28 sm:h-28 rounded-lg shadow-lg h-28" alt={character.name + " image"}
        />
      </button>
    </li>

    <Modal isOpen={ modalIsOpen } style="">
      <button 
        type="button" 
        class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" 
        onClick={ toggleModal }
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        >
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <CharacterPopup />
    </Modal>
  </div>

  )}

export default CharacterCard; 