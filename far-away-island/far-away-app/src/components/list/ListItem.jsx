import React from 'react'
import './_list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faHamburger } from '@fortawesome/free-solid-svg-icons'

const ListItem = ({name, status}) => {
  return (
    <div key={name} className='list__container'>
        <div className='list__actions'>
            <button>
                <FontAwesomeIcon style={{color:'rgba(68, 68, 68, 0.4)'}} icon = {faTimesCircle} />
            </button>
            <button>
                <FontAwesomeIcon style={{color:'rgba(68, 68, 68, 0.4)'}} icon = {faHamburger} />
            </button>
        </div>
        <div className='list__item'>
            <input type='checkbox' />
            <p>{name}</p>
        </div>
    </div>
  )
}

export default ListItem