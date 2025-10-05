import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaEdit } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { ClipLoader } from 'react-spinners';
import { serverUrl } from '../../App';
import axios from 'axios';
import { setLectureData } from '../../redux/lectureSlice';
import { toast } from 'react-toastify';

function CreateLecture() {
  const [loading,setLoading]=useState(false);
  const [lectureTitle,setLectureTitle]=useState("");
  const dispatch=useDispatch();
  const {lectureData}=useSelector(state=>state.lecture);


const handleCreateLecture=async()=>{
  setLoading(true);
  try {
    const result=await axios.post(serverUrl+`/api/course/createlecture/${courseid}`,{lectureTitle},{withCredentials:true});
    dispatch(setLectureData([...lectureData,result.data.lecture]));
    setLectureTitle("");
    // console.log(result.data);
    // console.log("hello",lectureData)
      setLoading(false);
      toast.success("lecture created")
  } catch (error) {
    toast.error("error in creating lecture")
      setLoading(false);
    console.log(error);
  }
}

  const {courseid}=useParams();
  const navigate=useNavigate();



useEffect(()=>{

  const getCourseLecture= async(params)=>{
    try {
     const result= await axios.get(serverUrl+`/api/course/courselecture/${courseid}`,{withCredentials:true});
     console.log(result.data.lectures);
     dispatch(setLectureData(result.data.lectures));

    } catch (error) {
      console.log(error);
    }
  }
  getCourseLecture();
},[])

  return (
    <div className='min-h-screen flex max-w-screen items-center  bg-gray-100 p-10'>
      <div className='rounded-lg shadow-2xl max-w-[650px] mx-auto w-[80%]  bg-white overflow-auto '>

        <div className='p-6 flex mb-6 flex-col gap-5'>
      <div className='text-2xl font-semibold'>  Let,s Add a Lecture
        <div className='text-[13px] text-gray-600'> Enter the title and add your video lectures to enhance your course content.</div>
         </div>

<input type="text" className='border-1 w-full rounded-md border-gray-400 p-1 px-2' placeholder='e.g Introduction to Mern Stack'  onChange={(e)=>setLectureTitle(e.target.value)} value={lectureTitle}/>

<div  className='space-x-2 flex'>
 <button type="submit" className='flex items-center justify-center  cursor-pointer w-[125px] gap-1 bg-gray-300 text-black font-medium px-3 py-2 text-[12px] active:bg-gray-500 rounded-md  ' onClick={(e)=>{
  e.preventDefault();
navigate(`/editcourse/${courseid}`);
 }}> 
 <FaArrowLeftLong className='inline '/>
 Back to Course

</button>
 <button type="submit" disabled={loading} className='cursor-pointer w-[115px] bg-black text-white font-medium px-3 py-2 text-[12px] active:bg-gray-800 rounded-md border-1 ' onClick={(e)=>{
  e.preventDefault();
  handleCreateLecture();
 }}> 
 {loading?<ClipLoader color='white' size={15}/>:" +  Create lecture"}

</button>
</div>

{/* <div> */}
{/* lecture list */}

<div className='space-y-2'>
 { lectureData?.map((lecture,index)=>{
  return <div key={index} className=' bg-gray-100 rounded-md flex justify-between items-center p-3 text-sm font-medium text-gray-700'>
<span>Lecture {index+1} : {lecture.lectureTitle}</span>
<span>  <FaEdit className='text-gray-600 hover:text-blue-600 cursor-pointer' onClick={()=>{navigate(`/editlecture/${courseid}/${lecture._id}`)}}/></span>
  </div>
  })}
{/* </div> */}
</div>



     </div>
      </div>
    </div>
  )
}

export default CreateLecture