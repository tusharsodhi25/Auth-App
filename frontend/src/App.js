import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify'
import Dashboard1 from './Pages/Dashboard1'
import Dashboard2 from './Pages/Dashboard2'

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path = '/login' element={<Login/>}/>
        <Route path = '/dashboard1' element={<Dashboard1/>}/>
        <Route path = '/dashboard2' element = {<Dashboard2/>}/>
    </Routes>
    <ToastContainer/>
    
    </>
    
  )
}

export default App
