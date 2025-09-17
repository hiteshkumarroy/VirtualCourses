import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ClipLoader } from 'react-spinners';

function ForgetPass() {
  const [step,setStep]=useState(1);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const [otp,setOtp]=useState("");
  const [pass,setPass]=useState("");
  const [cpass,setCpass]=useState("");
  const [email,setEmail]=useState("");

const handleSendOtp=async()=>{
  try{
    setLoading(true);
    console.log(email);
    const result=await axios.post(serverUrl+'/api/auth/sendotp',{email},{
      withCredentials:true
    })
setLoading(false);
    setStep(2);
toast.success("OTP sent successfully")
  }catch(error){
// console.log(error);
toast.error(`error in sending OTP ${error} `)
setLoading(false);
  }
}

const handleVerifyOtp=async()=>{
  try{
    setLoading(true);
    const result=await axios.post(serverUrl+'/api/auth/verifyotp',{email,otp},{
      withCredentials:true
    })
setLoading(false);
    setStep(3);
toast.success("OTP verified")
  }catch(error){

toast.error(`error in verifying OTP ${error} `)
setLoading(false);
  }
}
const handleResetPass=async()=>{
  try{
    setLoading(true);
    if(pass!=cpass){
      toast.success("password and confirm password must be same")
      return;
    }
    const result=await axios.post(serverUrl+'/api/auth/resetPassword',{email,pass},{
      withCredentials:true
    })
setLoading(false);
toast.success("reset password successfully")
navigate('/login');
  }catch(error){

toast.error(`error in changing password ${error} `)
setLoading(false);
  }
}


  return (<div className='w-[100vw] flex justify-center items-center h-[100vh] bg-gray-400'>
    {step===1 && 
    <div className='h-[50%] max-w-[400px] flex justify-center items-center bg-[white] shadow-2xl rounded-3xl w-[60%] '>
<form action="submit"  onSubmit={(e)=>e.preventDefault()} className='w-[80%] flex flex-col gap-2 justify-center h-[80%]'>
<div className='text-center mb-2 font-semibold text-xl'>Forgot your password?</div>
<label className='font-medium text-gray-600' htmlFor='email'>Enter your email address</label>
<input type="email" id='email' name='email' placeholder='abcd@example.com' className='border-1 rounded-md border-gray-500 w-[100%] p-1' onChange={(e)=>setEmail(e.target.value)} />
<button type="submit"
className='bg-black cursor-pointer text-white p-1 rounded-md w-[100%]'
onClick={(e)=>{e.preventDefault()
  handleSendOtp();
}} >
  Send OTP</button>
  <div className='text-center hover:bg-black hover:text-white cursor-pointer rounded-md p-1' onClick={()=>{navigate('/login')}}>Back to Login</div>

</form>
    </div>

    }

    {step===2 && 
    <div className='h-[50%] max-w-[400px] flex justify-center items-center bg-[white] shadow-2xl rounded-3xl w-[60%] '>
<form action="submit"  onSubmit={(e)=>e.preventDefault()} className='w-[80%] flex flex-col gap-2 justify-center h-[80%]'>
<div className='text-center mb-2 font-semibold text-xl'>Enter OTP</div>
<label className='cursor-pointer font-medium text-[14px] text-gray-600' htmlFor='otp'>Please enter the 4-digit code sent to you email</label>
<input type="text" id='otp' name='otp' placeholder='* * * *' className='border-1 rounded-md border-gray-500 w-[100%] p-1' onChange={(e)=>setOtp(e.target.value)} />
<button type="submit"
className='bg-black cursor-pointer text-white p-1 rounded-md w-[100%]'
onClick={(e)=>{e.preventDefault()
  handleVerifyOtp();
}}>
  Verify OTP</button>
  <div className='text-center hover:bg-black hover:text-white cursor-pointer rounded-md p-1' onClick={()=>{navigate('/login')}}>Back to Login</div>

</form>
    </div>

    }
    {step===3 && 
    <div className='h-[60%] max-w-[500px] flex justify-center items-center bg-[white] shadow-2xl rounded-3xl w-[70%] '>
<form action="submit"  onSubmit={(e)=>e.preventDefault()} className='w-[80%] flex flex-col gap-2 justify-center h-[80%]'>
<div className='text-center  font-semibold text-xl'>Reset Your Password</div>
<div className='font-medium text-[13px] text-gray-500 mb-2'>Enter a new password below to regain access to your account</div>

<label className='font-medium text-[14px] cursor-pointer text-gray-800 ' htmlFor='npass'>New Password</label>

<input type="password" id='npass' name='npass' placeholder='Enter new password' className='border-1 rounded-md border-gray-500 w-[100%] p-2'
onChange={(e)=>setPass(e.target.value)} />

<label className='font-medium  cursor-pointer text-[14px] text-gray-800 ' htmlFor='cpass'>Confirm Password</label>
<input type="text" id='cpass' name='cpass' placeholder='Re-enter new password' className='border-1  rounded-md border-gray-500 w-[100%] p-2'
 onChange={(e)=>setCpass(e.target.value)} />

<button type="submit"
className='bg-black text-white cursor-pointer p-1 rounded-md w-[100%]'
onClick={(e)=>{e.preventDefault()
  handleResetPass();
}}>
  Reset Password</button>

  <div className='text-center hover:bg-black hover:text-white cursor-pointer rounded-md p-1' onClick={()=>{navigate('/login')}}>Back to Login</div>

</form>
    </div>

    }
    </div>
  )
}

export default ForgetPass