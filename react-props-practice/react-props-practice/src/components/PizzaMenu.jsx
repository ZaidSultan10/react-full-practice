import React from 'react'
import PizzaMenuCard from './PizzaMenuCard'
import { pizzaData } from '../assets/pizzaData'

const PizzaMenu = () => {
  return (
    <div style={{display:'grid', gridTemplateColumns : 'repeat(2,1fr)', placeItems:'center', 
    width : '600px'}}>
        {
          pizzaData.map(item => (
            <PizzaMenuCard 
              id = {item.id} 
              isSoldOut = {item.isSoldOut} 
              currency = {item.currency} 
              price = {item.price}
              ingredients = {item.ingredients}
              name = {item.name} 
              image = {item.image}
            />
          ))
        }
    </div>
  )
}

export default PizzaMenu