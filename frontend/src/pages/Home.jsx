import React, { useState } from 'react'
import Nav from '../component/nav.jsx'
import { BsGooglePlay } from "react-icons/bs";
import home from '../assets/home.jpg'
import ai from '../assets/searchAi.png';
import aiS from '../assets/ai.png';
import Logos from '../component/logos.jsx';
 function Home() {
  // console.log("hii");
    const [imageSrc, setImageSrc] = useState(ai);

  const handleMouseEnter = () => {
    setImageSrc(aiS);
  };

  const handleMouseLeave = () => {
    setImageSrc(ai);
  };
  return (
 
  <div className='w-[100%] overflow-hidden'>
  
  <div className='relative lg:h-[140vh] w-[100%] h-[70vh] overflow-hidden '>
  
  <Nav/>


    <img src={home} className='object-cover md:object-fill w-[100%] lg:h-[100%] h-[50vh] overflow-hidden ' />
    
     
      <div className='absolute  text-[white] lg-top-[10%] top-[15%] lg:text-[70px] md:text-[40px] text-[20px] flex items-center justify-center overflow-hidden font-bold text-center w-[100vw]'>
      Grow Your Skills to Advance
    </div>
      <div className='absolute  text-[white] lg:top-[23%] md:top-[23%] top-[20%] lg:text-[70px] md:text-[40px] text-[20px] flex items-center justify-center overflow-hidden font-bold text-center w-[100vw]'>
      Your Career path
    </div>

      <div className='absolute  lg:text-[white] lg:top-[40%] top-[75%] md:top-[80%]  w-[100%] flex justify-center gap-3 flex-wrap'>

      <button className='border-1 lg:bg-black flex gap-2 justify-center hover:text-white hover:bg-black items-center cursor-pointer lg:border-white border-black rounded-md px-[10px] lg:hover:text-black lg:hover:bg-white  py-[8px]'>View All Courses 
        <BsGooglePlay className='inline  ' size={15} />
      </button>
      <button className='border-1 flex lg:bg-black bg-black text-white gap-2 justify-center items-center cursor-pointer lg:border-white border-black hover:text-black hover:bg-white rounded-md px-[10px] lg:hover:text-black lg:hover:bg-white  py-[8px]'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>Search With Ai
        <img src={imageSrc} className='inline  hover:fill-black' width={25}
         
         />
      </button>

    </div>

    
    </div>
    <Logos></Logos>

      </div>
    
  )
}


export default Home;