import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaEdit } from "react-icons/fa";
import pi from '../../assets/empty.jpg'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Courses() {
  const navigate=useNavigate();
  const creatorCourses=useSelector(state=>state.course.creatorCourseData);
  console.log(creatorCourses);
  return (
    
      <div className='   bg-gray-100 flex  
    flex-col sm:items-center w-[100vw]'>
        {/* upperdiv */}
        
        <div className='mt-[5%] space-y-2 w-[90%] mx-auto sm:flex sm:justify-between '>
           
<span className='flex gap-2 text-xl font-semibold'>
 <FaArrowLeftLong className=' cursor-pointer' size={20} onClick={()=>{navigate('/dashboard')}}/>
  All Created Courses</span>
<span> <button className='bg-black max-w-[150px] rounded-xl cursor-pointer text-white px-2 py-1 transform active:bg-gray-600' onClick={()=>{navigate('/createcourses')}}> Create Course</button></span>
        </div>


        {/* lowerdiv */}

        <div className='mt-[3%] hidden sm:block shadow-2xl  mx-auto rounded-xl bg-white h-[100%] w-[90%] pb-[20px]'>

<table className='w-[90%] mx-auto mt-[15px]'>

  <thead className='border-b'>
    <tr className='flex justify-between p-5'>
      <th className='w-[50%] text-left'>Courses</th>
      <th className='flex justify-between w-[50%]'>
        <span>Price</span>
        <span>Status</span>
        <span>Action</span>
      </th>
    </tr>
  </thead>

  {/* <hr className='mt-3' /> */}

  <tbody>
{creatorCourses.map((course,index)=>{
  
   return <tr key={index} className='flex border-b hover:bg-gray-100 transition-duration-200 justify-between h-[80px] items-center p-5'>
      <td className='w-[50%]'>
        <div className='flex gap-5 items-center'>
          <img src={course.thumbnail || pi} className='w-[100px] rounded-md h-[50px] object-cover' alt="" />
          <span className='font-medium'>
           {course.title}
          </span>
        </div>
      </td>
      <td className='flex justify-between w-[50%]'>
        <span className='text-gray-600 font-medium'>{course.price?`₹${course.price}`:"₹NA"}</span>
        <span>
        {  course.isPublished?<span className='py-[2px] text-[13px] px-[10px] bg-green-200 text-green-700 rounded-2xl'>published</span>:
          <span className='py-[2px] text-[13px] px-[10px] bg-red-100 text-red-700 rounded-2xl'>Draft</span>}
        </span>
        <span>
          <FaEdit className='text-gray-600 hover:text-blue-600 cursor-pointer' />
        </span>
      </td>
    </tr>
})}
  </tbody>

</table>
<p className='text-center text-sm mt-6 text-gray-400'>
  A list of your recent courses
</p>
        </div>

{/* lowerdiv for small devices*/}
  {
    creatorCourses.map((course)=>
 { 
return <div className='sm:hidden space-y-4 mt-5 mx-auto shadow-2xl rounded-xl bg-white h-[100%] w-[90%] p-[20px]'>
 <div> <div className='flex gap-4 items-center'>
    <img src={course.thumbnail || pi} alt="image" className='w-16 h-16 rounded-md object-cover'  />
    <div className='flex-1'>
      <h2 className='font-medium text-sm'> { course.title?course.title:"title"}</h2>
      <p className='text-gray-600 text-xs mt-1'> {course.price?`₹${course.price}`:"₹NA"}</p>
    </div>
        <FaEdit className='cursor-pointer hover:text-blue-600 text-gray-600'/>
  </div>
{
  !course.isPublished?<span className='w-fit px-3 py-1 text-xs rounded-full bg-red-100 text-red-600'>Draft</span>:
  <span className='w-fit px-3 py-1 text-xs rounded-full bg-green-100 text-green-600'>published</span>}
 </div> 
 </div>})}
<p className='text-center pl-[80px] text-sm mt-4 text-gray-400'>
  A list of your recent courses
</p>
 



      </div>

 
  )
}

export default Courses