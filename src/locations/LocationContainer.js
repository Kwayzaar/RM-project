import React, { useState, useEffect } from 'react'
import LocationList from './LocationList'

function LocationContainer({ characters }) {
  const [locations, setLocations] = useState([])
  const [locationId, setLocationId] = useState(0)

  function getLocations(characters) {

    let locationArr = []
    for(let i = 0; i < characters.length; i++){
      locationArr.push(characters[i].location)
    }

    // filter the location array to remove duplicates 
    const filteredArr = locationArr.filter((locationArr, index, self) => index === self.findIndex((t) => (t.name === locationArr.name)))

    return setLocations(filteredArr)
  }

  useEffect(() => {
    getLocations(characters)
  }, [locationId])
  
  console.log(locations)

  return (
    <div className="flex-col min-w-screen min-h-full p-1.5 mt-10 bg-blue-100 shadow-lg overflow-hidden">
      <ul>
      {/* <LocationList locations={ locations } /> */}
      </ul>
    </div>
  )
}

export default LocationContainer 