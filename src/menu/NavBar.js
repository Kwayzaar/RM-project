import React, { useState } from 'react'

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <nav className="" alt="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}></ul>
    </nav>
  )
}

export default NavBar