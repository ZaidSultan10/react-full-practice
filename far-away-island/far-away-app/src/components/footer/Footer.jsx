import React from 'react'
import './_footer.css'
import { useSelector } from 'react-redux'

const Footer = () => {
    const list = useSelector(state => state.reducer)
  return (
    <div className='footer'>
        {list && list.length ? (
            <p>{`👜 You have total ${list.length} items and you have packed ${list.filter(item => item.status === "Completed").length} 
            items (${((list.filter(item => item.status === "Completed").length / list.length) * 100).toFixed(2)}% items) 👜`}</p>
        ) : (
            <p>{`Please add items to start your journey`}</p>
        )}
    </div>
  )
}

export default Footer