import React, { useState, useEffect, useRef } from 'react'
import LocationButtons from './LocationButtons'

function LocationContainer({ characters }) {
  const [locations, setLocations] = useState([])
  const [locationId, setLocationId] = useState(0)

  useEffect(() => getLocations(characters), [])

// This function gets locations based on the characters fetched and pushes into new array. Also removes location duplicates 
function getLocations(arr) {
    let locationArr = []
    for(let i = 0; i < arr.length; i++){
      locationArr.push(arr[i].location)
    }

    // filter the location array to remove duplicates 
    const filteredArr = locationArr.filter((locationArr, index, self) => index === self.findIndex((t) => (t.name === locationArr.name)))

    return setLocations(filteredArr)
  }

  

  const createLocationButtons = () => locations.map(location => {
    return <LocationButtons location={ location.name } key={ location.id }/>
  })

  return (
    <div className="flex-col min-w-screen min-h-full p-1.5 mt-10 bg-blue-100 shadow-lg overflow-hidden">
      <ul>
      {createLocationButtons()}
      </ul>
    </div>
  )
}

export default LocationContainer 