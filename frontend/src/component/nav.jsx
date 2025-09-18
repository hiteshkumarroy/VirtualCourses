import React, { useEffect, useState } from 'react'
import logo from "../assets/logo.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";
import {toast} from 'react-toastify';
import { serverUrl } from '../App.jsx';
import { setUserData } from '../redux/userSlice.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {ClipLoader} from 'react-spinners';
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCrossMark } from "react-icons/gi";
function Nav() {
  console.log("nav");
  const user=useSelector(state=>state.user);
  const [firstLetter,setFirstLetter]=useState("");
  const [showPcard,setShowPcard]=useState(false);
  const [showHam,setShowHam]=useState(false);
  const[loading,setLoading]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();

const handleLogout=async()=>{
try{

  setLoading(true);
  const result=await axios.get(serverUrl+'/api/auth/logout',{withCredentials:true});
   dispatch(setUserData(null));
   setLoading(false);
  navigate('/')
toast.success("Logout successfully");
}
catch(error){
  console.log(error);
toast.error(error);
 setLoading(false);
}
  }

    useEffect(()=>{
      if(user.userData){
      console.log(user.userData.name )
setFirstLetter(user.userData.name.slice(0,1).toUpperCase());
}else{
  setFirstLetter("");
}
    },[user])
 
  return (
    <div className='fixed  w-[100%] h-[60px] bg-[#1f1d1d47] flex justify-center shadow-2xl'>

    <div className='w-[80%] flex 
    justify-between  items-center'>

      <div>
        <img src={logo} width={40} alt="" className='  cursor-pointer border-1 shadow-2xl border-black rounded-md '/>
        </div>
<div className='lg:flex md:flex  hidden'>
 {  firstLetter===""?<span className='mr-10  ' width={40} ><FaUser className='cursor-pointer inline text-white border-1 mb-1 border-black shadow-2xl   rounded-full p-1.5 bg-black' onClick={()=>{setShowPcard(p=>!p)}} size={35} /></span>
:
    <span className="cursor-pointer mr-10 inline-flex items-center justify-center w-9 h-9 text-white border border-black shadow-2xl rounded-full hover:bg-gray-800 bg-black" onClick={()=>{setShowPcard(p=>!p)}}>
              {firstLetter}
            </span>
  }
  {
    showPcard && 
    <div className='top-[65px] rounded-2xl absolute w-40 border-2 border-black h-30 flex flex-col items-center justify-evenly'>
      
 <span className='cursor-pointer text-white  border-1 border-black shadow-2xl rounded-lg p-1.5 bg-black'  onClick={()=>{navigate('/profile')}} >My Profile</span>
 <span className='cursor-pointer text-white  border-1 border-black shadow-2xl rounded-lg p-1.5 bg-black'  >My Courses</span>

      </div>

  }

   
 { user && user.userData && user.userData.role==='educator' && <span className='cursor-pointer text-white mr-10 border-1 border-black shadow-2xl rounded-lg p-1.5 bg-black' width={40}  >dashboard</span>}
 
{
  user.userData?
  <button type="submit" className='cursor-pointer bg-black shadow-2xl  text-[white] p-1 rounded-md  ' onClick={(e)=>{
    e.preventDefault();
    handleLogout();
  }} disabled={loading}>{loading?<ClipLoader size={20} color={"white"}/>:"Logout"}</button>:
  <span className='cursor-pointer text-white mr-10 border-1 border-black shadow-2xl  rounded-lg p-1.5 bg-black' onClick={()=>navigate('/login')}>login</span>}

</div>

<RxHamburgerMenu  className='w-[35px] h-[35px] lg:hidden md:hidden fill-black cursor-pointer' onClick={()=>setShowHam(prev=>!prev)}  />

 
    </div>

   <div className={`flex flex-col justify-center items-center fixed top-0 left-0 h-[100vh] w-[100vw] gap-5 md:hidden lg:hidden ${showHam?"translate-x-0 transition duration-600":"-translate-x-full transition duration-600"} bg-[#000000d6] z-10`}>

  <GiCrossMark className='cursor-pointer absolute right-20 top-10 fill-white' size={35} onClick={()=>setShowHam(p=>!p)}/>

    {  firstLetter===""?<span className='  ' width={40} ><FaUser className='cursor-pointer inline text-white border-1  border-white shadow-2xl   rounded-full p-1.5 bg-black' size={35} /></span>
:
    <span className="cursor-pointer border-white p-5 inline-flex items-center justify-center w-9 h-9 text-white border  shadow-2xl rounded-full hover:bg-gray-800 bg-black" >
              {firstLetter}
            </span>
  }

   
 
  {
  user.userData
  ?
  <button type="submit" className='cursor-pointer w-30 text-center border-1 border-white bg-black shadow-2xl  text-[white] p-2 rounded-md  ' onClick={(e)=>{
    e.preventDefault();
    handleLogout();
  }} disabled={loading}>{loading?<ClipLoader size={20} color={"white"}/>:"Logout"}
  </button>
  
  :

  <span className='cursor-pointer  w-30 text-center  text-white  border-1 border-white shadow-2xl  rounded-lg p-2 bg-black' onClick={()=>navigate('/login')}>login</span>
  }

      
 <span className='cursor-pointer w-30 text-center text-white  border-1 border-white shadow-2xl rounded-lg p-2 bg-black'  onClick={()=>{navigate('/profile')}} >My Profile</span>
 <span className='cursor-pointer w-30 text-center text-white  border-1 border-white shadow-2xl rounded-lg p-2 bg-black'  >My Courses</span>

{ user && 
user.userData && 
user.userData.role==='educator' 
&& 
<span className='cursor-pointer w-30 text-center text-white  border-1 border-white shadow-2xl rounded-lg p-2 bg-black' width={40}  >Dashboard</span>}

      

</div>
</div>

  )
}

export default Nav