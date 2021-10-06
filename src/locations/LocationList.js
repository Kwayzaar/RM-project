import react, { useState, useEffect } from 'react'

function LocationList({ characters }) {
  const [location, setLocation] = useState([])

  function showLocations(characters) {
    for(let i = 0; i < characters.length; i++){
      location.push(characters[i].location)
    }
    console.log(location)
  }

    // function removeDuplicates(arr) {
      let filteredArr = locationArr.filter((locationArr, index, self) => index === self.findIndex((t) => (t.name === locationArr.name)))
    // }
    console.log(filteredArr)
    // console.log(filteredArr)
    // return locationArr
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