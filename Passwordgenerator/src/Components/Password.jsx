import React, { useCallback, useEffect, useRef, useState } from 'react'

const funccount = new Set();

function Password() {

  let[length, setLength] = useState(8);
  let[numberAllowed, setNumAllowed] = useState(false);
  let[charAllowed, setCharAllowed] = useState(false);
  let[password, setPassword] = useState("")


//useRef hook
const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])


  useEffect(() => {
    passwordGenerator()
    let a = document.querySelector('#copybutton')
    a.innerHTML = "Copy"
  }, [length, numberAllowed, charAllowed, passwordGenerator])
   
   const copyPassword = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    let a = document.querySelector('#copybutton')
    a.innerHTML = "Copied"
   },[password])

  funccount.add(passwordGenerator)
  // alert(funccount.size)

  return (
    <div className='grid text-center mx-3 my-4 '>
        <h1 className='font-bold text-lg '>PASSWORD GENERATOR</h1>
        <div class="flex mt-7">
        <div class="relative w-full">
            <input type="search" id='copy'
            class="block p-2.5 w-full z-20 rounded-lg 
            text-sm text-gray-900 bg-gray-50 rounded-r-lg
             border-l-gray-50 border-l-2 border
              border-gray-300 focus:ring-blue-500
               focus:border-blue-500 dark:bg-gray-700
                dark:border-l-gray-700 
                 dark:border-gray-600
                  dark:placeholder-gray-400
                   dark:text-white dark:focus:border-blue-500"
                    placeholder="Password" readOnly value={password} ref={passwordRef}/>
            <button type="submit" id = 'copybutton' class="absolute top-0 right-0 p-2.5
             text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg
              border border-blue-700 hover:bg-blue-800 focus:ring-4 
              focus:outline-none focus:ring-blue-300 dark:bg-blue-600
               dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               onClick={copyPassword}>
                COPY
            </button>
        </div>
    </div>
    <div className=' mt-6 flex  justify-evenly items-center gap-x-1 text-cyan-50'>
      <div className='flex justify-center items-center gap-x-2'>
      <input type="range" min={6} max={100} value={length}  className='cursor-pointer' onChange={(e)=>{
        setLength(e.target.value)
      }}/>
      <label> Length: {length} </label>
      </div>
      <div className='flex justify-center items-center gap-x-2'>
      <input type="checkbox" name="" id="numberInput" defaultChecked ={numberAllowed} 
      className='cursor-pointer' 
      onChange={()=>{
        setNumAllowed((prev)=>!prev);
      }}
      />
      <label> Number </label>
      </div>
      <div className='flex justify-center items-center gap-x-2'>
      <input type="checkbox" name="" id="numberInput" defaultChecked ={charAllowed} 
      className='cursor-pointer' 
      onChange={()=>{
        setCharAllowed((prev)=>!prev)
      }}
      />
      <label> Character </label>
      </div>

    </div>
    </div>
  )
}
 
export default Password
