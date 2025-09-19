import uploadOnCloudinary from "../config/cloudinary.js";
import User from "../model/userModel.js"


export const getCurrentUser=async(req,res)=>
  {
try{
const user=await User.findById(req.userId).select("-password");
if(!user){
  return res.status(404).json({message:"user not found"});
}
 return res.status(200).json(user);
}
catch(error){
return res.status(500).json({message:`get current user error ${error}`});
}
  }

  export const updateProfile=async(req,res)=>{
    try{
const userId=req.userId;
const {description,name}=req.body
let photoUrl
if(req.file){
  photoUrl=await uploadOnCloudinary(req.file.path);

}
const user=await User.findByIdAndUpdate(userId,{
  name,description,photoUrl
})
if(!user){
   return res.status(404).json({message:"user not found"});
}
res.status(200).json(user);

    }catch(error){
return res.status(500).json({message:`update user profile error ${error}`});
    }
  }