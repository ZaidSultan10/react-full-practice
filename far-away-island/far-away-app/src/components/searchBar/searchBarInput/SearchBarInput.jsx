import React from 'react'

const SearchBarInput = ({type, classname, placeholder}) => {
  return (
    <div className={classname}>
        <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default SearchBarInput