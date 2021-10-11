import React, { useState, useEffect, useRef } from 'react'
import LocationButtons from './LocationButtons'

function LocationContainer({ characters }) {
  const [locations, setLocations] = useState(characters)
  const [locationId, setLocationId] = useState(0)

  useEffect(() => {
    setLocations(characters)
    // filterArr(locations)
  }, [characters])
  
  // filter the location array to remove duplicates 
  function filterArr(arr) {
    locationArr = arr.filter((arr, index, self) => index === self.findIndex((t) => (t.name === arr.name)))
    return arr
  }

  // setLocations(characters)
// This function gets locations based on the characters fetched and pushes into new array. Also removes location duplicates 
  // function getLocations(arr) {
  //     let locationArr = []
  //     for(let i = 0; i < arr.length; i++){
  //       locationArr.push(arr[i].location)
  //     }
  //     return setLocations(locationArr)
  // }



  const createLocationButtons = () => locations.map(location => {
    return <LocationButtons location={ location.name } key={ location.id }/>
  })

  return (
    <div className="flex-col min-w-screen min-h-full p-1.5 mt-10 bg-white shadow-lg overflow-hidden">
      <ul className="grid grid-cols-2 order-1 sm:grid-cols-3 sm:px-28 md:px-44 lg:px-60 xl:px-96">
      {createLocationButtons()}
      </ul>
    </div>
  )
}

export default LocationContainer 