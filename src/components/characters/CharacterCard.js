
function characterCard({ characters }) {
  const createCard = () => characters.result.map(character => {
    return (
      <li key={ character.id }>

      </li>
    )
  })

  return(
    <div>
  
    </div>
  )
}

export default characterCard; 