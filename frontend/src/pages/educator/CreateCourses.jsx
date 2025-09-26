import React, { useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

function CreateCourses() {
  const navigate=useNavigate();
  const [title,SetTitle]=useState("");
  const [category,setCategory]=useState("");
  const [loading,setLoading]=useState(false);
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center bg-gray-100'>
      

     <div className='bg-white h-[60%] rounded-2xl max-w-[500px] w-[90%] flex items-center '>



      <div className='space-y-8 flex flex-col w-[90%] mx-auto'>
        
<div className='text-center  text-2xl font-medium'>
    <FaArrowLeftLong className='absolute cursor-pointer' size={20} onClick={()=>{navigate('/courses')}}/>
  Create Course
</div>

<div>
<label htmlFor="coursetitle" className='block cursor-pointer mb-2 font-medium'>Course Title</label>
<input type="text" id='coursetitle' placeholder='Enter Course Title' onChange={(e)=>{
SetTitle(e.target.value);
}} value={title} className='w-full border-1 p-1 border-gray-400 rounded-lg'/>
</div>

<div className='w-full'>
<label htmlFor="category" className='block cursor-pointer font-medium mb-2'> Category</label>

<select name="category" className='w-full cursor-pointer border-1 p-1 border-gray-400 rounded-lg' id="category"  onChange={(e)=>{
setCategory(e.target.value);
}}>
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

 <button type="submit" className='cursor-pointer bg-black text-white p-1 active:bg-gray-600 rounded-md'> Create</button>


     </div>

    </div>
      </div>
     
  )
}

export default CreateCourses