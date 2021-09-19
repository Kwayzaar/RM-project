
function CharacterCard({ character }) {
  return (
  <li className="flex flex-col items-center m-2" alt="character-icons">
    <h2 className="flex items-center text-center h-full" alt={character.name}>{ character.name }</h2>
  <img src={ character.image } className="w-28 sm:w-28 sm:h-28 rounded-lg shadow-lg h-28" alt={character.name + " image"}/>
  </li>
  )}

export default CharacterCard; 