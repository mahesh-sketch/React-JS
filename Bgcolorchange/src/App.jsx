import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colorname, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:colorname}}>
    <div className='fixed flex justify-center flex-wrap top-1/2 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-xl'> 
        <button onClick={()=>{
          setColor("olive")
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm 'style={{backgroundColor:"olive"}}>Olive</button>
        <button  onClick={()=>{
          setColor("green")
        }}className='outline-none px-4 py-1 rounded-full text-white shadow-sm 'style={{backgroundColor:"green"}}>Green</button>
        <button  onClick={()=>{
          setColor("blue")
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm 'style={{backgroundColor:"blue"}}>Blue</button>
        <button  onClick={()=>{
          setColor("orange")
        }} className='outline-none px-4 py-1 rounded-full text-white shadow-sm 'style={{backgroundColor:"orange"}}>Orange</button>
        <button  onClick={()=>{
          setColor("red")
        }} 
         className='outline-none px-4 py-1 rounded-full text-white shadow-sm 'style={{backgroundColor:"red"}}>Red</button>

       
      </div>
    </div>
    </div>
  
  )
}

export default App
