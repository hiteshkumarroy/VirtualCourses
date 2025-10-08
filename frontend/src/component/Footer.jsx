import React from 'react'
import logo from '../assets/logo.jpg'
import { useNavigate } from 'react-router-dom'

function Footer() {
  const navigate=useNavigate();
  return (
    <div className='bg-black text-gray-300   py-10 px-10'>
      
      <div className='max-w-7xl mx-auto lg:items-center flex items-start justify-center  gap-[40px] lg:gap-[150px] flex-col lg:flex-row'>


    <div className='lg:w-[40%] md:w-[50%] w-[100%]'>
<img src={logo} alt="" className='h-10 mb-3 border-1 rounded-[5px]' />
<h2 className='text-xl font-bold text-white mb-3'>Virtual Courses</h2>
<p className='text-sm'>AI-powered learning platform to help you grow smarter. Learn anything, anything, anywhere.</p>

    </div>


 
    <div className='lg:w-[30%] md:w-[100%]'>
      <div className='text-white font-semibold mb-2'>Quick Links</div>
      <ul className='text-sm space-y-1'>
      <li className='hover:text-white cursor-pointer' onClick={()=>{
        navigate('/')
      }}> Home</li>
      <li className='hover:text-white cursor-pointer' onClick={()=>{
        navigate('/allcourses')
      }}> AllCourses</li>
      <li className='hover:text-white cursor-pointer' onClick={()=>{
        navigate('/login')
      }}> Login</li>
      <li className='hover:text-white cursor-pointer' onClick={()=>{
        navigate('/profile')
      }}> Profile</li>
      </ul>
    </div>
    
    <div className='lg:w-[30%] md:w-[100%]'>
      <div className='text-white font-semibold mb-2'>Categories</div>
      <ul className='text-sm space-y-1'>
      <li className='hover:text-white cursor-pointer' > Web Development</li>
      <li className='hover:text-white cursor-pointer' > App Development</li>
      <li className='hover:text-white cursor-pointer'> AI/ML</li>
      <li className='hover:text-white cursor-pointer' > UI/UX</li>
      </ul>
    </div>
 
      </div>
      <div className='border-t border-gray-700 mt-10 pt-5 text-sm text-center text-gray-500'>
        © {new Date().getFullYear()}    LearnAI. Allrights reserved.
      </div>
      </div>
  )
}

export default Footer