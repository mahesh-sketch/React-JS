import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card.jsx'

function App() {
  const [count, setCount] = useState(0)


let name = {
  name1: "Mahesh",
  name2: "Dash",
}
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl' >Mahesh kumar Dash</h1>
    <div class = "Container">
    <Card username = "Mahesh" location = "BBSR" />
    <br />
    <Card username = "Shubham" location = "CTC"/>
    
    </div>
    </>
  )
}

export default App
