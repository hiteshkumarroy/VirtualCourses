import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

function Profile() {
      const {userData}=useSelector(state=>state.user);
      const navigate=useNavigate();
  return (

    <div className=' h-[100vh] w-[100vw] bg-gray-200 flex justify-center gap-2 items-center'>
      <div className='relative h-[60%] w-[70%] md:w-[50%] lg:w-[40%] bg-white  rounded-3xl shadow-2xl'>
        <FaArrowLeftLong className='absolute top-5 left-5 cursor-pointer' size={20} onClick={()=>{navigate('/')}}/>
        <div className='flex justify-center mt-10 items'>
{
  userData?.photoUrl?<img src={userData.photoUrl} className='w-[60px] h-[60px] border-1 rounded-full' alt="img" />:
  <div className='w-[60px] h-[60px] rounded-full bg-black text-white flex justify-center items-center'>
    {userData.name.slice(0,1)}
  </div>
}

        </div>

        <div className='mt-2 text-xl font-bold text-center'>
  {userData.name}
</div>
        <div className='text-[14px] font-medium text-gray-500  text-center'>
  {userData.role}
</div>
<div className='mt-5 flex-col flex gap-3 flex-start ml-10'>

  <div className='flex gap-2'>
    <span className='font-medium '>
      Email :
    </span>
    <span className='text-gray-600'>
     {userData.email}
    </span>

  </div>

  <div className='flex gap-2'>
    <span className='font-medium '>
      Bio :
    </span>
    <span className='text-gray-600'>
     {userData.description}
    </span>

  </div>
  <div className='flex gap-2'>
    <span className='font-medium '>
      Enrolled Courses :
    </span>
    <span className='text-gray-600'>
     {userData.enrolledCourses.length}
    </span>

  </div>

</div>

<div className='mt-5 flex justify-center items-center'>
<button className='bg-black rounded-xl cursor-pointer text-white px-2 py-1 transform active:bg-gray-600' onClick={()=>{navigate('/editprofile')}}> Edit Profile</button>
</div>

      </div>
    </div>

  )
}

export default Profile