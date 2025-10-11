import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import {Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
function Dashboard() {
   const {userData}=useSelector(state=>state.user);
      const navigate=useNavigate();
      const {creatorCourseData}=useSelector(state=>state.course);

      //for course and lectures chart
      const CourseProgressData=creatorCourseData?.map((course)=>{
        return { name:course.title?.slice(0,10)+"...",
          lectures:course.lectures?.length || 0}
        })||[]
        

        //for course and enrolled students chart
      const enrolledData=creatorCourseData?.map((course)=>{
      return { name:course.title?.slice(0,10)+"...",
        enrolled:course.enrolledStudents?.length || 0}
      })||[]

      const totalEarning=creatorCourseData?.reduce((sum,course)=>{
        const studentCount=course.enrolledStudents.length||0;
        const courseRevenue=course.price?course.price*studentCount : 0 ;
        return sum+courseRevenue;

      },0) || 0; 
       
  return (
    <div className='relative h-[100vh] w-[100vw]  bg-gray-100 '>
   
    <FaArrowLeftLong className='absolute top-[10%] left-[10%] cursor-pointer' size={20} onClick={()=>{navigate('/')}}/>

      <div className=' w-full px-6 py-10 bg-gray-50 space-y-10'>

   
        {/* mainsection */}

        <div className='bg-white rounded-lg shadow-2xl w-[70%] flex mx-auto flex-col md:flex-row p-7' >

{/* <div className='flex ml-4 p-5'> */}

<div className='flex items-center justify-center'>
  {
  userData?.photoUrl?<img src={userData.photoUrl} className='w-[100px] h-[100px] border-2 rounded-full' alt="img" />:
  <div className='w-[100px] h-[100px] rounded-full bg-black text-white flex justify-center items-center'>
    {userData.name.slice(0,1)}
  </div>
}
</div>


{/* </div> */}

<div className='flex flex-start gap-1  justify-center flex-col pl-4 lg:items-start items-center'>
  
  <span className='font-bold text-xl'>
    Welcome, {userData.name} 👋
  </span>
  <span className='font-medium '>
    Total Earning : <span className='font-semibold text-gray-600'> ₹{totalEarning.toLocaleString()}</span>
  </span>
  <span className='text-gray-700'>
    {userData.description || "start creating courses for your students"}
  </span>

  <button className='bg-black max-w-[150px] rounded-xl cursor-pointer text-white px-2 py-1 transform active:bg-gray-600' onClick={()=>{navigate('/courses')}}> Create Course</button>

</div>

        </div>


        {/* graph section */}
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 p-4 gap-8'>

        {/* for course progress graph */}
        <div className='bg-white rounded-lg shadow-2xl p-6 '>
          <h2 className='text-lg font-semibold mb-4 '>Course Progress (Lectures)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={CourseProgressData}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="lectures" fill='black' radius={[5,5,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>


        {/* for enrolled data*/}
        <div className='bg-white rounded-lg shadow-2xl p-6 '>
          <h2 className='text-lg font-semibold mb-4 '>Students Enrollment</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={enrolledData}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="enrolled" fill='black' radius={[5,5,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        </div>

      </div>


    </div>
  )
}

export default Dashboard