import React from 'react'
import {IoMdSearch} from "react-icons/io"

export default function SearchBar({handleSubmit,handleChange,input,handleClick}) {
 
  
  return (
    <section className="form-section">
      <form onSubmit={handleSubmit} className="form">
        <input 
        type="text" 
        placeholder="Search" 
        name={input} 
        value={input} 
        onChange={handleChange}
        onKeyDown={handleClick}
          className="input"
        />
        <button className="search-btn"><IoMdSearch className="search-icon"/>Search</button>
      </form>
    </section>
  )
}
