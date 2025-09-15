import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import SignUp from './pages/SignUp.jsx'
import Login from './pages/Login.jsx'
export const serverUrl="http://localhost:8000"
import {ToastContainer} from 'react-toastify';
function App() {


  return (
<>
  <ToastContainer/>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/signup' element={<SignUp/>}/>
  <Route path='/login' element={<Login/>}/>

</Routes>
  
</>
  )
}

export default App
