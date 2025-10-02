import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import { useState } from 'react';
import axios from 'axios';
import { serverUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import {toast} from 'react-toastify'
import { ClipLoader } from 'react-spinners';

function EditProfile() {
  const {userData}=useSelector(state=>state.user);
  const [name,setName]=useState(userData.name || "");
    const navigate=useNavigate();
  const [description,setdescription]=useState(userData.description || "");
  const [photoUrl,setphotoUrl]=useState(null);
  const[loading,setLoading]=useState(false);
const dispatch=useDispatch();

const formData=new FormData();
formData.append("name",name);
formData.append("description",description);
formData.append("photoUrl",photoUrl);


const handleEditProfile=async()=>{
  try{
    setLoading(true);
const result=await axios.post(serverUrl+'/api/user/profile',formData,{withCredentials:true});

dispatch(setUserData(result.data));
navigate('/');
toast.success("Changes Saved Successfully");
setLoading(false);
  }catch(error){
    console.log(error);
    toast.error(`Error in Saving Changes ${error}` );
setLoading(false);
  }
}

    
  return (

      <div className=' h-[100vh] w-[100vw] bg-gray-200 flex justify-center gap-2 items-center'>

          <div className='relative h-[90%] w-[70%] md:w-[50%] lg:w-[40%] bg-white  rounded-3xl shadow-2xl'>
            <FaArrowLeftLong className='absolute top-5 left-5 cursor-pointer' size={20} onClick={()=>{navigate('/profile')}}/>
               
                <div className='mt-10 text-xl font-semibold text-center'>
      Edit Profile
    </div>
            <div className='flex justify-center mt-2 items'>
    {
      userData?.photoUrl?<img src={userData.photoUrl} className='w-[60px] h-[60px] rounded-full border-1' alt="img" />:
      <div className='w-[60px] h-[60px] rounded-full bg-black text-white flex justify-center items-center'>
        {userData.name.slice(0,1)}
      </div>
    }
    
            </div>
    
         
    <div className='mt-5  flex items-center justify-center '>
    <div className='flex flex-col gap-3 w-[80%]'>
      <div className=' flex flex-col '>
       <label htmlFor="avatar" className='font-medium'>Select Avatar</label>
       <input className='border-1 text-gray-700 text-[15px]  rounded-lg p-1 pl-3 cursor-pointer ' placeholder='photoUrl' type="file"  id='avatar' accept="image/*"
       onChange={(e)=>{setphotoUrl(e.target.files[0])}}
      //  value={photoUrl}
       />
    
      </div>

      <div className=' flex flex-col'>
       <label htmlFor="fullname"className='font-medium'>Full Name</label>
       <input className='border-1 text-gray-700 text-[15px] rounded-lg p-1 pl-3 ' type="text" id='fullname' placeholder={userData.name}
        onChange={(e)=>{setName(e.target.value)}}
        value={name}
       />
    
      </div>

      <div className='flex flex-col '>
       <label htmlFor="email" readOnly className='font-medium'>Email</label>
       <input type="email" id='email' className='border-1 text-gray-700 text-[15px]  rounded-lg p-1 pl-3 cursor-pointer ' value={userData.email} disabled/>
    
      </div>

      <div className='flex flex-col'>
       <label  htmlFor="description" className='font-medium'>Description</label>
       <textarea
       name='description'
        className='border-1 resize-none text-gray-700 text-[15px] rounded-lg p-1 pl-3  ' type="textarea" id='description' 
      placeholder="tell us about yourself" 
      onChange={(e)=>{setdescription(e.target.value)}}
      value={description}
      />
    
      </div>
      
      {/* <div className='mt-5 flex justify-center items-center'> */}
    <button className='bg-black mt-3  rounded-lg w-[100%] cursor-pointer text-white  py-2   transform active:bg-gray-600' onClick={()=>{handleEditProfile()}}> {
      loading?
      <ClipLoader className='fill-white text-white'
      color='white'
      size={20}
      />:
    "Save Changes"}</button>
    {/* </div> */}
    </div>
    
   
    
    </div>
    
  
    
          </div>
        </div>
  )
}

export default EditProfile