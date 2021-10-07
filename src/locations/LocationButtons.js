import React, {useState} from 'react'

function LocationButtons({ location }) {

  return (
      <li>
        <button type="button" className="text-white bg-black">
          {location.name}
        </button>
      </li>
  )
}

export default LocationButtons