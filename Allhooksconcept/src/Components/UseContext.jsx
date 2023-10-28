import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

function UseContext() {
    const [user, setUser] = useState("Mahesh Dash")
  return (
    <div className='w-96
    bg-white h-96 flex flex-col  justify-center items-center'>
        <h1 className='text-4xl my-5'>USE CONTEXT</h1>
      <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
        </UserContext.Provider>
    </div>
  )
}
function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5/>
      </>
    );
  }
  
  function Component5() {
    const user = useContext(UserContext)

    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }


export default UseContext
