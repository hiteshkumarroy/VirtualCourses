import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setCreatorCourseData, setPublishedCourseData } from '../redux/courseSlice'

export const getPublishedCourse = () => {
   const dispatch=useDispatch();
useEffect(()=>{

  const getPublishedCourseData=async()=>{
   
    try {
    
      const result=await axios.get(serverUrl+'/api/course/getpublishedcourse',{withCredentials:true})
      dispatch(setPublishedCourseData(result.data));
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }
  getPublishedCourseData();
},[])

}
