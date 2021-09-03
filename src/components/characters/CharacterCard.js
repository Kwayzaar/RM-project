
function CharacterCard({ character }) {
  return (
  <li className="flex flex-col items-center m-2">
    <h2 className="flex items-center text-center h-8">{ character.name }</h2>
    <img src={ character.image } className="w-28 md:w-16 rounded-lg shadow-lg h-28"></img>
  </li>
  )}

export default CharacterCard; 