import React, { useEffect, useRef, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import pic  from '../../assets/empty.jpg'
import { MdEdit } from "react-icons/md";
import { serverUrl } from '../../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { setPublishedCourseData } from '../../redux/courseSlice';

function EditCourse() {
  const dispatch=useDispatch();
  const {publishedCourseData}=useSelector(state=>state.course);
  const navigate=useNavigate();
  const [isPublished,setIsPublished]=useState(false);
  const imgRef=useRef();
  const {courseid}=useParams();
  const [selectedCourse,setSelectedCourse]=useState(null);
  const [loading,setLoading]=useState(false);
  const [loading1,setLoading1]=useState(false);
  const [title,setTitle]=useState("");
  const [subtitle,setSubtitle]=useState("");
  const [description,setDescription]=useState("");
  const [category,setCategory]=useState("");
  const [courseLevel,setCourseLevel]=useState("");
  const [price,setPrice]=useState(0);
  const [frontendImage,setFrontendImage]=useState(null);
  const [backendImage,setBackendImage]=useState(null);

  //fetch course data
const getCourseById=async()=>{

try {
  // console.log(courseid);
  const result=await axios.get(serverUrl+`/api/course/getcourse/${courseid}`,{withCredentials:true});
  setSelectedCourse(result.data);
  // console.log(result.data);

} catch (error) {
  console.log(error);
  
}
}

//initial rendering
useEffect(()=>{
getCourseById();
},[])

//setting thumbnail
const handleThumbnail=(e)=>{
  try {
    
  
  const file=e.target.files[0];
  // console.log(file);
  setBackendImage(file);
  setFrontendImage(URL.createObjectURL(file));
  // console.log(frontendImage);
  } catch (error) {
    console.log(error);
  }
}

//setting initial data
useEffect(()=>{
  if(selectedCourse){
setTitle(selectedCourse.title || "");
setSubtitle(selectedCourse.subTitle || "");
setDescription(selectedCourse.description || "");
setCategory(selectedCourse.category || "");
setCourseLevel(selectedCourse.level || "");
setPrice(selectedCourse.price || "");
setFrontendImage(selectedCourse.thumbnail || null);
setIsPublished(selectedCourse.isPublished);

  }
},[selectedCourse])

//handle edit course
const handleEditCourse = async()=>{
  const formData= new FormData();
   formData.append('subTitle',subtitle);
   formData.append('title',title);
   formData.append('description',description);
   formData.append('category',category);
   formData.append('level',courseLevel);
   formData.append('thumbnail',backendImage);
   formData.append('isPublished',isPublished);
   formData.append('price',price);
try {
  setLoading(true);
  const result=await axios.post(serverUrl+`/api/course/editcourse/${courseid}`,formData,{withCredentials:true});
  console.log(result.data);
  navigate('/courses');
  setLoading(false);
 toast.success("course Updated");
 const updatedData=result.data;

 if(updatedData.isPublished){
  const updatedCourses=publishedCourseData.map((c)=>{
    return c._id===courseid?updatedData:c;
  })

  
  if(!updatedCourses.find(c=>c._id===courseid)){
    updatedCourses.push(updatedData);
  }
  dispatch(setPublishedCourseData(updatedCourses));
 }
 else{
   const updatedCourses=publishedCourseData.filter((c)=>{
    return c._id!==courseid;
  })
  dispatch(setPublishedCourseData(updatedCourses));
 }


  
} catch (error) {
  console.log(error);
   toast.error(`course edit error ${error}`);
   setLoading(false);
}
}

//handle remove course
const handleRemoveCourse=async()=>{
  try {
    setLoading1(true);
    const result=await axios.delete(serverUrl+`/api/course/deleteCourse/${courseid}`,{withCredentials:true});
    // console.log(result.data);
    setLoading1(false);
    toast.success("Course Removed");
    navigate('/courses');

    const filteredCourses=publishedCourseData.filter((course)=>{
     return  course._id!=courseid

    })
    dispatch(setPublishedCourseData(filteredCourses));
// console.log(publishedCourseData);
  } catch (error) {
    console.log(error);
    setLoading1(false);
    toast.error(`Course remove error ${error.response.data.message}`);
  }
}

  return (
<div className='max-w-screen mx-auto overflow-hidden bg-gray-100'>
  <div className='space-y-2  mx-auto  rounded-xl w-[90%] mt-[3%] bg-white p-5 shadow-2xl'>

    {/* 1 */}
<div className=' flex flex-col sm:flex-row gap-1 justify-between'>

<div className='text-center flex gap-3 items-center text-md font-bold'>
    <FaArrowLeftLong className=' cursor-pointer' size={20} onClick={()=>{navigate('/courses')}}/>
  Add detailed information regarding course
</div>

  <div>
 <button type="submit" className='cursor-pointer text-[12px] bg-black text-white px-3 py-1 active:bg-gray-600 rounded-md'  onClick={(e)=>{
  e.preventDefault();
  navigate(`/createlecture/${selectedCourse?._id}`)

 }}> 
Go to lectures page</button>

  </div>
</div>


{/* 2 */}
<div className='space-y-3 mt-6'>
<div className='font-medium'>
Basic Course information
</div>

<div className='space-x-2'>
 {isPublished?<button type="submit" className='cursor-pointer bg-red-100 text-red-800 font-medium px-3 py-1 text-[12px] active:bg-white rounded-md border-1 border-red-600' onClick={(e)=>{
  e.preventDefault();
  setIsPublished(prev=>!prev)
 }}> 
 Click To UnPublish
</button>:
 <button type="submit" className='cursor-pointer bg-green-100 text-green-800 font-medium px-3 py-1 text-[12px] active:bg-white rounded-md border-1 border-green-600' onClick={(e)=>{
  e.preventDefault();
  setIsPublished(prev=>!prev)
 }}> 
 Click To Publish
</button>}
 <button type="submit" className='cursor-pointer w-[108px] bg-red-900 text-white font-medium px-3 py-1 text-[12px] active:bg-red-500 rounded-md border-1 border-red-600' onClick={(e)=>{
  e.preventDefault();
  handleRemoveCourse();
 }}> 
 {loading1?<ClipLoader color='white' size={15}/>:" Remove Course"}

</button>
</div>
</div>

{/* 3 */}
<div className='space-y-3'>

  <label htmlFor="title" className='block cursor-pointer font-medium text-[13px]' >Title</label>
  <input type="text" placeholder='Course Title' id='title' className=' border-1 rounded-md px-2 py-1 w-full text-[13px]' onChange={(e)=>{
    setTitle(e.target.value) 
  }} value={title} />

  <label htmlFor="subtitle" className='block cursor-pointer font-medium  text-[13px]' >Subtitle</label>
  <input type="text" placeholder='Subtitle' id='subtitle' className='  border-1 rounded-md py-1 px-2 w-full text-[13px]' onChange={(e)=>{
    setSubtitle(e.target.value) 
  }} value={subtitle} />

  <label htmlFor="description"  className='block cursor-pointer font-medium  text-[13px]' >Description</label>
  <textarea name="description" id="description" placeholder='Course Description' rows={3}  className=' border-1 resize-none rounded-md py-1 px-2 w-full text-[13px]' onChange={(e)=>{
    setDescription(e.target.value) 
  }} value={description} ></textarea>


  <div className='flex flex-col sm:flex-row sm:justify-between gap-2'>
    <div className='flex flex-col flex-1'>
      
<label htmlFor="category" className=' text-[13px] font-medium'>Category</label>
<select name="category" id="cateory" className=' border-1 rounded-md py-1 px-2 text-[13px] ' onChange={(e)=>{
    setCategory(e.target.value) 
  }} value={category} >
  <option value="" >Select category</option>
  <option value="App Development" >App Development</option>
  <option value="AI/ML" >AI/ML</option>
  <option value="AI Tools" >AI Tools</option>
  <option value="Data Science">Data Science</option>
  <option value="Data Analytics" >Data Analytics</option>
  <option value="Ethical Hacking" >Ethical Hacking</option>
  <option value="UI UX Designing" >UI UX Designing</option>
  <option value="Web Development" >Web Development</option>
  <option value="Others" >Others</option>

</select>
    </div>
    <div className='flex flex-col flex-1'>
<label htmlFor="category" className='text-[13px] font-medium'>Course Level</label>
<select name="category" id="cateory" className=' border-1 rounded-md py-1 px-2 text-[13px] ' onChange={(e)=>{
    setCourseLevel(e.target.value) 
  }} value={courseLevel} >
  <option value="">Select Level</option>
  <option value="Beginner">Beginner</option>
  <option value="Intermediate">Intermediate</option>
  <option value="Advanced">Advanced</option>
</select>
    </div>
    <div className='flex flex-col flex-1 '>
<label htmlFor="category" className='font-medium text-[13px] '>Price (INR)</label>

<input type='number' name="category" id="cateory" className=' border-1 rounded-md py-1 px-2 text-[13px] ' placeholder='₹' onChange={(e)=>{
    setPrice(e.target.value) 
  }} value={price}/>

    </div>

  </div>

<div className='text-[13px] font-medium'>Course Thumbnail</div>

<input type="file" accept='image/*' className='hidden' ref={imgRef} onChange={(e)=>{

handleThumbnail(e);
// console.log(frontendImage);
}}  />
<div className='relative'>
<MdEdit className='absolute left-40 top-1 cursor-pointer' onClick={()=>imgRef.current.click()}  />
<img src={frontendImage || pic} alt="img" width={"180px"} className='border-1 cursor-pointer rounded-md h-20 object-center' onClick={()=>imgRef.current.click()} />
</div>

<div className='space-x-2'>
  <button type="button" className='text-[13px] border-1 px-2 py-1 rounded-md w-20 bg-gray-300 cursor-pointer active:bg-gray-400' onClick={(

  )=>{navigate('/courses')}}>Cancel</button>
  <button type="button" className='text-[13px] border-1 px-2 py-1 cursor-pointer rounded-md bg-black text-white w-20 active:bg-gray-700'
  onClick={(e)=>{
    e.preventDefault();
    handleEditCourse();
  }}
  >{loading?<ClipLoader color='white' size={15}/>:"Save"}</button>
</div>


</div>

  </div>

</div>
  )
}

export default EditCourse;