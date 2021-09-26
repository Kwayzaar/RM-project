import React, { useState } from 'react'

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  //styles
  const navbarButton = "flex flex-col h-10 w-10 border-2 border-white justify-center items-center group cursor-pointer" 

  const navLine = "h-1 w-6 my-1 bg-black rounded-full transition ease transform duration-300"

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    
      <button onClick={handleToggle} className={navbarButton} alt="menu-button">
        <div className={`${navLine} ${
          navbarOpen 
          ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100" 
          : "opacity-100 group-hover:opacity-50"}`} />
        <div className={`${navLine} ${
          navbarOpen 
          ? "opacity-0" 
          : "opacity-100 group-hover:opacity-50"}`} />
        <div className={`${navLine} ${
        navbarOpen 
        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100" 
        : "opacity-100 group-hover:opacity-50"}`} />
      </button>
    
  )
}

export default NavBar