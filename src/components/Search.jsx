import React from 'react'



const Search = ({searchTerm, setsearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <input src='search.svh' alt="search"/>
            <input type='text'
            placeholder='Search 1k of mocies'
            value={searchTerm}
            onChange={(e)=>setsearchTerm(event.target.value)}
            />
        </div></div>
  )
}

export default Search