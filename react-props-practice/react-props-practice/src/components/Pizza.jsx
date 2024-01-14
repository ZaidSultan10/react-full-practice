import React from 'react'
import Heading from './Heading'
import Paragraph from './Paragraph'
import PizzaMenu from './PizzaMenu'

const Pizza = () => {
  return (
    <div>
        <div>
            <Heading />
        </div>
        <div>
            <Heading />
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