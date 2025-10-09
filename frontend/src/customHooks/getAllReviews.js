import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setreviewData } from '../redux/reviewSlice.js'

const getAllReviews = () => {
const dispatch=useDispatch();
useEffect(()=>{


 const allReviews=async()=>{
    try {
  const result=await axios.get(serverUrl+'/api/review/getreviews',{withCredentials:true});

dispatch(setreviewData(result.data));
console.log(result.data);
} catch (error) {
  console.log(error);
}
}
allReviews();

},[])
}

export default getAllReviews