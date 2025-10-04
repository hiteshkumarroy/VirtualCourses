import React, { useEffect, useState } from 'react'
import Nav from '../component/nav';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import pic from '../assets/searchAi.png'
import { PiCableCar } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import Card from '../component/Card';

function AllCourses() {
  const navigate=useNavigate();
  const {publishedCourseData}=useSelector(state=>state.course);
const [category,setCategory]=useState([]);
const [filteredCourses,setFilteredCourses]=useState([]);
const [showSide,setShowSide]=useState(false);

//to maintian category state
const toggleCategory=(e)=>{

if(category.includes(e.target.value)){
  setCategory(prev=>prev.filter(c=>c!==e.target.value))
}
else{
  setCategory(prev=>[...prev,e.target.value]);
}

}

// to maintain filtered courses data
const applyFilter=()=>{
  
  let courseCopy=publishedCourseData?.slice();

  if(category.length>0){

    courseCopy=courseCopy.filter((c)=>{
      return category.includes(c.category)
    });

  }
  
setFilteredCourses(courseCopy);
}

// set initialdata
useEffect(()=>{
  setFilteredCourses(publishedCourseData);
},[publishedCourseData]);


//maintaininfiltered courses on change of category state
useEffect(()=>{
  
  applyFilter();

 
},[category]);


  return (
    <div className='flex min-h-screen bg-gray-50'>
      <button className='fixed left-4 text-center w-25 cursor-pointer top-18 z-50 border-1 px-1 rounded-md bg-white md:hidden text-black'
       onClick={()=>setShowSide((prev)=>!prev)}>{ showSide?"Hide":"Show"} Filters </button>
      <Nav/>

      <aside className={`w-[260px] h-screen p-6 transform py-[110px] overflow-hidden bg-black fixed shadow-md top-0 left-0  border-r border-gray-200 transition-transform duration-300 z-5
${showSide?"translate-x-0":"-translate-x-full"} md:block md:translate-x-0 
      `}>
<h2 className='text-white flex gap-3 items-center '>
  <FaArrowLeftLong className='cursor-pointer' onClick={()=>navigate('/')} size={30}/>
  Filter by Category</h2>
  <form action="" onSubmit={(e)=>e.preventDefault()} className='bg-gray-600 mt-5 text-white rounded-2xl border-1 border-white space-y-2 pb-4'>

    <button className='bg-black cursor-pointer gap-2 flex p-2 rounded-xl ml-4 mt-4'>Search with AI <img src={pic} width={"25px"} alt="" /></button>
<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='appdev' onChange={toggleCategory} value={"App Development"} className='cursor-pointer accent-black'/>
<label htmlFor="appdev" className='cursor-pointer'>App Development</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='AI' value={"AI/ML"} onChange={toggleCategory} className='cursor-pointer accent-black'/>
<label htmlFor="AI" className='cursor-pointer'>AI/ML</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='AItools' onChange={toggleCategory} value={"AI Tools"} className='cursor-pointer accent-black'/>
<label htmlFor="AItools" className='cursor-pointer'>AI Tools</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='d' onChange={toggleCategory} value={"Data Science"} className='cursor-pointer accent-black'/>
<label htmlFor="d" className='cursor-pointer'>Data Science</label>
</div>
<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='c' onChange={toggleCategory} value={"Data Analytics"} className='cursor-pointer accent-black'/>
<label htmlFor="c" className='cursor-pointer'>Data Analytics</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='e' onChange={toggleCategory} value={"Ethical Hacking"} className='cursor-pointer accent-black'/>
<label htmlFor="e" className='cursor-pointer'>Ethical Hacking</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='f' onChange={toggleCategory} value={"UI UX Designing"} className='cursor-pointer accent-black'/>
<label htmlFor="f" className='cursor-pointer'>UI UX Designing</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='g' onChange={toggleCategory} value={"Web Development"} className='cursor-pointer accent-black'/>
<label htmlFor="g" className='cursor-pointer'>Web Development</label>
</div>

<div className='text-[14px] ml-5 flex gap-2'>
<input type="checkbox" id='h' onChange={toggleCategory} value={"Others"} className='cursor-pointer accent-black'/>
<label htmlFor="h" className='cursor-pointer'>Others</label>
</div>
  </form>
      </aside>
<main className='w-full transition-all duration-300 py-[130px] md:pl-[300px] flex justify-center md:justify-start items-start flex-wrap gap-6 px-[10px]'>
{
  filteredCourses?.map((c,i)=>{
    return <Card key={i} thumbnail={c.thumbnail}  title={c.title} category={c.category} price={c.price} id={c._id} />
  })
}
</main>
    </div>
  )
}

export default AllCourses;