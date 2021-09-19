import React from 'react'
import NavBar from '../menu/NavBar'

function Header() {
  return (
    <div className="sticky top-0 bg-white">
      <header className="w-full h-10 mb-32 mt-4 text-black">
        <NavBar />
      </header>
    </div>
  )
}

export default Header;



