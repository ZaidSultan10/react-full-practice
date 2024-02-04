import React from 'react'
import './_list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const List = () => {
  return (
    <section className='list'>
        <div className='list__actions'>
            <button>
                <FontAwesomeIcon icon = {faCoffee} />
            </button>
        </div>
        <div className='list__item'>
            <input type='checkbox' />
            <p>2 biscuits</p>
        </div>
    </section>
  )
}

export default List