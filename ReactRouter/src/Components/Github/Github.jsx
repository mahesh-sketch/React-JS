import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {

     //const[data,setData] = useState([])

    const data = useLoaderData()
    
    // useEffect(()=>{
    //   console.log("Use Effect Render")
    //     fetch('https://api.github.com/users/mahesh-sketch')
    //     .then(response => response.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='bg-green-400 m-[20px]  text-center'>
      <h1>Name: {data.login}</h1>
      <img src={data.avatar_url} alt="" className=''/>
    </div>
  )
}

export const githubInfoCollector = async()=>{
   const response = await fetch('https://api.github.com/users/mahesh-sketch')
   return response.json()
} 