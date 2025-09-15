import React, { useEffect } from 'react'
import { serverUrl } from '../App.jsx'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice.js'
import axios from 'axios';

function getCurrentUser() {
  const dispatch =useDispatch();
 useEffect(()=>{

const fetchUser=async()=>{
  // console.log("custom")

  try{
  const result =await axios.get(serverUrl+'/api/user/getcurrentuser',{withCredentials:true});
  // console.log("hello");
  dispatch(setUserData(result.data));

  }catch(error){
    console.log(error);
    dispatch(setUserData(null))
  }
}
fetchUser();
 },[])
}

export default getCurrentUser;