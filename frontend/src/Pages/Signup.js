import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
const Signup = () => {

    const navigate = useNavigate();

    const[formdata,setformdata] = useState({
       name:"",
       email:"",
       password:"",
       role:"student"
    });

    const handler = (e)=>{

       setformdata(prevdata=>{
        return{
            ...prevdata,
            [e.target.name] :e.target.value
        }
       })
       console.log(formdata);

    }

    const submithandler =  async (e)=>{
        e.preventDefault();
        console.log(formdata);

        try{
            await axios.post('http://localhost:3003/api/signup',formdata);
            toast.success('signup successful');
            navigate('/dashboard1');

        }
        catch(error){
            console.log(error);
        }
    }



  return (
   <div className='bg-[url("https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]
   bg-cover  min-h-screen flex justify-center items-center'>
    <form onSubmit={submithandler} className='bg-black opacity-70   border-white flex flex-col gap-y-4 p-5 items-center justify-center   border rounded-lg  h-[400px] w-[400px] text-white'> 
        <label>
        Name
        <input type="text"
        name='name'
        onChange={handler}
        value={formdata.name}
        className='border p-2 w-[300px]   border-white flex rounded-md'
        placeholder='enter name...' />
        </label>

        <label>
        Email
        <input type="text"
        name='email'
          value={formdata.email}
         onChange={handler}
        className='border p-2 w-[300px]  border-white flex rounded-md'
        placeholder='enter email...' />
        </label>


        <label>
        Password
        <input type="text"
        name='password'
          value={formdata.password}
         onChange={handler}
        className='border  p-2 w-[300px]  border-white flex rounded-md'
        placeholder='enter password...' />
        </label>
        
        <div className='flex gap-3 relative  top-5'>
            <button className='bg-white w-[100px] text-black p-2 rounded-lg'>Signup</button>
             <button
             onClick={()=>navigate('/login')}
             className='border  w-[100px] border-white rounded-lg p-2'>Login</button>
             <select
             onChange={handler}
             value={formdata.role}
             name='role'
             className='rounded-md border border-white p-1 text-[0.9rem]'>
                <option value="student"  className='text-black'>Student</option>
                <option value="admin" className='text-black'>Admin</option>
             </select>
        </div>
       
      
    </form>
   </div>
  )
}

export default Signup
