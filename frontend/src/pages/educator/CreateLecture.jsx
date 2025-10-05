import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

function CreateLecture() {
  const [loading,setLoading]=useState(false);
  const {courseid}=useParams();
  const navigate=useNavigate();
  return (
    <div className='min-h-screen flex items-center w-[100vw] bg-gray-100'>
      <div className='rounded-lg shadow-2xl max-w-[650px] mx-auto w-[80%]  bg-white overflow-auto '>

        <div className='p-6 flex mb-6 flex-col gap-5'>
      <div className='text-2xl font-semibold'>  Let,s Add a Lecture
        <div className='text-[13px] text-gray-600'> Enter the title and add your video lectures to enhance your course content.</div>
         </div>

<input type="text" className='border-1 w-full rounded-md border-gray-400 p-1 px-2' placeholder='e.g Introduction to Mern Stack' />

<div  className='space-x-2 flex'>
 <button type="submit" className='flex items-center justify-center  cursor-pointer w-[125px] gap-1 bg-gray-300 text-black font-medium px-3 py-2 text-[12px] active:bg-gray-500 rounded-md  ' onClick={(e)=>{
  e.preventDefault();
navigate(`/editcourse/${courseid}`);
 }}> 
 <FaArrowLeftLong className='inline '/>
 {loading?<ClipLoader color='white' size={15}/>:"Back to Course"}

</button>
 <button type="submit" className='cursor-pointer w-[115px] bg-black text-white font-medium px-3 py-2 text-[12px] active:bg-gray-800 rounded-md border-1 ' onClick={(e)=>{
  e.preventDefault();
 }}> 
 {loading?<ClipLoader color='white' size={15}/>:" +  Create lecture"}

</button>
</div>



     </div>
      </div>
    </div>
  )
}

export default CreateLecture