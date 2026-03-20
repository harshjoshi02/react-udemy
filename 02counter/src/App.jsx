import { useState } from 'react'
import './App.css'

function App() {

  //let counter = 15;

  const [counter, setCounter] = useState(1)

  const addValue = () => {
    setCounter(counter + 1)
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }


  return (
    <>
      <h1>react course {counter}</h1>
      <h2>counter value: {counter} </h2>
      <button 
        onClick = {addValue}>add value</button>
      <button
        onClick = {removeValue}>remove value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
