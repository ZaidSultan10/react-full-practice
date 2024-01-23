import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import PizzaMenu from './PizzaMenu'

const Pizza = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center', flexDirection:'column',height:'100%'}}>
        <div>
            <Heading heading={`-- FAST REACT PIZZA CO. --`} />
        </div>
        <div>
            <Heading heading={`OUR MENU`} hasLines={true} lineWidth = {`60px`} />
        </div>
        <div>
            <Paragraph title={`Authentic Pizzas`} />
        </div>
        <div>
            <PizzaMenu />
        </div>
        <div>
            <Paragraph title={`Open till 22:00`} />
        </div>
    </div>
  )
}

export default Pizza