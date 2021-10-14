import React, {useState} from 'react'

function LocationButtons({ location }) {

  return (
      <li className="flex flex-col items-center m-2">
        {location.name}
      </li>
  )
}

export default LocationButtons