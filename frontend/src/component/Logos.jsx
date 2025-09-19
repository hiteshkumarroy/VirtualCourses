import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { SiOpenaccess } from "react-icons/si";
import { FaSackDollar } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
function Logos() {
  return (
  <div className='flex  gap-4 w-[100vw] min-h-[90px] items-center justify-center flex-wrap md:mb-[50px]'>

<span className='flex gap-1 justify-center items-center  bg-gray-200 px-5 py-3 rounded-3xl cursor-pointer'>
  <MdCastForEducation className='w-[35px] h-[35px]' size={15}/> 20k+ Online Courses</span>
<span className='flex gap-1 justify-center items-center  bg-gray-200 px-5 py-3 rounded-3xl cursor-pointer'>
  <SiOpenaccess className='w-[35px] h-[35px]' size={15}/> Lifetime Access</span>
<span className='flex gap-1 justify-center items-center  bg-gray-200 px-5 py-3 rounded-3xl cursor-pointer'>
  <FaSackDollar className='w-[35px] h-[35px]' size={15}/>Value For Money</span>
<span className='flex gap-1 justify-center items-center  bg-gray-200 px-5 py-3 rounded-3xl cursor-pointer'>
  <BiSupport className='w-[35px] h-[35px]' size={15}/>Lifetime Support</span>
<span className='flex gap-1 justify-center items-center  bg-gray-200 px-5 py-3 rounded-3xl cursor-pointer'>
  <IoIosPeople className='w-[35px] h-[35px]' size={15}/>Community Support</span>

  </div>
  )
}

export default Logos;