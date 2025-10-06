import React, { useEffect } from 'react'
import pic from '../assets/empty.jpg'
import { FaArrowLeftLong, FaStar } from 'react-icons/fa6'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCourse } from '../redux/courseSlice';

function ViewCourse() {
const navigate=useNavigate();
const {publishedCourseData}=useSelector(state=>state.course);
const dispatch=useDispatch();
const {courseid}=useParams();
const {selectedCourse}=useSelector(state=>state.course);


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

  <FaArrowLeftLong className=' cursor-pointer' onClick={()=>navigate('/')} size={25} onClickCapture={()=>navigate('/')} />

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

    </div>
    </div>
  )
}

export default ViewCourse