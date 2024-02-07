import React from 'react'
import './_searchBar.css'
import SearchBarInput from './searchBarInput/SearchBarInput'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getList, clearListAction } from '../../actions/list'

const SearchBar = () => {
    const [quantity, setQuantity] = useState(0)
    const [item, setItem] = useState('')
    const dispatch = useDispatch()
    const list = useSelector(state => state.reducer)

    const handleItemAddition = () => {
        const data = {
            quantity,
            item,
            id : !list.length ? (list.length + 1) : (list[list - 1]?.id + 1)
        }
        dispatch(getList(data))
        setItem('')
        setQuantity(0)
        console.log(data)
    }

    const clearList = () => {
        dispatch(clearListAction())
    }
  return (
    <section className='searchBar'>
        <div className='searchBar__text'>
            <p>{`What do you need for your trip 🌈`}</p>
        </div>
        <SearchBarInput type={`text`} classname={`searchBar__input__text`} placeholder={`Enter item...`} value={item} change={setItem} />
        <SearchBarInput min = {"0"} maxLength = {"2"} type={`number`} classname={`searchBar__input__quantity`} placeholder={``} value = {quantity} change={setQuantity} />
        <div className='searchBar__button'>
            <button disabled = {!item || (parseInt(quantity) <= 0)} onClick={handleItemAddition}>{`Add`}</button>
            <button style={{marginLeft: '8px'}} disabled = {!list.length} onClick={clearList}>{`Clear List`}</button>
        </div>
    </section>
  )
}

export default SearchBar