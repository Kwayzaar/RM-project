
function CharacterCard({ character }) {
  return (
  <li className="flex flex-col items-center m-2">
    <h2 className="flex items-center text-center h-full">{ character.name }</h2>
    <img src={ character.image } className="w-28 sm:w-28 sm:h-28 rounded-lg shadow-lg h-28"></img>
  </li>
  )}

export default CharacterCard; 