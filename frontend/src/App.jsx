import { useState } from 'react'

import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
export const serverUrl="http://localhost:8000"
import {ToastContainer} from 'react-toastify';
import getCurrentUser from './customHooks/getCurrentUser.js'
import Profile from './pages/Profile.jsx'
import { useSelector } from 'react-redux'
import ForgetPass from './pages/ForgetPass.jsx'

function App() {
const user=getCurrentUser();
const {userData}=useSelector(state=>state.user);

  return (
    
<>

  <ToastContainer/>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/signup' element={!userData?<SignUp/>:<Navigate to={"/"}/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/profile' element={userData?<Profile/>:<Navigate to={'/signup'}/> }/>
  
  <Route path='/forget' element={!userData?<ForgetPass/>:<Navigate to={'/signup'}/> }/>

</Routes>
  
</>
  )
}

export default App
