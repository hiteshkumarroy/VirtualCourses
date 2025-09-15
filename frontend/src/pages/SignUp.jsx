import React, { useState } from 'react'
import logo from '../assets/logo.jpg';
import google from '../assets/google.jpg';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import {ClipLoader} from 'react-spinners';
import {toast} from 'react-toastify';
import {serverUrl} from '../App.jsx';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice.js';

function SignUp() {
  const [show,setShow]=useState(false);
  const navigate = useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [role,setRole]=useState("student");
const [loading,setLoading]=useState(false);
const dispatch=useDispatch();

  const handleSignUp=async()=>{
try{
  setLoading(true);
  const result=await axios.post(serverUrl+'/api/auth/signup',{
    name,email,password,role
  },{withCredentials:true});
  dispatch(setUserData(result.data));
  console.log(result);
   setLoading(false);
  navigate('/')
toast.success("Signup successfully");
}
catch(error){
  console.log(error);
toast.error(error.response.data);
 setLoading(false);
}
  }
  return (
    <div className='bg-gray-400 w-[100vw] h-[100vh] flex items-center justify-center'>

<form className='w-[90%]  md:w-200 h-140 bg-white shadow-xl rounded-2xl flex' onSubmit={(e)=>e.preventDefault()}>

{/* //leftdiv */}
<div className='gap-2 md:w-[50%] h-[100%] bg-[white] w-[100%] shadow-xl rounded-2xl flex justify-center flex-col items-center'>
<div>
<div className='font-bold text-xl'>
  let's get started
</div>
<div className='font-medium text-gray-400'>
  Create your account
</div>
</div>

{/* all fileds */}
<div className='flex flex-col gap-2 '>
  <label htmlFor="name" className='font-bold'>Name</label>
<input className='rounded-md border-1 border-gray-300 p-1' type="text" name="name" id="name" placeholder='Your name' onChange={(e)=>setName(e.target.value)} value={name} />

 <label htmlFor="email" className='font-bold' >Email</label>
<input className='rounded-md border-1 border-gray-300 p-1' type="email" name="email" id="email" placeholder='Your Email' onChange={(e)=>setEmail(e.target.value)} value={email}/>

 <label htmlFor="password" className='font-bold' >Password</label>
 
 {/* password functionality */}
 <div className='relative'>
  
<input className='rounded-md border-1 border-gray-300 p-1' type={show?"text":"password"} name="password" id="password" placeholder='Your password' onChange={(e)=>setPassword(e.target.value)} value={password} />
 
{
  show?
 <FaEyeSlash className='inline absolute bottom-2 right-2 cursor-pointer '
 onClick={()=>setShow(prev=>!prev)}  />:
  <FaEye className=' inline absolute bottom-2 right-2 cursor-pointer '
 onClick={()=>setShow(prev=>!prev)}  />
 

}
</div>

{/* student or educator  */}
<div className='flex justify-around'>

  <span className={`${role=="student"?"border-[black] border-2":"border-1 border-gray-300"}  text-gray-600    p-1 rounded-xl cursor-pointer hover:border-[black] hover:border-2`}
   onClick={(e)=>setRole("student")}>Student</span>

  <span className={`${role=="educator"?"border-[black] border-2":"border-1 border-gray-300"}  text-gray-600  p-1 rounded-xl cursor-pointer hover:border-[black] hover:border-2`}
  onClick={(e)=>{setRole("educator")}}>Educator</span>
</div>

{/* signupbtn */}

<button type="submit" className='cursor-pointer bg-black text-[white] p-1 rounded-md ' onClick={(e)=>{
e.preventDefault()
  handleSignUp()}}>
  {loading?<ClipLoader size={20} color={"white"} disabled={loading}/>:"SignUp"}

  </button>

{/* orcontinue */}
<div className='flex justify-center items-center gap-2'>
<div className='w-[25%] bg-gray-500 h-0.25'></div>
<div className='text-gray-700'>or continue</div>
<div className='w-[25%] bg-gray-500 h-0.25'></div>
</div>

{/* google */}
<div className=' cursor-pointer border-2 p-0.5 border-gray-600 rounded-md flex justify-center'>
<img src={google} width={20} alt="" />
<span>oogle</span>
</div>
<div className='text-gray-500'> already have an account? <span className='cursor-pointer underline text-black' onClick={()=>navigate("/login")}>login</span></div>

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

export default SignUp