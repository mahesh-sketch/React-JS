import React, { useEffect, useState } from 'react'

function UseEffect() {
    let[counter,setCount] = useState(0)
    let [calculation, setCalculation] = useState(0);

useEffect(()=>{
    setCalculation(counter*2)
},[counter]);

const clicksbutton = ()=> setCount(counter++)

  return (
    <div className='w-96
    bg-white h-96 flex flex-col  justify-center items-center'>
      <h1 className='text-4xl my-6'>USE EFFECT</h1>
       <h1 className="text-2xl">Counter: {counter}</h1>
       <h1 className="text-2xl">Calculation: {calculation}</h1>
       <div className=' w-72 h-32 my-8 flex gap-5 
       justify-center items-center '>
       <button type="button" 
       class="text-white 
       bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br
       dark:focus:ring-green-800 shadow-lg
        shadow-green-500/50 dark:shadow-lg 
        dark:shadow-green-800/80 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={clicksbutton} >Add Me</button>
      
       </div>
   </div>
  )
}

export default UseEffect
