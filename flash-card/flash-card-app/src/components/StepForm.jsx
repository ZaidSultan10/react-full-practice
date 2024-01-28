import React from 'react'
import { data } from '../assets/data'
import { useState } from 'react'

const StepForm = () => {
    const [increment, setIncrement] = useState(1)
  return (
    <section className='stepForm__main'>
        <div className='stepForm__top'>
            {
                data && data.map(elem => (
                <div key={elem.id} className={`stepForm__main__stepCount ${increment === elem.id ? `active` : 
                increment > elem.id ? `complete` : `notAttempted`}`}>
                        <p>{elem.id}</p>
                    </div>
                ))
            }
        </div>
        <div className='stepForm__center'>
            <p>
                { 
                    data && data.filter(item => item.id === increment)[0]?.step
                }
            </p>
        </div>
        <div className='stepForm__bottom'>
            <button disabled = {increment === 1} onClick={() => setIncrement(increment - 1)}>{`Previous`}</button>
            <button disabled = {increment === data.length} onClick={() => setIncrement(increment + 1)}>{`Next`}</button>
        </div>
    </section>
  )
}

export default StepForm