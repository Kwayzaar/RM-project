import React, { useState, useEffect } from 'react'
import LocationButtons from './LocationButtons'

function LocationContainer({ locations }) {
  const [filteredArr, setFilteredArr] = useState([])

  useEffect(() => {
    filterArr(locations)
  }, [])

  // This function gets locations based on the characters fetched and pushes into new array. Also removes location duplicates 
      // filter the location array to remove duplicates 
    const filterArr = (arr) => {
      let localArr = arr
      localArr = localArr.filter((arr, index, self) => index === self.findIndex((t) => (t.name === arr.name)))
      
      return setFilteredArr(localArr)
    } 
  
  const createLocationButtons = () => filteredArr.map((location, index) => {
    return <LocationButtons location={ location.name } key={ index }/>
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