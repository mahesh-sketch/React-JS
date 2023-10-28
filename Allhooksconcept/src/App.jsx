import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStates from './Components/UseState'
import UseContext from './Components/UseContext'
import UseEffect from './Components/UseEffect'
import UseCallback from './Components/UseCallback'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UseStates/>
    <UseContext/>
    <UseEffect/>
    <UseCallback/>
    </>
  )
}

export default App
