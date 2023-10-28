import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextUtils from './Components/TextUtils'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-4xl font-bold'>TEXT UTILS</h1>

    <TextUtils/>
    </>
  )
}

export default App
