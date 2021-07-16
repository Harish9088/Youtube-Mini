import React from 'react'
import {IoMdSearch} from "react-icons/io"

export default function SearchBar({handleSubmit,handleChange,input,handleClick}) {
 
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input 
        type="text" 
        placeholder="Search" 
        name={input} 
        value={input} 
        onChange={handleChange}
        onKeyPress={handleClick}
          className="searchBar"
        />
        <button className="search-btn"><IoMdSearch className="search-icon"/>Search</button>
      </form>
    </div>
  )
}
