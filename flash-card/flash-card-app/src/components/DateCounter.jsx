import React from 'react'
import { useState } from 'react'
import moment from 'moment'

const DateCounter = () => {
    const [counter, setCounter] = useState(0)
    const [steps, setSteps] = useState(1)
    
  return (
    <section className='dateCounter'>
        <div className='dateCounter__counter'>
            <button disabled = {!counter} onClick={() => counter < steps ? setCounter((steps - (steps - counter)) - counter) : setCounter(counter - steps)}>-</button>
            <p>{`Count : ${counter}`}</p>
            <button onClick={() => setCounter(counter + steps)}>+</button>
        </div>
        <div className='dateCounter__date'>
            <h3>
                {moment().subtract(counter, 'days').utc().format("DD-MMM-YYYY HH:mm:ss")}
            </h3>
        </div>
        <div className='dateCounter__steps'>
            <button disabled = {steps <= 1} onClick={() => setSteps(steps - 1)}>-</button>
            <p>{`Steps : ${steps}`}</p>
            <button onClick={() => setSteps(steps + 1)}>+</button>
        </div>
    </section>
  )
}

export default DateCounter