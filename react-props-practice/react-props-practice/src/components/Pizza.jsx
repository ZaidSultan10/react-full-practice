import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import PizzaMenu from './PizzaMenu'

const Pizza = () => {
  return (
    <div>
        <div>
            <Heading heading={`-- FAST REACT PIZZA CO. --`} />
        </div>
        <div>
            <Heading heading={`OUR MENU`} hasLines={true} />
        </div>
        <div>
            <Paragraph />
        </div>
        <div>
            <PizzaMenu />
        </div>
        <div>
            <Paragraph />
        </div>
    </div>
  )
}

export default Pizza