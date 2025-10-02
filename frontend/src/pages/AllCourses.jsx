import React from 'react'
import Nav from '../component/nav';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import pic from '../assets/searchAi.png'
import { PiCableCar } from 'react-icons/pi';

function AllCourses() {
  const navigate=useNavigate();
  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Nav/>
      <aside className='w-[260px] h-screen p-6 py-[110px] overflow-hidden bg-black fixed shadow-md top-0 left-0  border-r border-gray-200 transition-transform duration-300 z-5'>
<h2 className='text-white flex gap-3 items-center '>
  <FaArrowLeftLong className='cursor-pointer' onClick={()=>navigate('/')} size={30}/>
  Filter by Category</h2>
  <form action="" onSubmit={(e)=>e.preventDefault()} className='bg-gray-600 mt-5 text-white rounded-2xl border-1 border-white space-y-2 pb-4'>

    <button className='bg-black cursor-pointer gap-2 flex p-2 rounded-xl ml-4 mt-4'>Search with AI <img src={pic} width={"25px"} alt="" /></button>
<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='appdev' value={"App Development"} className='cursor-pointer accent-black'/>
<label htmlFor="appdev" className='cursor-pointer'>App Development</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='AI' value={"AI/ML"} className='cursor-pointer accent-black'/>
<label htmlFor="AI" className='cursor-pointer'>AI/ML</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='AItools' value={"AI Tools"} className='cursor-pointer accent-black'/>
<label htmlFor="AItools" className='cursor-pointer'>AI Tools</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='d' value={"Data Science"} className='cursor-pointer accent-black'/>
<label htmlFor="d" className='cursor-pointer'>Data Science</label>
</div>
<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='c' value={"Data Analytics"} className='cursor-pointer accent-black'/>
<label htmlFor="c" className='cursor-pointer'>Data Analytics</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='e' value={"Ethical Hacking"} className='cursor-pointer accent-black'/>
<label htmlFor="e" className='cursor-pointer'>Ethical Hacking</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='f' value={"UI UX Designing"} className='cursor-pointer accent-black'/>
<label htmlFor="f" className='cursor-pointer'>UI UX Designing</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='g' value={"Web Development"} className='cursor-pointer accent-black'/>
<label htmlFor="g" className='cursor-pointer'>Web Development</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='h' value={"Others"} className='cursor-pointer accent-black'/>
<label htmlFor="h" className='cursor-pointer'>Others</label>
</div>
  </form>
      </aside>
    </div>
  )
}

export default AllCourses;