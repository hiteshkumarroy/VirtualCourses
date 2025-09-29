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
import EditProfile from './pages/EditProfile.jsx'
import Dashboard from './pages/educator/Dashboard.jsx'
import Courses from './pages/educator/Courses.jsx'
import CreateCourses from './pages/educator/CreateCourses.jsx'
import getCreatorCourse from './customHooks/getCreatorCourse.js'
import EditCourse from './pages/educator/EditCourse.jsx'

function App() {
const user=getCurrentUser();
getCreatorCourse();
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
  <Route path='/editprofile' element={userData?<EditProfile/>:<Navigate to={'/signup'}/> }/>


  <Route path='/dashboard' element={userData?.role=="educator"?<Dashboard/>:<Navigate to={'/signup'}/> }/>

  <Route path='/courses' element={userData?.role=="educator"?<Courses/>:<Navigate to={'/signup'}/> }/>
  <Route path='/createcourses' element={userData?.role=="educator"?<CreateCourses/>:<Navigate to={'/signup'}/> }/>
  <Route path='/editcourse/:courseid' element={userData?.role=="educator"?<EditCourse/>:<Navigate to={'/signup'}/> }/>

</Routes>
  
</>
  )
}

export default App
