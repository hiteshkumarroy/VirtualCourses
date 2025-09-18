import React, { useState } from 'react'
import logo from '../assets/logo.jpg';
import google from '../assets/google.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {ClipLoader} from 'react-spinners';
import {toast} from 'react-toastify';
import {serverUrl} from '../App.jsx';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice.js';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase.js';

function Login() {

const navigate=useNavigate();

   const [show,setShow]=useState(false);
const dispatch=useDispatch();
     const [email,setEmail]=useState("");
     const [password,setPassword]=useState("");

   const [loading,setLoading]=useState(false);

   const handleLogin=async()=>{
try{
  setLoading(true);
  const result=await axios.post(serverUrl+'/api/auth/login',{
    email,password
  },{withCredentials:true});
   dispatch(setUserData(result.data));
  console.log(result);
   setLoading(false);
  navigate('/')
toast.success("Login successfully");
}
catch(error){
  console.log(error);
toast.error(error.response.data.message);
 setLoading(false);
}
  }
  const googleSignUp=async()=>{
    try{
      let role="";
      const response =await signInWithPopup(auth,provider);
      let user=response.user;
      let name=user.displayName;
      // console.log(name);
      let email=user.email;
      const result=await axios.post(serverUrl+'/api/auth/googleauth',{name,email,role},{withCredentials:true});
      console.log(result);
  dispatch(setUserData(result.data));
  console.log(result);
  //  setLoading(false);
  navigate('/')
toast.success("login successfully");

    }catch(error){
toast.error(error.response.data.message);
    }
  }
    return (
      <div className='bg-gray-400 w-[100vw] h-[100vh] flex items-center justify-center '>
  
  <form className='w-[90%]  md:w-200 h-120 bg-white shadow-xl rounded-2xl flex '>
  
  {/* //leftdiv */}
  <div className=' md:w-[50%] h-[100%] bg-[white] w-[100%] shadow-xl rounded-2xl flex justify-center flex-col items-center gap-3'>
  <div>
  <div className='font-bold text-xl'>
   Welcome back
  </div>
  <div className='font-medium text-gray-400'>
    Login your account
  </div>
  </div>
  
  {/* all fileds */}
  <div className='flex flex-col gap-2 '>

  
   <label htmlFor="email" className='font-bold'>Email</label>
  <input className='rounded-md border-1 border-gray-300 p-1' type="email" name="email" id="email" placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} />
  
   <label htmlFor="password" className='font-bold'>Password</label>
   
   {/* password functionality */}
   <div className='relative'>
    
  <input className='rounded-md border-1 border-gray-300 p-1' type={show?"text":"password"} name="password" id="password" placeholder='Your password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
   
  {
    show?
   <FaEyeSlash className='inline absolute bottom-2 right-2 cursor-pointer '
   onClick={()=>setShow(prev=>!prev)}  />:
    <FaEye className=' inline absolute bottom-2 right-2 cursor-pointer '
   onClick={()=>setShow(prev=>!prev)}  />
   
  
  }
  </div>
  

  {/* signupbtn */}
  
  <button type="submit" className='cursor-pointer bg-black text-[white] p-1 rounded-md  ' onClick={(e)=>{
    e.preventDefault();
    handleLogin();
  }} disabled={loading}>{loading?<ClipLoader size={20} color={"white"}/>:"Login"}</button>

   <span className='text-gray-700 cursor-pointer' onClick={()=>navigate('/forget')}>forgot password?</span>
  
  {/* orcontinue */}
  <div className='flex justify-center items-center gap-2'>
  <div className='w-[25%] bg-gray-500 h-0.25'></div>
  <div className='text-gray-700'>or continue</div>
  <div className='w-[25%] bg-gray-500 h-0.25'></div>
  </div>
  
  {/* google */}
  <div className=' cursor-pointer border-2 p-0.5 border-gray-600 rounded-md flex justify-center' onClick={()=>{
    googleSignUp();
  }}>
  <img src={google} width={20} alt="" />
  <span>oogle</span>


  </div>
  
    <div className='text-gray-500'>Create new account <span className='cursor-pointer underline text-black' onClick={()=>navigate("/signup")}>signUp</span>
  </div>


  </div>
  
  
  </div>
  
  {/* //rightdiv */}
  <div className='w-[50%] h-[100%] bg-[black] rounded-r-2xl md:flex flex-col justify-center items-center hidden'>
  
    <img className='w-[30%]' src={logo}  alt="logo" />
    <h1 className='text-white'>VIRTUAL COURSES</h1>
  
  </div>
  
  </form>
      </div>
  )
}

export default Login