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
import { getPublishedCourse } from './customHooks/getPublishedCourse.js'
import AllCourses from './pages/AllCourses.jsx'
import CreateLecture from './pages/educator/CreateLecture.jsx'
import EditLecture from './pages/educator/EditLecture.jsx'
import ViewCourse from './pages/ViewCourse.jsx'
import ScrollToTop from './component/scrollToTop.jsx'
import ViewLecture from './pages/ViewLecture.jsx'
import MyEnrolledCourses from './pages/MyEnrolledCourses.jsx'
import getAllReviews from './customHooks/getAllReviews.js'
import SearchWithAi from './pages/SearchWithAi.jsx'

function App() {
const user=getCurrentUser();
getPublishedCourse();
getCreatorCourse();
getAllReviews();
const {userData}=useSelector(state=>state.user);

  return (
    
<>

  <ToastContainer/>
  <ScrollToTop/>
<Routes>

  <Route path='/' element={<Home/>}/>
  <Route path='/signup' element={!userData?<SignUp/>:<Navigate to={"/"}/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/profile' element={userData?<Profile/>:<Navigate to={'/signup'}/> }/>
  
  <Route path='/forget' element={!userData?<ForgetPass/>:<Navigate to={'/signup'}/> }/>
  <Route path='/editprofile' element={userData?<EditProfile/>:<Navigate to={'/signup'}/> }/>
  <Route path='/allcourses' element={userData?<AllCourses/>:<Navigate to={'/signup'}/> }/>


  <Route path='/dashboard' element={userData?.role=="educator"?<Dashboard/>:<Navigate to={'/signup'}/> }/>

  <Route path='/courses' element={userData?.role=="educator"?<Courses/>:<Navigate to={'/signup'}/> }/>
  <Route path='/createcourses' element={userData?.role=="educator"?<CreateCourses/>:<Navigate to={'/signup'}/> }/>
  <Route path='/editcourse/:courseid' element={userData?.role=="educator"?<EditCourse/>:<Navigate to={'/signup'}/> }/>
  
  <Route path='/createlecture/:courseid' element={userData?.role=="educator"?<CreateLecture/>:<Navigate to={'/signup'}/> }/>

  <Route path='/editlecture/:courseid/:lectureId' element={userData?.role=="educator"?<EditLecture/>:<Navigate to={'/signup'}/> }/>
 


  <Route path='/viewcourse/:courseid' element={userData?<ViewCourse/>:<Navigate to={'/signup'}/> }/>
  <Route path='/viewlecture/:courseid' element={userData?<ViewLecture/>:<Navigate to={'/signup'}/> }/>

  <Route path='/mycourses' element={userData?<MyEnrolledCourses/>:<Navigate to={'/signup'}/> }/>
  <Route path='/search' element={userData?<SearchWithAi/>:<Navigate to={'/signup'}/> }/>

</Routes>
  
</>
  )
}

export default App
