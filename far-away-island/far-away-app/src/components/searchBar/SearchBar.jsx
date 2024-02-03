import React from 'react'
import './_searchBar.css'
import SearchBarInput from './searchBarInput/SearchBarInput'

const SearchBar = () => {
  return (
    <section className='searchBar'>
        <div className='searchBar__text'>
            <p>{`What do you need for your trip 🌈`}</p>
        </div>
        <SearchBarInput type={`text`} classname={`searchBar__input__text`} placeholder={`Enter item...`} />
        <SearchBarInput type={`number`} classname={`searchBar__input__quantity`} placeholder={``}/>
        <div className='searchBar__button'>
            <button>{`Add`}</button>
        </div>
    </section>
  )
}

export default SearchBar