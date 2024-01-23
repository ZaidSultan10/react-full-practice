import React from 'react'

const PizzaMenuCard = ({id, image, name, price, currency, ingredients, isSoldOut}) => {
  return (
    <div key={id} style={{width:'100%', padding:'1rem', display:'flex', alignItems:'center',justifyContent:'space-evenly'}}>
        <div style={{height:'100%'}}>
            <img src={image} height={80} width={80} style={{borderRadius : '8px'}} />
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
            <div>
              <h4  style={{fontSize : '16px'}}>{name}</h4>
              <p style={{fontSize : '10px'}}>{ingredients}</p>
            </div>
            <div style={{marginTop:'8px'}}>
              <p style={{fontSize : '10px'}}>{isSoldOut ? `Sold Out` : `${currency} ${price}`}</p>
            </div>
        </div>
    </div>
  )
}

export default PizzaMenuCard