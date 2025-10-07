import React, { useEffect, useState } from 'react'
import pic from '../assets/empty.jpg'
import { FaArrowLeftLong, FaSackDollar, FaStar } from 'react-icons/fa6';
import {FaPlayCircle,FaLock} from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCourse } from '../redux/courseSlice';
import axios from "axios";
import { serverUrl } from '../App';
import Card from '../component/Card';
import { toast } from 'react-toastify';

function ViewCourse() {
const navigate=useNavigate();
const {publishedCourseData}=useSelector(state=>state.course);
const dispatch=useDispatch();
const {courseid}=useParams();
const {userData}=useSelector(state=>state.user);
const {selectedCourse}=useSelector(state=>state.course);
const [selectedLecture,setSelectedLecture]=useState(null)
const [creatorData,setCreatorData]=useState(null);

const [creatorCourses,setCreatorCourses]=useState([]);



//toset creator lectures
useEffect(()=>{
  const getCreatorCourse=()=>{

    if(creatorData?._id  && publishedCourseData.length>0){

    const courses=publishedCourseData.filter((course)=>{
      return course.creator===creatorData?._id && courseid!==course._id

    })
    setCreatorCourses(courses);
  console.log(courses);
  }

  }
  getCreatorCourse();
},[creatorData,publishedCourseData,selectedCourse])

//to set creator
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
  

const handleEnroll=async(courseid,userId)=>{
try{
  // console.log("razor")
  const orderData=await axios.post(serverUrl+'/api/order/razorpay-order',{courseId:courseid,userId:userId},{withCredentials:true});

  const options={
    key:import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount:orderData.data.amount,
    currency:'INR',
    name:'VIRTUAL COURSES',
    description:"Course enrollment payment ",
    order_id:orderData.data.id,
    handler:async function(response){
      console.log("Razorpay Response",response);
      try {
        const verifyPayment=await axios.post(serverUrl+'/api/order/verifypayment',{
          ...response,
          courseId:courseid,
          userId
        },{withCredentials:true});

        toast.success(verifyPayment.data.message)
        
      } catch (error) {
        toast.error(error.response.data.message)
        
      }
    }
  }
  const razorpayportal=new window.Razorpay(options);
razorpayportal.open();

console.log(razorpayportal);
  console.log(orderData);
}catch(error){
  console.log(error);
}
}




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
<button type="button" className='bg-black text-white px-4 rounded-md py-1 cursor-pointer active:bg-gray-600'

onClick={(e)=>
 {
  e.preventDefault() ;
  try {
     console.log("hii");
 handleEnroll(courseid,userData?._id)
  } catch (error) {
    console.log(error);
  }
 

}}
 > 
 
 Enroll Now</button>
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
<div className='mt-8 border-t pt-6'>
  <h2 className='text-2xl font-semibold mb-2'>
    Write a review
  </h2>

<div className='flex gap-1 mb-2'>
  {
    [1,2,3,4,5].map((star,index)=>{
     return <FaStar key={star} className='fill-gray-300'/>
    })
  }

</div>
  <textarea 
  className='w-full border border-gray-300 rounded-lg p-2 resize-none' 
  placeholder='Write review here.....'
  rows={3} /> 
  <button className=' bg-black text-white mt-3 px-4 py-2 rounded-md hover:bg-gray-800 cursor-pointer'>Submit Review</button>
</div>
{/* for creator info */}

<div className='flex items-center gap-4 pt-4 border-t'>

<img className='w-16 h-16 rounded-full object-cover border border-gray-400' src={creatorData?.photoUrl || pic} alt="" />

<div>
  <h2 className='text-lg font-semibold '>
    {creatorData?.name}
  </h2>

  <p className='md:text-sm text-gray-600 text-[10px]'>{creatorData?.description}</p>

  <p className='md:text-sm text-gray-600 text-[10px]'>{creatorData?.email}</p>
</div>
</div>
<div>
  <p className='text-xl font-semibold mb-2 text-gray-700'>Other Published Corses by the Educator - </p>

</div>

{/* mapping creator courses with cards */}
<div className='w-full transition-all duration-300 py-[20px] flex items-start justify-center lg:justify-start flex-wrap gap-6 lg:px-[80px]'>
{
  creatorCourses?.map((course,index)=>{
    return <Card key={index} id={course._id} thumbnail={course.thumbnail} price={course.price} title={course.title} category={course.category} />
  })
}
</div>

    </div>
    </div>
  )
}

export default ViewCourse