import React from 'react'
import { projectButtons } from '../assets/data'
import { useState } from 'react'
import StepForm from '../components/StepForm'
import DateCounter from '../components/DateCounter'
import Warning from '../components/Warning'

const Proejcts = () => {
    const [projectButton, setProjectButton] = useState('')
    const renderSwitch = (param) => {
        if(param === 'Reset'){
            setProjectButton('')
        }else{
            switch(param) {
              case 'StepForm':
                return (<StepForm />);
              case 'DateCounter':
                return (<DateCounter />);
              default:
                return (<Warning message = {`Please Click On Any Project To View It's Details`} />);
            }
        }
      }
  return (
    <section className='projects'>
        <div className='projects__buttons'>
            {projectButtons && projectButtons.map(button => (
                <button key={button.id ? button.id : 'no-key'} onClick={() => setProjectButton(button.name)} className='projects__each__button'>{button.name}</button>
            ))}
        </div>
        {
            !projectButton ? (
                <Warning message = {`Please Click On Any Project To View It's Details`} />
            ) : (
                renderSwitch(projectButton)
            )
        }
    </section>
  )
}

export default Proejcts