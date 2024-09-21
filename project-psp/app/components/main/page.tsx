
import React from 'react'
import { useNewContext } from '../context/newContext'


function Main() {
  const { state,setState } = useNewContext();
  localStorage.setItem("role", state);

  return (
    <div className='bg-stale-50	 min-h-screen flex items-center justify-center text-6xl flex-col'>
      <h1>This is Main Page</h1>
      <div className='flex text-lg mt-5'>
        <button
          className='bg-red-300 rounded p-2 '
          onClick={() => {
            setState("admin")
          }}
        >set user role : admin</button>
        <button className='bg-green-300 rounded p-2 mr-5'
          onClick={() => {
            setState("user")
          }}
        >set user role : user</button>
      </div>
    </div>
  )
}

export default Main