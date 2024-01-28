import React from 'react'
import { data } from '../assets/data'
import { useState } from 'react'

const StepForm = () => {
    const [increment, setIncrement] = useState(1)
  return (
    <section className='stepForm__main'>
        <div>
            {
                data && data.map(elem => (
                    <div key={elem.id} className='stepForm__main__stepCount'>
                        <p>{elem.id}</p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default StepForm