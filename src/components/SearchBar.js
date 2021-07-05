import React,{useState} from 'react'

export default function SearchBar({handleSubmit,handleChange,input}) {
 
  
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" placeholder="Search" name={input} value={input} onChange={handleChange}/>
        <button>Search</button>
      </form>
    </div>
  )
}
