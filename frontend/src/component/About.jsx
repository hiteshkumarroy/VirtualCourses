import React from 'react'
import pic from '../assets/about.jpg'
import vid from '../assets/video_preview_h264.mp4'
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { FaCheckCircle } from "react-icons/fa";


function About() {
  return (
    <div
    className='w-[100vw] md:h-[70vh]  min-h-[50vh]  flex md:flex-col flex-wrap items-center justify-center gap-2 mb-[10px] p-5 relative'>

      {/* pic */}
      <div className='lg:w-[40%] md:w-[80%]  w-[100%] h-[100%]  flex items-center justify-center relative '>
<img src={pic} className='w-[80%] rounded-lg h-[90%]' alt="" />

<div className='absolute max-w-[350px] mx-auto p-4 top-[55%] left-[50%] '><video className='w-full rounded-xl shadow-lg border-2 border-white'  muted autoPlay loop  src={vid}/>
</div>
      </div>


      <div className='lg:w-[50%] md:w-[70%] w-[100%] h-[100%] flex items-start justify-center flex-col px-[35px] md:px-[80px]'>

<div className='flex text-[18px] items-center gap-[20px]'>About Us <TfiLayoutLineSolid className='w-[40px] h-[40px]'/> 
</div>

<div className='md:text-[45px] text-[35px] font-semibold '>We Are Maximizing Your Learning Growth</div>

<div className='text-15px'>
  we provide a modern Learning Management System to simplify online education, track progress, and enhance student-instructor collaboration efiiciently
</div>

<div  className='w-[100%] lg:w-[80%] '>
  <div className='flex items-center justify-between mt-[40px]'>

    <div className='flex items-center justify-center gap-[10px]'>
      <FaCheckCircle  className='w-[20px] h-[20px]'/>Simplify Learning
    </div>
    <div className='flex items-center justify-center gap-[10px]'>
      <FaCheckCircle  className='w-[20px] h-[20px]'/>Expert trainers
    </div>
    </div>
     <div className='flex items-center justify-between mt-[40px]'>
    <div className='flex items-center justify-center gap-[10px]'>
      <FaCheckCircle  className='w-[20px] h-[20px]'/>Big Experience
    </div>
    <div className='flex items-center justify-center gap-[10px]'>
      <FaCheckCircle  className='w-[20px] h-[20px]'/>LifeTime Access
    </div>

  </div>
</div>
      </div>
    </div>
  )
}

export default About