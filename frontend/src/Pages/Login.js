import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

  const navigate = useNavigate();
  const[formdata,setformdata] = useState({
    email:"",
    password:"",
    role:""
  })


const handler = (e)=>{
   setformdata(prevdata=>{
    return {
      ...prevdata,
      [e.target.name] : e.target.value
    }
   })
}


  const submithandler = async(e)=>{
    e.preventDefault();
    console.log(formdata);

    try{

      const res = await axios.post('http://localhost:3003/api/login',formdata);
      console.log(res.data);
      const role = res.data.user.role;
      toast.success('login successfull');
      if(role === 'student'){
        navigate('/dashboard2');
      }
      else if(role === 'admin'){
        navigate('/dashboard1')
      }


    }
    catch(error){
      console.log(error);
    }

  }
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]
    bg-cover  min-h-screen flex  justify-center items-center'>
     <form onSubmit={submithandler} className='text-white opacity-70 flex flex-col justify-center rounded-lg  border border-white h-[400px] w-[400px] items-center '>
      <div className='flex flex-col relative bottom-8 gap-y-4'>
         <label>
          Email
          <br />
          <input type="text"
          className='border border-white rounded-md p-2 w-[300px]'
          name='email'
          value={formdata.email}
          onChange={handler}
          placeholder='enter email...' />
         </label>

          <label>
           Password
           <br />
          <input type="text"
          placeholder='enter password...'
          value={formdata.password}
            onChange={handler}
          name='password'
          className='border border-white rounded-md p-2 w-[300px]' />
         </label>


      </div>
        
         <div className='flex gap-4 relative top-8 '>
           <button className='bg-white w-[100px] text-black p-2 rounded-lg'>Login</button>
           <button onClick={()=>navigate('/')} className='bg-black border w-[100px] text-white p-2 rounded-lg'>Signup</button>
         <select
          name='role'
            onChange={handler}
            value={formdata.role}

         className='rounded-md border border-white p-1 text-[0.9rem]'>
          <option className='text-black'>Student</option>
          <option className='text-black'>Admin</option>
         </select>
           </div>

    </form>

    </div>
    
  )
}

export default Login
