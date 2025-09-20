import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

function Dashboard() {
   const {userData}=useSelector(state=>state.user);
      const navigate=useNavigate();
  return (
    <div className='relative h-[100vh] w-[100vw]  bg-gray-100 '>
   
    <FaArrowLeftLong className='absolute top-[10%] left-[10%] cursor-pointer' size={20} onClick={()=>{navigate('/')}}/>

      <div className=' w-full px-6 py-10 bg-gray-50 space-y-10'>

   
        {/* mainsection */}

        <div className='bg-white rounded-lg shadow-2xl w-[70%] flex mx-auto flex-col md:flex-row p-7' >

{/* <div className='flex ml-4 p-5'> */}

<div className='flex items-center justify-center'>
  {
  userData?.photoUrl?<img src={userData.photoUrl} className='w-[100px] h-[100px] border-2 rounded-full' alt="img" />:
  <div className='w-[100px] h-[100px] rounded-full bg-black text-white flex justify-center items-center'>
    {userData.name.slice(0,1)}
  </div>
}
</div>


{/* </div> */}

<div className='flex flex-start gap-1  justify-center flex-col pl-4 lg:items-start items-center'>
  
  <span className='font-bold text-xl'>
    Welcome, {userData.name} 👋
  </span>
  <span className='font-medium '>
    Total Earning :  
    <span className='font-light'> 0</span>
  </span>
  <span className='text-gray-700'>
    {userData.description || "start creating courses for your students"}
  </span>

  <button className='bg-black max-w-[150px] rounded-xl cursor-pointer text-white px-2 py-1 transform active:bg-gray-600' onClick={()=>{navigate('/courses')}}> Create Course</button>

</div>

        </div>


        {/* graph section */}
        <div>


        </div>

      </div>


    </div>
  )
}

export default Dashboard