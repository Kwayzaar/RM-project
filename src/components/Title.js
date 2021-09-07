import React from "react"
import rmLogo from "../img/RM-logo.png"

export default function Title() {
  return (
    <div className="sm:flex backdrop-filter backdrop-blur shadow-lg">
      <img src={rmLogo} className="m-auto sm:"/>

    </div>
  )
}