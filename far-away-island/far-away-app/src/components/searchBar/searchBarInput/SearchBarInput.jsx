import React from 'react'

const SearchBarInput = ({min, maxLength,type, classname, placeholder, value, change}) => {
  return (
    <div className={classname}>
        <input min={min} type={type} placeholder={placeholder} value={value} onChange={(e) => change(e.target.value)} />
    </div>
  )
}

export default SearchBarInput