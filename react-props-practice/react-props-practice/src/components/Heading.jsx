import React from 'react'

const Heading = ({heading, hasLines}) => {
  return (
    <div>
        {hasLines && (
            <div>
                <hr />
            </div>
        )}
        <div>
            <h3>{heading}</h3>
        </div>
        {hasLines && (
            <div>
                <hr />
            </div>
        )}
    </div>
  )
}

export default Heading