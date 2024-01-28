import React from 'react'

const Warning = ({message}) => {
  return (
    <div className='warning'>
        <h3>
            {message}
        </h3>
    </div>
  )
}

export default Warning