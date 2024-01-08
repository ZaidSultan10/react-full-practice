import React from 'react'

const Counter = ({count, loading}) => {
  return (
    <div>{`Total advices read : ${loading ? 'Loading...' : count}`}</div>
  )
}

export default Counter