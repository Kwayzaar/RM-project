import React, {useState} from 'react'

function LocationButtons({ location }) {

  console.log(location)

  return (
      <li className="flex flex-col items-center m-2 ">
        <button className="border-2 border-black min-w-full h-16 max-h-16 rounded-lg leading-tight text-lg text-white bg-gray-900">{location.name}</button>
      </li>
  )
}

export default LocationButtons