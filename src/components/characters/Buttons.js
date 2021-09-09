import React from 'react'
import { IconContext } from 'react-icons'
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi"

function Buttons({ characters, pageNumber, setPageNumber, pageSize }) {

  let totalPages = Math.ceil(characters.length / pageSize)

  const nextPage = () => {
    // this ternary prevents the increment counter from going above 1 when paginating forward
    setTimeout(() => {
      return pageNumber === totalPages - 1 ?
        pageNumber :
        setPageNumber(pageNumber + 1)
      }, 200)
  }

  const prevPage = () => {
    // This ternary prevents the decrement counter from going below 0 when paginating backward
    setTimeout(() => {
      return pageNumber === 0 ?
      pageNumber :
      setPageNumber(pageNumber - 1)
    }, 200)
  }

  const jumpToLast = () => {
    return pageNumber === totalPages ?
    pageNumber :
    setPageNumber(totalPages - 1) 
  }

  const jumpToFirst = () => {
    return pageNumber === 0 ?
    pageNumber :
    setPageNumber(0)
  }

  return (
    // IconContext styling in app.css
    <IconContext.Provider value={{ className: "cl-icons" }} >
      <div className="order-2 flex flex-row items-center justify-center m-1 mt- space-x-4">
          <button type="button" className="border rounded-md shadow bg-blue-500 hover:bg-blue-400 active:bg-blue-400 text-white p-1" onClick={jumpToFirst}><FiChevronsLeft /></button>
          <button type="button" className="border rounded-md shadow bg-blue-500 hover:bg-blue-400 active:bg-blue-400 text-white p-1" onClick={prevPage} ><FiChevronLeft /></button> 
          <button type="button" className="border rounded-md shadow bg-blue-500 hover:bg-blue-400 active:bg-blue-400 text-white p-1" onClick={nextPage} ><FiChevronRight /></button> 
          <button type="button" className="border rounded-md shadow bg-blue-500 hover:bg-blue-400 active:bg-blue-400 text-white p-1" onClick={jumpToLast}><FiChevronsRight /></button>
        </div>
    </IconContext.Provider>
  )
}

export default Buttons