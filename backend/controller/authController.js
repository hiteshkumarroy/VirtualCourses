import User from "../model/userModel.js";
import validator from "validator";
import bcrypt from "bcryptjs";
import gentoken from "../config/token.js";

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
  hashPassword,
  role
})

const token=await gentoken(user._id);

req.cookie("token",token,{
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

