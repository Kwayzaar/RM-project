import React, {useState} from 'react'

function LocationButtons({ location }) {

  return (
      <li className="flex flex-col items-center m-2 ">
        <button className="border-2 border-black min-w-full rounded-lg leading-tight">{location.name}</button>
      </li>
  )
}

export default LocationButtons