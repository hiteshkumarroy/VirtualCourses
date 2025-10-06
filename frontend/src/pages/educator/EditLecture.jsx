import axios from 'axios';
import React, { useActionState, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import { serverUrl } from '../../App';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import { setLectureData } from '../../redux/lectureSlice';

function EditLecture() {
  const {courseid,lectureId}=useParams();
  const[loading,setLoading]=useState(false);
  const {lectureData}=useSelector(state=>state.lecture);
  const selectedLecture=lectureData.find(lecture=>lecture._id===lectureId);

  const navigate=useNavigate();
  const [title,setTitle]=useState(selectedLecture.lectureTitle);
  const [videoUrl,setVideoUrl]=useState("");
  const [isFree,setIsFree]=useState(false);
  const [loading1,setLoading1]=useState(false);
const dispatch=useDispatch();

 const formData=new FormData();
    formData.append("lectureTitle",title);
    formData.append("videoUrl",videoUrl);
    formData.append("isPreviewFree",isFree);
//edit 
  const handleEditLecture=async()=>{
   
    try {
      
 setLoading(true);
    const response=await axios.post(serverUrl+`/api/course/editlecture/${lectureId}`,formData,{withCredentials:true});
    console.log(response);
    dispatch(setLectureData([...lectureData,response.data]));
    setLoading(false);
    toast.success("lecture edit done")
navigate('/courses')

       } catch (error) {
        toast.error(`error in editing ${error}`);
       setLoading(false);
    }

  }

  //remove
  const removeLecture=async()=>{

try {
  setLoading1(true);
  const result=await axios.delete(serverUrl+`/api/course/removelecture/${lectureId}`,{withCredentials:true});
  console.log(result.data);
  navigate(`/createlecture/${courseid}`);
setLoading1(false);
toast.success("lecture deleted");

  
} catch (error) {
  setLoading1(false);
  toast.error("error in delettion")
console.log(error);

}
  }
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>

<div className='w-full max-w-xl bg-white rounded-xl shadow p-6 space-y-5'>
  {/* header */}

  <div className='flex items-center gap-2 mb-0'>

<FaArrowLeftLong className='text-gray-600 cursor-pointer' onClick={()=>navigate(`/createlecture/${courseid}`)}/>
  <h2 className='text-xl font-semibold text-gray-800'> Update Course Lecture</h2>

  </div>

  <button disabled={loading1}  className='mt-2 w-[147px] px-4 cursor-pointer py-2 bg-red-600 active:bg-red-400 text-white rounded-md' onClick={removeLecture}>{loading1?<ClipLoader size={15} color='white'/>:"Remove Lecture"}</button>
<div>
  <label htmlFor="title" className='font-medium cursor-pointer'>Lecture Title*</label>
  <input type="text" id='title' className=' block border-1 w-full py-2 px-3 border-gray-400 rounded-md' required value={title} 
  onChange={(e)=>{setTitle(e.target.value)}}
 />
</div>
<div>
  <label htmlFor="video" className='cursor-pointer font-medium'> Video*</label>
  <input type="file" id='video' className='file:bg-gray-600 file:text-white file:p-1 file:px-3 file:rounded-md file:mr-4 file:cursor-pointer block border-1 active:file:bg-gray-500 w-full py-2 px-3 border-gray-400 rounded-md' required accept='video/*' 
   onChange={(e)=>{setVideoUrl(e.target.files[0])}}/>

</div>
<div className='space-y-1 space-x-1'>
  <input type="checkbox" className=' accent-black  cursor-pointer' id='free' value={isFree} onChange={()=>{
    setIsFree(prev=>!prev)
console.log(isFree);
  }}/>
  <label htmlFor="free" className=' cursor-pointer text-gray-700' > is this video free</label>
 {loading&& <p className='block text-gray-600'>uploading video....wait........</p>}
</div>
<div>
  <button className='w-full py-2 bg-black text-white p-1 rounded-md cursor-pointer active:bg-gray-900' onClick={handleEditLecture} disabled={loading}>
   {loading?<ClipLoader  color='white'  size={15}/> :" Update Lecture"}
  </button>
</div>
</div>

    </div>
  )
}

export default EditLecture;