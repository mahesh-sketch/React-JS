import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-green-400 m-[20px] h-[60px] text-center'>
      <h1>User Id:{userid} </h1>
    </div>
  )
}

export default User
