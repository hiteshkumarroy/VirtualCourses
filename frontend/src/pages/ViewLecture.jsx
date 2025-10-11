import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { serverUrl } from '../App';
import axios from 'axios';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaPlayCircle } from 'react-icons/fa';
import pic from '../assets/empty.jpg'
function ViewLecture() {
  const {courseid}=useParams();
  const {publishedCourseData}=useSelector(state=>state.course);
  const [creatorData,setCreatorData]=useState(null);
  
  const {userData}=useSelector(state=>state.user);
const selectedCourse=publishedCourseData?.find(c=>c._id===courseid);
const navigate=useNavigate();
const [selectedLecture,setSelectedLecture]=useState(selectedCourse?.lectures[0] || null);
//to find creator
useEffect(()=>{
  const findCreator=async()=>{
try {
  const creator=await axios.post(serverUrl+'/api/course/creator',{userId:selectedCourse?.creator},{withCredentials:true})
  console.log(creator?.data);
  setCreatorData(creator?.data);

} catch (error) {
  console.log(error);
}}
findCreator();
},[selectedCourse])


  return (
    <div className='min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6'>
{/* left or top */}
<div className='md:w-2/3 w-full flex flex-col bg-white shadow-xl rounded-xl space-y-2 p-4'>

<div className='flex items-center gap-4'>
  <FaArrowLeftLong size={20} className='cursor-pointer' onClick={()=>{
    navigate(`/viewcourse/${courseid}`)
  }}/>
  <span className='text-[18px] md:text-xl font-semibold'> {selectedCourse?.title}</span>
</div>
<div className=' flex gap-3'>
  <span className='text-gray-600 text-[13px]'>Category: {selectedCourse?.category}</span>
  <span className='text-gray-600 text-[13px]'>Level: {selectedCourse?.level}</span>
</div>
<div className='aspect-video bg-black border border-gray-500 rounded-xl flex items-center justify-center overflow-hidden'>
{selectedLecture?.videoUrl?<video 
    className='w-full h-full object-cover' src={selectedLecture?.videoUrl} controls/>:<p className='text-white '>
      No lecture available to play
    </p>}

</div>

<div className='text-xl font-semibold text-gray-700'>{selectedLecture?.lectureTitle}</div>
</div>
{/* lower div or right div */}

<div className='md:w-1/3 w-full flex h-fit flex-col bg-white shadow-xl rounded-xl space-y-2 p-4'>

<div className='text-md font-medium'>All Lectures

</div>
{selectedCourse?.lectures.length>0?selectedCourse.lectures.map((lecture,index)=>{
return <button key={index} className={`w-full cursor-pointer border-1 text-[14px] border-gray-300 px-3 rounded-md py-1 flex items-center justify-between ${selectedLecture?.lectureTitle==lecture.lectureTitle && "bg-gray-200 border-gray-400"} `}

onClick={(e)=>{
  e.preventDefault();  
setSelectedLecture(lecture);
console.log(selectedLecture)

}}
>
 <span>{lecture.lectureTitle}</span> 
<span><FaPlayCircle/></span>
</button>
}):<div> No lectures available</div>
}
<div className='h-[1px] mt-2 mb-2 bg-gray-500'></div>
<div className='font-semibold mt-2 text-gray-700'>Instructor</div>
<div className='flex gap-3 items-center '>
<div className='flex items-center '>
  <img src={creatorData?.photoUrl || pic} alt=""  className='w-14 h-14 rounded-full border-1'/>
</div>

  <div className='flex flex-col    '>
    <span className='font-medium'>{creatorData?.name ||'Hitesh Roy'}</span>
    <span className='text-gray-500 text-[14px]'>{creatorData?.description || "CSE student"}</span>
    <span className='text-gray-500 text-[14px]'>{creatorData?.email || "CSE student"}</span>
  </div>


</div>
</div>

<div>

</div>


      </div>
  )
}

export default ViewLecture
