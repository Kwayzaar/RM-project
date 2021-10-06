import React, { useState, useEffect } from 'react'

function LocationList({ characters }) {
  const [locations, setLocations] = useState([])

  function getLocations(characters) {
    
    let locationArr = []
    for(let i = 0; i < characters.length; i++){
      locationArr.push(characters[i].location)
    }

    // filter the location array to remove duplicates 
    let filteredArr = locationArr.filter((locationArr, index, self) => index === self.findIndex((t) => (t.name === locationArr.name)))

  // return setLocations(filteredArr)
  }

  useEffect(() => {
    getLocations(characters)
  })

  console.log(locations)

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