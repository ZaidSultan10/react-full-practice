import React from 'react'
import './_list.css'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'

const List = () => {
    const list = useSelector(state => state.reducer)
    console.log('list ->',list)
  return (
    <section className='list'>
        <div className='list__main'>
            {list && list.length > 0 ? list.map(item => (
                <ListItem name = {item.name} status = {item.status} />
            )) : ``}
        </div>
    </section>
  )
}

export default List