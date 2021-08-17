
function characterCard({ character }) {
  return (
  <li>
    <h2>{ character.name }</h2>
    <img src={ character.image } />
  </li>
  )}

export default characterCard; 