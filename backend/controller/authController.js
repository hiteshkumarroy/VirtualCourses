import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import gentoken from "../config/token.js";
import sendMail from "../config/sendMail.js";

export const signUp=async(req,res)=>{
  try{
const {name,email,password,role}=req.body;
let userExist=await User.findOne({email});

if(userExist){
return res.status(400).json("user already exist");
}
if(!validator.isEmail(email)){
  return res.status(400).json("enter valid email");
}
if(password.length<8){
  return res.status(400).json({message:"enter strong password"});
}

let hashPassword=await bcrypt.hash(password,10);
const user=await User.create({
  name,
  email,
  "password":hashPassword,
  role
})

const token=await gentoken(user._id);

res.cookie("token",token,{
  httpOnly:true,
  secure:false,
  sameSite:"strict",
  maxAge:7*24*60*60*1000
})
return res.status(201).json(user);
  }
  catch(error){

return res.status(500).json({message:`signup error ${error}`});

  }
}

export const login=async(req,res)=>{
  try{
    const {email,password}=req.body
    let user=await User.findOne({email});
    if(!user){
      return res.status(404).json({message:"user not found"});
    }
    const isCorrect=await bcrypt.compare(password,user.password);
    if(!isCorrect){
         return res.status(404).json({message:"incorrect password"});
    }

    let token=await gentoken(user._id);

    res.cookie("token",token,{
        httpOnly:true,
  secure:false,
  sameSite:"strict",
  maxAge:7*24*60*60*1000
    })
    console.log(token);
    return res.status(200).json(user);
  }catch(error){
    return res.status(500).json({message:`login error ${error}`});

  }
}

export const logOut=async(req,res)=>{
  try{
    console.log("inlogout");
await res.clearCookie("token");
return res.status(200).json({message:"logout successfully"});
  }catch(error){
    return res.status(500).json({message:`logout error ${error}`});
    
  }
}

export const sendOTP=async(req,res)=>{
try{
 
  const {email}=req.body;
  const user=await User.findOne({email});
  if(!user){
  return res.status(404).json({message:"user not found"});
  }
  const otp=Math.floor(1000 + Math.random() * 9000).toString();
  user.resetOtp=otp;
  user.otpExpires=Date.now()+(5*60*60*1000);
await user.save();
await sendMail(email,otp);
return res.status(200).json({message:"OTP sent successfully"});
}catch(error){
   return res.status(500).json({message:`send OTP error ${error}`});
}
}

export const verifyOTP=async(req,res)=>{
  try{
    const {email,otp}=req.body;
     const user=await User.findOne({email});
    if(!user || user.resetOtp!=otp  || Date.now()>user.otpExpires){
  return res.status(404).json({message:"Invalid OTP"});
  }
    user.resetOtp=undefined;
  user.otpExpires=undefined;
  user.isOtpVerified=true;

  await user.save();
return res.status(200).json({message:"OTP verified successfully"});
  }catch(error){
      return res.status(500).json({message:`verify OTP error ${error}`});
  }
}

export const resetPassword=async(req,res)=>{
  try{
    // console.log("reset");
    const {email, pass}=req.body;
     const user=await User.findOne(({email}));
     if(!user || !user.isOtpVerified){
return res.status(404).json({message:"OTP verification required"});
     }

     const hashPass=await bcrypt.hash(pass,10);
     user.password=hashPass;
     user.isOtpVerified=false;
     await user.save();
     return res.status(200).json({message:"pass reset successfully"});

  }catch(error){
      return res.status(500).json({message:`reset password  error ${error}`});
  }
}
