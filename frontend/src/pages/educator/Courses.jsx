import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { FaEdit } from "react-icons/fa";
import pi from '../../assets/empty.jpg'
import { useNavigate } from 'react-router-dom';


function Courses() {
  const navigate=useNavigate();
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
  
  <tr className='flex justify-between p-5'>
    <div className='w-[50%]'>
    <th>Courses</th></div>
    <div className='flex justify-between w-[50%]'>
    <th> Price</th>
    <th>status</th>
    <th>Action</th></div>
  </tr>

  <hr className='mt-3' />

   <tr className='flex border-b hover:bg-gray-100 transition-duration-200 justify-between h-[80px] items-center p-5'>
    <div>
    <td className='flex gap-5 items-center'>
      <img src={pi}  className='w-[100px] rounded-md h-[50px] object-cover' alt="" />
      <span className='font-medium'>
        Complete HTML Course
      </span>

    </td>
    </div>

    <div className='flex justify-between w-[50%]'>
    <td className='font-medium'>₹199 </td>

    <td >
      <span className='py-[2px] text-[13px] px-[10px] bg-green-200 text-green-700 rounded-2xl'>published</span>
    </td>
    <td>
      <FaEdit className='text-gray-600 hover:text-blue-600 cursor-pointer' />
      </td>
      </div>
  </tr>
  


  {/* <hr /> */}


  {/* <hr /> */}
</table>
<p className='text-center text-sm mt-6 text-gray-400'>
  A list of your recent courses
</p>
        </div>

{/* lowerdiv for small devices*/}
<div className='sm:hidden space-y-4 mt-5 mx-auto shadow-2xl rounded-xl bg-white h-[100%] w-[90%] p-[20px]'>
  <div className='flex gap-4 items-center'>
    <img src={pi} alt="image" className='w-16 h-16 rounded-md object-cover'  />
    <div className='flex-1'>
      <h2 className='font-medium text-sm'> title</h2>
      <p className='text-gray-600 text-xs mt-1'> ₹NA</p>
    </div>
        <FaEdit className='cursor-pointer hover:text-blue-600 text-gray-600'/>
  </div>

  <span className='w-fit px-3 py-1 text-xs rounded-full bg-red-100 text-red-600'>Draft</span>
<p className='text-center pl-[80px] text-sm mt-4 text-gray-400'>
  A list of your recent courses
</p>
 
</div>


      </div>

 
  )
}

export default Courses