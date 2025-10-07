import React, { useEffect, useState } from 'react'
import pic from '../assets/empty.jpg'
import { FaArrowLeftLong, FaStar } from 'react-icons/fa6';
import {FaPlayCircle,FaLock} from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCourse } from '../redux/courseSlice';

function ViewCourse() {
const navigate=useNavigate();
const {publishedCourseData}=useSelector(state=>state.course);
const dispatch=useDispatch();
const {courseid}=useParams();
const {selectedCourse}=useSelector(state=>state.course);
const [selectedLecture,setSelectedLecture]=useState(null)

const fetchCourseData=()=>{

  publishedCourseData.forEach((course)=>{

if(course._id===courseid){
  dispatch(setSelectedCourse(course));
  console.log(selectedCourse);
 return;
}
  })

}

useEffect(()=>{
  fetchCourseData();
},[publishedCourseData,courseid]);
  return (
    <div className='minh-h-screen bg-gray-200 p-6'> 
    
    <div className='max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 space-y-6 relative'>

{/* upperdiv */}
<div className='flex flex-col md:flex-row gap-6 '>

  <div className='w-full md:w-1/2 '>

  <FaArrowLeftLong className=' cursor-pointer' onClick={()=>navigate('/')} size={25}  />

  <img src={selectedCourse?.thumbnail || pic } className=' rounded-xl w-full  ' alt="" />

  </div>

  <div className=' flex flex-col mt-[20px]  items-start gap-2 '>
    <span className='text-xl font-semibold'>{selectedCourse?.title}</span>
    <span className='font-medium text-[14px] text-gray-500'> {selectedCourse?.subTitle}</span>
    <div className='text-yellow-500 font-medium flex gap-2'>
      <span className='flex items-center justify-start'><FaStar/>5</span>
      <span className='text-gray-500'>(1,200 Reviews)</span>
    </div>
    <div className=''>
      <span className='text-xl font-semibold text-black'>₹{selectedCourse?.price || "NA"}</span>
      <span className='line-through text-sm text-gray-400'>₹599</span>
    </div>
    <span className='text-gray-600 text-[13px]'>
      <p>✅ 10+ hours of video content</p>
      <p>✅ Lifetime access to course materials</p>
    </span>
<button type="button" className='bg-black text-white px-4 rounded-md py-1 cursor-pointer active:bg-gray-600'> Enroll Now</button>
  </div>
</div>

<div>
  <h2 className='text-xl font-semibold mb-2'> What You'll Learn</h2>
  <ul className='list-disc pl-6 text-gray-700 space-y-1'>
    <li>Learn {selectedCourse?.category} from Beginning</li>
  </ul>
</div>
<div>
  <h2 className='text-xl font-semibold mb-2'>Who This Course Is For</h2>
  <p className='text-gray-700'> Beginners, aspiring developers, and professionals looking to upgrade skills.</p>
</div>
<div className='flex flex-col md:flex-row gap-6'>

<div className='bg-white w-full md:w-2/5 p-6 rounded-2xl shadow-lg border border-gray-200'>

<h2 className='text-xl font-bold mb-1 text-gray-800'>course Curriculum</h2>
<p className='text-sm text-gray-500 mb-4'>{selectedCourse?.lectures?.length} Lectures</p>

<div className='flex flex-col gap-3'>

  {selectedCourse?.lectures?.map((lecture,index)=>{
if(lecture.isPreviewFree)
    return <button key={index} disabled={!lecture.isPreviewFree} className={`flex items-center gap-3 px-4 py-3 border rounded-lg transition-all duration-200 text-left ${selectedLecture?.lectureTitle==lecture.lectureTitle && "bg-gray-100 border-gray-400"}  ${lecture.isPreviewFree?"border-gray-300 cursor-pointer hover:bg-gray-100":"border-gray-200 opacity-60 cursor-not-allowed"} `} 

onClick={(e)=>{
  e.preventDefault();
    console.log("hii");
      if(lecture.isPreviewFree){
      
setSelectedLecture(lecture);
console.log(selectedLecture)
    }
  }
}
    
    >
      <span className='text-lg text-gray-700'><FaPlayCircle/></span>
      <span className='text-gray-800 text-sm font-medium'>      {lecture.lectureTitle}</span>
</button>
  })}
  {selectedCourse?.lectures?.map((lecture,index)=>{
if(!lecture.isPreviewFree)
    return <button key={index} disabled={lecture.isPreviewFree} className={`flex items-center gap-3 px-4 py-3 border rounded-lg transition-all duration-200 text-left  ${lecture.isPreviewFree?"border-gray-300 cursor-pointer hover:bg-gray-100":"border-gray-200 opacity-60 cursor-not-allowed"} `} onClick={()=>{
      if(lecture.isPreviewFree){
setSelectedLecture(lecture);
    }}}>
        <span className='text-lg text-gray-700'><FaLock/></span>
     <span className='text-gray-800 text-sm font-medium'>      {lecture.lectureTitle}</span></button>
  })}

  
</div>
</div>

<div className='bg-white w-full md:w-3/5 p-6 rounded-2xl shadow-lg border border-gray-200'
>
  <div className='aspect-video w-full rounded-lg overflow-hidden mb-4 bg-black flex items-center justify-center '>
    {selectedLecture?.videoUrl?<video 
    className='w-full h-full object-cover' src={selectedLecture?.videoUrl} controls/>:<span 
    className='text-white text-sm'>Select a preview lecture to watch</span>}
  </div>

</div>

</div>
    </div>
    </div>
  )
}

export default ViewCourse