import React from 'react'
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <button onClick={handleIncrement}>{`+`}</button>
      <h3>{count}</h3>
      <button disabled = { count === 0 } onClick={handleDecrement}>{`-`}</button>
    </div>
  );
}

export default App;
