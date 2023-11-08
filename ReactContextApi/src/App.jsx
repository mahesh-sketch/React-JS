import { useState } from 'react'
import './App.css'
import Signupform from './Components/Signupform'
import UserContextProvider from './context/UserContextProvider'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1 className='text-3xl font-bold'>React Context API</h1>
    <Signupform/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
