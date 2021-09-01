
function CharacterCard({ character }) {
  return (
  <li className="flex flex-col items-center justify-center m-2">
    <h2 className="text-center">{ character.name }</h2>
    <img src={ character.image } className="w-36 md:w-16 lg: "></img>
  </li>
  )}

export default CharacterCard; 