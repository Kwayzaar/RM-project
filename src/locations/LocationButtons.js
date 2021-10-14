import React, {useState} from 'react'

function LocationButtons({ location }) {

  return (
      <li className="flex flex-col items-center m-2">
        <button>{location.name}</button>
      </li>
  )
}

export default LocationButtons