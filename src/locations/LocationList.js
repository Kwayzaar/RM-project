import react, { useState, useEffect } from 'react'

function LocationList({ characters }) {
  const parse = response => response.json()

  function showLocations(characters) {
    for(let i = 0; i < characters.length; i++) {
      console.log(characters[i].location)
      }
    }

  showLocations(characters)

  return (
    <div className="flex-col min-w-screen min-h-full p-1.5 mt-10 bg-blue-100 shadow-lg overflow-hidden">
      <ul>
        <li>
          <a href=""></a>
        </li>
        <li>location</li>
        <li>location</li>
        <li>location</li>
      </ul>
    </div>
  )
}

export default LocationList 