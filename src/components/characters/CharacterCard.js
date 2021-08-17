
function characterCard({ character }) {
  return (
  <li>
    <h2>{ character.name }</h2>
    <img src={ character.image } className="w-16 md: lg: "></img>
  </li>
  )}

export default characterCard; 