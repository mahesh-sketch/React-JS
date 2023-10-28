import React from 'react'
import { useState } from 'react'

function TextUtils() {
    let[word,setWord] = useState("")

    const uppercase = ()=>{
        console.log("clicked"+word)
       let newtext = word.toUpperCase()
       setWord(newtext)
    }

    const lowercase = ()=>{
        console.log("clicked"+word)
       let newtext = word.toLowerCase()
       setWord(newtext)
    }

  return (
    <div className='flex flex-col flex-wrap  w-full my-9 h-[500px] bg-purple-600'>
     <div className='w-full px-[20px]'>
     <label for="message" class="float-left mb-2 text-xl font-normal text-gray-900 dark:text-white px-[10px] my-[10px]">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
placeholder="Write your thoughts here... "value={word}onChange={(e)=>{
    setWord(e.target.value)
}}></textarea>    
    </div>   
   <div>
   <p className='float-left text-xl font-normal text-gray-900
     dark:text-white px-[15px] my-[10px]'>{word.length} Character, {word.split(" ").length} word</p>
   </div>

   <div className='w-[500px] h-[80px] flex flex-wrap px-3 items-center'>
    <button className='mx-[15px] bg-black text-white w-[150px] h-[40px] rounded' 
    onClick={uppercase}>Upper Case</button>
    <button className=' bg-black text-white w-[150px] h-[40px] rounded'onClick={lowercase}>Lower Case</button>
   </div>
   <h1 className='text-left mx-2 my-2'>Preview</h1>
   <p className='text-left mx-2'>{word}</p>

   {/* <div className='bg-pink-500 w-[500px] h-[60px] relative mx-4 top-4'>
   <button className=' bg-black text-white w-[150px] relative top-3 right-[80px] h-[40px] 
   rounded-md'>
    Upper Case
   </button>
   <button className=' bg-black text-white w-[150px] relative top-3 right-[50px] h-[40px] 
   rounded-md'>
    Upper Case
   </button>
   </div> */}

    </div>
  )
}

export default TextUtils
