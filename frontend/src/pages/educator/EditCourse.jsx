import React, { useRef, useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import pic  from '../../assets/empty.jpg'
import { MdEdit } from "react-icons/md";

function EditCourse() {
  const navigate=useNavigate();
  const imgRef=useRef();
  const [loading,setLoading]=useState(false);
  const [title,setTitle]=useState("");
  const [subtitle,setSubtitle]=useState("");
  const [description,setDescription]=useState("");
  const [category,setCategory]=useState("");

  return (
<div className='max-w-screen  h-screen '>
  <div className='space-y-2 bg-white mx-auto rounded-xl p-[3%]'>

    {/* 1 */}
<div className=' flex flex-col sm:flex-row gap-1 justify-between'>

<div className='text-center flex gap-3 items-center text-md font-bold'>
    <FaArrowLeftLong className=' cursor-pointer' size={20} onClick={()=>{navigate('/courses')}}/>
  Add detailed information regarding course
</div>

  <div>
 <button type="submit" className='cursor-pointer text-[12px] bg-black text-white px-3 py-1 active:bg-gray-600 rounded-md'  onClick={(e)=>{
  e.preventDefault();
  handleCreateCourse();
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
 <button type="submit" className='cursor-pointer bg-green-100 text-green-800 font-medium px-3 py-1 text-[12px] active:bg-white rounded-md border-1 border-green-600' onClick={(e)=>{
  e.preventDefault();
 }}> 
 Click To Publish
</button>
 <button type="submit" className='cursor-pointer bg-red-100 text-red-800 font-medium px-3 py-1 text-[12px] active:bg-white rounded-md border-1 border-red-600' onClick={(e)=>{
  e.preventDefault();
 }}> 
 Remove Course
</button>
</div>
</div>

{/* 3 */}
<div className='space-y-3'>

  <label htmlFor="title" className='block cursor-pointer font-medium text-[13px]' >Title</label>
  <input type="text" placeholder='Course Title' id='title' className=' border-1 rounded-md px-2 py-1 w-full text-[13px]' />

  <label htmlFor="subtitle" className='block cursor-pointer font-medium  text-[13px]' >Subtitle</label>
  <input type="text" placeholder='Subtitle' id='subtitle' className='  border-1 rounded-md py-1 px-2 w-full text-[13px]' />

  <label htmlFor="description"  className='block cursor-pointer font-medium  text-[13px]' >Description</label>
  <textarea name="description" id="description" placeholder='Course Description' rows={3}  className=' border-1 rounded-md py-1 px-2 w-full text-[13px]'></textarea>


  <div className='flex flex-col sm:flex-row sm:justify-between gap-2'>
    <div className='flex flex-col flex-1'>
      
<label htmlFor="category" className=' text-[13px] font-medium'>Category</label>
<select name="category" id="cateory" className=' border-1 rounded-md py-1 px-2 text-[13px] '>
  <option value="">Select Category</option>
</select>
    </div>
    <div className='flex flex-col flex-1'>
<label htmlFor="category" className='text-[13px] font-medium'>Course Level</label>
<select name="category" id="cateory" className=' border-1 rounded-md py-1 px-2 text-[13px] '>
  <option value="">Select Level</option>
</select>
    </div>
    <div className='flex flex-col flex-1 '>
<label htmlFor="category" className='font-medium text-[13px] '>Price (INR)</label>
<input name="category" id="cateory" className=' border-1 rounded-md py-1 px-2 text-[13px] ' placeholder='₹'/>

    </div>

  </div>

<div className='text-[13px] font-medium'>Course Thumbnail</div>

<input type="file" accept='image/*' className='hidden' ref={imgRef} />
<div className='relative'>
<MdEdit className='absolute left-40 top-1 cursor-pointer' onClick={()=>imgRef.current.click()}  />
<img src={pic} alt="img" width={"180px"} className='border-1 cursor-pointer rounded-md h-20 object-center' onClick={()=>imgRef.current.click()} />
</div>

<div className='space-x-2'>
  <button type="button" className='text-[13px] border-1 px-2 py-1 rounded-md w-20 bg-gray-300 cursor-pointer active:bg-gray-400'>Cancel</button>
  <button type="button" className='text-[13px] border-1 px-2 py-1 cursor-pointer rounded-md bg-black text-white w-20 active:bg-gray-700'>Save</button>
</div>


</div>

  </div>

</div>
  )
}

export default EditCourse;