import React, { useState, useEffect } from 'react'
import LocationButtons from './LocationButtons'

function LocationContainer({ locations }) {
  const [filteredArr, setFilteredArr] = useState([])
  
  // This function gets locations based on the characters fetched and pushes into new array. Also removes location duplicates 
  const filterArr = (arr) => {
    let localArr = arr
    localArr = localArr.filter((arr, index, self) => index === self.findIndex((t) => (t.name === arr.name)))
    
    return setFilteredArr(localArr)
  } 

  useEffect(() => {
    filterArr(locations)
  }, [locations])
  
  const createLocationButtons = () => filteredArr.map((location, index) => {
    console.log(location.name)
    return (
      <LocationButtons location={ location } url={ location.url } key={ index }/>
    )
  })



  return (
    <div className="flex-col min-w-full min-h-full overflow-hidden p-1.5 mb-10 bg-white shadow-lg overflow-hidden">
      <div className="background-none">
        <ul className="grid grid-cols-2 order-1 sm:grid-cols-3 sm:px-28 md:px-44 lg:px-60 xl:px-96">
        {createLocationButtons()}
        </ul>
      </div>
    </div>
  )
}

export default LocationContainer 