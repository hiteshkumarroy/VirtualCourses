import React from 'react'
import { BsGooglePlay } from 'react-icons/bs'
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { MdAppShortcut } from "react-icons/md";
import { Si365Datascience, SiHackaday } from 'react-icons/si';
import { GiArtificialIntelligence } from 'react-icons/gi';
import { DiGoogleAnalytics } from "react-icons/di";
import { PiWebhooksLogoFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';


function ExploreCourses() {
        const navigate=useNavigate();
  return (
    <div className="w-[80%]  mx-auto flex flex-col lg:flex-row justify-center items-center mt-16 gap-10">
      {/* //left */}
      <div className='lg:max-w-[30%] '>
        <div className='font-bold text-3xl '>Explore</div>
        <div className='font-bold text-3xl mt-2'> Our Courses</div>
        <div className='mt-2 font-medium text-gray-700'>
          Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. Aut officia sint fuga repudiandae deserunt nemo. Aliquam officia ab, odio quae illo 
        </div>

<button className='border-1 mt-10 bg-black flex gap-2 justify-center text-white items-center cursor-pointer border-white  rounded-md px-[10px] hover:text-black hover:bg-gray-400  py-[8px]' onClick={()=>navigate('/allcourses')}>Explore Courses 
        <BsGooglePlay className='inline  ' size={15} />
      </button>

      </div>

{/* right */}

      <div className='lg:max-w-[50%] flex flex-wrap  justify-center items-center   gap-12'>

       <span className='cursor-pointer space-y-2'>
        <div className='flex items-center justify-center w-[80px] h-[70px] rounded-xl bg-pink-200 '>
<TbDeviceDesktopAnalytics color='gray' size={40}/>
        </div>
        <div className='text-[10px] text-gray-600 font-semibold'>Web development</div>
        </span>
       <span className='cursor-pointer space-y-2'>
        <div className='flex items-center justify-center w-[80px] h-[70px] rounded-xl bg-green-200'>
<MdDesignServices color='gray' size={40}/>
        </div>
        <div className='text-[10px] text-gray-600 font-semibold'>UI/UX Designing</div>
        </span>

          <span className='cursor-pointer space-y-2'>
        <div className='flex items-center justify-center w-[80px] h-[70px] rounded-xl bg-green-100'>
<MdAppShortcut color='gray' size={40}/>
        </div>
        <div className='text-[10px] text-gray-600 font-semibold'>App Development</div>
        </span> 
        
         <span className='cursor-pointer space-y-2'>
        <div className='flex items-center justify-center w-[80px] h-[70px] rounded-xl bg-pink-300'>
<SiHackaday color='gray' size={40}/>
        </div>
        <div className='text-[10px] text-gray-600 font-semibold'>Ethical Hacking</div>
        </span> 
        
         <span className='cursor-pointer space-y-2'>
        <div className='flex items-center justify-center w-[80px] h-[70px] rounded-xl bg-green-300'>
<GiArtificialIntelligence color='gray' size={40}/>
        </div>
        <div className='text-[10px] text-gray-600 font-semibold'>AI/ML</div>
        </span> 
        
         <span className='cursor-pointer space-y-2'>
        <div className='flex items-center justify-center w-[80px] h-[70px] rounded-xl bg-red-300'>
<Si365Datascience color='gray' size={40}/>
        </div>
        <div className='text-[10px] text-gray-600 font-semibold'>Data Scinece</div>
        </span> 
        
         <span className='cursor-pointer space-y-2'>
        <div className='flex items-center justify-center w-[80px] h-[70px] rounded-xl bg-pink-200'>
<DiGoogleAnalytics color='gray' size={40}/>
        </div>
        <div className='text-[10px] text-gray-600 font-semibold'>Data Analytics</div>
        </span>

          <span className='cursor-pointer space-y-2'>
        <div className='flex items-center justify-center w-[80px] h-[70px] rounded-xl bg-blue-200'>
<PiWebhooksLogoFill color='gray' size={40}/>
        </div>
        <div className='text-[10px] text-gray-600 font-semibold'>AI Tools</div>
        </span>

      </div>

    </div>
  )
}

export default ExploreCourses