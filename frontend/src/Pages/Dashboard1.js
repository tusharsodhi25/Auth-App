import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard1 = () => {
    const navigate = useNavigate();
  return (
   <div className='bg-[url("https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]
   bg-cover min-h-screen flex items-center justify-center flex-col'>
    <nav>
       <button className=' flex absolute top-5 right-5 bg-white text-black p-1 rounded-md'
       onClick={()=>navigate('/login')}
       >Logout</button>
    </nav>
    <h1  className='text-3xl text-white'>WELCOME TO ADMIN DASHBOARD</h1>
   </div>
    
  )
}

export default Dashboard1
