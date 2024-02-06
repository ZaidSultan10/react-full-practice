import React from 'react'
import './_list.css'
import ListItem from './ListItem'

const List = () => {
  return (
    <section className='list'>
        <div className='list__main'>
            <ListItem />
            <ListItem />
        </div>
    </section>
  )
}

export default List