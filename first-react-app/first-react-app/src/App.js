import React, { useEffect, useState } from 'react'
import './App.css';
import Counter from './components/Counter';

function App() {
  const [advices, setAdvices] = useState('')
  const [count, setCount] = useState(0)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const getAdvice = async () => {
    try{
      setLoading(true)
      const res = await fetch("https://api.adviceslip.com/advice")
      const data = await res.json()
      setLoading(false)
      setAdvices(data.slip.advice)
      setCount(count + 1)
    } catch(e){
      if(loading){
        setLoading(false)
      }
      console.log(`Catch Error : Something Went Wrong. Details Of The Error Are As Follow :- ${e}`)
      setError(`Catch Error : Something Went Wrong. Details Of The Error Are As Follow :- ${e.message}`)
    }
  }

  useEffect(() => {
    getAdvice()
  }, [])

  return (
    <div className="App">
      {error && (<h3 style={{color:'red'}}>{error}</h3>)}
      {loading && (<h3>{`Loading...`}</h3>)}
      {advices && (<h3>{advices}</h3>)}
      <button disabled = {loading} onClick={() => getAdvice()}>Advice</button>
      <p>
        <Counter count = {count} loading = {loading} />
      </p>
    </div>
  );
}

export default App;
