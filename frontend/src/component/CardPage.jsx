import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card';
import { getPublishedCourse } from '../customHooks/getPublishedCourse';

function CardPage() {
  //  useEffect(()=>{
// getPublishedCourse();
  // },[])

  const {publishedCourseData}=useSelector(state=>state.course);
  const [popularCourses,setPopularCourses]=useState([]);

  useEffect(()=>{
   
    setPopularCourses(publishedCourseData?.slice(0,6));
  // }
  },[publishedCourseData]);

 

  return (
    <div className=' flex items-center justify-center flex-col '>

      <h1 className='md:text-[45px] text-[30px] font-semibold text-center mt-[30px] px-[20px]'>Our Popular Courses</h1>
      <span className='lg:w-[50%] md:w-[80%] text-[15px] text-center mt-[30px] px-[20px]'>
        Explore top-rated courses desgined to boost your skills, enhance careers, and unlock opportunities in tech, Ai, business, and beyond.
      </span>

<div className='w-[100%]  flex items-center justify-center flex-wrap gap-[50px] lg:p-[50px] md:p-[30px] p-[10px] mb-[40px] mt-[10px]'>


      {
        popularCourses?.map((course,index)=>{
          console.log("inmap");
return <Card className='cursor-pointer' key={index} thumbnail={course.thumbnail} title={course.title} category={course.category} price={course.price} id={course._id} reviews={course?.reviews} />
        })
      }
      </div>
    </div>
  )
}

export default CardPage