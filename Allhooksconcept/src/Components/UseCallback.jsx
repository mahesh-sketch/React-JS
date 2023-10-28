import  { useState, useCallback } from 'react'
const funccount = new Set();
import React from 'react'

function UseCallback() {
    const [count, setCount] = useState(0)
   
  const incrementCounter = useCallback(() => {
    setCount(count + 1)
  }, [count])
  const decrementCounter = useCallback(() => {
    setCount(count - 1)
  }, [count])
 
     
  funccount.add(incrementCounter);
  funccount.add(decrementCounter);

   
    return (
      <div className='w-96
      bg-white h-96 flex flex-col  justify-center items-center'>
      <h1 className='text-4xl my-6'>USE CALLBACK</h1>
      <h1 className="text-2xl">Counter: {count}</h1>

      <div className=' w-72 h-32 my-8 flex gap-5 
       justify-center items-center '>
  <button type="button" 
       class="text-white 
       bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br
       dark:focus:ring-green-800 shadow-lg
        shadow-green-500/50 dark:shadow-lg 
        dark:shadow-green-800/80 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={incrementCounter}>Add Me</button>

      <button type="button" 
       class="text-white 
       bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br
       dark:focus:ring-red-800 shadow-lg
        shadow-red-500/50 dark:shadow-lg 
        dark:shadow-red-800/80 font-medium rounded-lg 
        text-sm px-5 py-2.5 text-center mr-2 mb-2"onClick={decrementCounter}>Remove Me</button>
        </div>
    
      </div>
    )
}

export default UseCallback


