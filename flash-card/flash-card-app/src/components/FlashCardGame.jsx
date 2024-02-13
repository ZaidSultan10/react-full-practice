import React from 'react'
import { cardData } from '../assets/cards'
import { useState } from 'react'

const FlashCardGame = () => {
    const [displayAnswers, setDisplayAnswers] = useState([])

    const handleAnswer = (id) => {
        setDisplayAnswers(!displayAnswers.includes(id) ? [...displayAnswers, id] : displayAnswers.filter(data => data !== id))
    }

  return (
    <main style={{width : '600px', margin : "0 auto", backgroundColor:'blueviolet', borderRadius : '8px',
     display:'grid', gridTemplateColumns:"repeat(3, 1fr)", objectFit:'contain',padding:'4px'}}>
        {cardData.map((item, i) => (
            <div onClick={() => handleAnswer(item.id)} style={{backgroundColor:`${displayAnswers.includes(item.id) ? 'yellow' : 'green'}`, height : "200px",
             borderRadius : '8px', padding:'8px', margin : '8px', display:'flex',
             justifyContent:'center',alignItems:'center', cursor:'pointer'}}>
                <p style={{color : `${displayAnswers.includes(item.id) ? 'black' : 'white'}`, fontStyle:'bold'}}>{displayAnswers.includes(item.id) ? item.answer : item.question}</p>
            </div>
        ))}
    </main>
  )
}

export default FlashCardGame