import React from 'react'
import { projectButtons } from '../assets/data'
import { useState } from 'react'
import StepForm from '../components/StepForm'
import DateCounter from '../components/DateCounter'
import Warning from '../components/Warning'
import FlashCardGame from '../components/FlashCardGame'

const Proejcts = () => {
    const [projectButton, setProjectButton] = useState('')
    const renderSwitch = (param) => {
        switch(param) {
            case 'StepForm':
                return (<StepForm />);
            case 'DateCounter':
                return (<DateCounter />);
            case 'FlashCardGame':
                return (<FlashCardGame />)
            default:
                return (<Warning message = {`Please Click On Any Project To View It's Details`} />);
        }
      }
  return (
    <section className='projects'>
        <div className='projects__buttons'>
            {projectButtons && projectButtons.map(button => (
                <button key={button.id ? button.id : 'no-key'} onClick={() => button.id ? setProjectButton(button.name) : setProjectButton('')} className='projects__each__button'>{button.name}</button>
            ))}
        </div>
        {
            renderSwitch(projectButton)
        }
    </section>
  )
}

export default Proejcts