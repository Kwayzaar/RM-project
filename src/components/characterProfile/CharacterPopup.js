import React from 'react'

function CharacterPopup(props) {
  return (props.trigger) ? (
    <div className="">
      <div>
        <button onClick={() => props.setTrigger(false)}>Back</button>
        { props.children }
      </div>
    </div>
  ) : ""
}

export default CharacterPopup;