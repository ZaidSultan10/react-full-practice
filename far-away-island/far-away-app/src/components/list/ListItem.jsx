import React from 'react'
import './_list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faHamburger } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../../actions/list'

const ListItem = ({id ,name, status}) => {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteItem(id))
    }
  return (
    <div key={id} className='list__container'>
        <div className='list__actions'>
            <button onClick={() => handleDelete(id)}>
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