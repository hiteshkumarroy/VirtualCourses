import uploadOnCloudinary from "../config/cloudinary";
import Course from "../model/courseModel";



export const createCourse=async (req,res)=>{
  try{
    const {title,category}=req.body;
    if(!title || !category){
      return res.status(400).json({message:"title and category is required"});
    }
const course=await Course.create({
  title,
  category,
  creator:req.userId
})
return res.status(201).json(course);

  }catch(error){
 return res.status(400).json({message:`Error in course Creation ${error}`});
  }
}


export const getPublishedCourse=async(req,res)=>{
  try{
    const courses=await Course.find({isPublished:true});
    if(!courses){
     return res.status(400).json({message:"Courses not found"});
    }
    return res.status(201).json(courses);
  }catch(error){
 return res.status(400).json({message:`failed to find Courses ${error}`});
  }
}


export const getCreatorCourses = async(req,res)=>{
  try{const userId=req.userId;
  const courses=await Course.find({creator:userId});
  if(!courses){
     return res.status(400).json({message:"Courses not found"});
    }
    return res.status(201).json(courses);
  }catch(error){
 return res.status(400).json({message:`failed to find Courses ${error}`});
  }
}




export const editCourse=async (req,res)=>{
try{
const {courseId}=req.params;
const {title,subTitle,description,category,level,isPublished,price}=req.body;
let thumbnail
if(req.file){
  thumbnail=await uploadOnCloudinary(req.file.path);
}
let course=await Course.findById({courseId});

if(!course){
 return res.status(400).json({message:"Courses not found"});
}

const updateData={title,subTitle,description,category,level,isPublished,price,thumbnail};

const response=await Course.findByIdAndUpdate(courseId,updateData,{new:true});

 return res.status(201).json(response);

}catch(error){

 return res.status(400).json({message:`failed to  edit course ${error}`});
}
}


export const getCourseById=async(req,res)=>{
  try {
    const {courseId}=req.params;
    const course= await Course.findById(courseId);
    if(!course){
     return  res.status(400).json({message:"course not found"});
    }
    return res.status(201).json(course);
  } catch (error) {
     return  res.status(400).json({message:`error in finding course by id ${error}`});
  }
}

export const deleteCourse=async (req,res)=>{
  try {
     const {courseId}=req.params
     const course=await Course.findById(courseId);
     if(!course){
       return res.status(400).json({message:"Courses not found"});
     }
     const response=await Course.findByIdAndDelete(courseId,{new:true});
     
      return res.status(201).json({message:"course removed"});

  } catch (error) {
    return res.status(400).json({message:`failed to  delete course ${error}`}); 
  }
 
}
