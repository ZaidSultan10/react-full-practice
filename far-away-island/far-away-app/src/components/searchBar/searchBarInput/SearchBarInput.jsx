import React from 'react'

const SearchBarInput = ({type, classname, placeholder, value, change}) => {
  return (
    <div className={classname}>
        <input type={type} placeholder={placeholder} value={value} onChange={(e) => change(e.target.value)} />
    </div>
  )
}

export default SearchBarInput