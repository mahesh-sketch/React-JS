import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //usestate hooks who track the state of application
  let [counter, setCounter]= useState(0) 

  // function to add or remove value
  const add = ()=>{
    setCounter(counter++)
  }

  const remove = ()=>{
    if(counter>=0){
      setCounter(counter--)
    }
  }

  return (
    <>
    <h1>ADD OR REMOVE ME</h1>
    <h2>Counter : {counter}</h2>
    <div className="buttonclass">
    <button onClick={add} className="btn1">Add</button>
    <button onClick = {remove} className="btn2">Remove</button>
    </div>
    </>
  )
}

export default App
