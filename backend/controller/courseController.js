import uploadOnCloudinary from "../config/cloudinary.js";
import Course from "../model/courseModel.js";
import Lecture from "../model/lectureModel.js";



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
let course=await Course.findById(courseId);

if(!course){
 return res.status(400).json({message:"Courses not found"});
}

const updateData={title,subTitle,description,category,level,isPublished,price,thumbnail};

const response=await Course.findByIdAndUpdate(courseId,updateData,{new:true});

 return res.status(201).json(response);

}catch(error){
console.log(error);
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

//for lectures controller
//to create new lectures
export const createLecture=async(req,res)=>{
  try {
    // console.log("woww")
  const  {lectureTitle}=req.body;
  const {courseId}=req.params;
  if(!lectureTitle || !courseId){
    return res.status(400).json({message:"lecture title is required"});
  }
const lecture=await Lecture.create({lectureTitle})
const course=await Course.findById(courseId)
if(course){
   course.lectures.push(lecture._id);
}
await course.populate("lectures");
await course.save();
return res.status(201).json({lecture,course});

  } catch (error) {
      return res.status(400).json({message:`failed to  create lecture ${error}`}); 
  }
}

// to get course lectures

export const getCourseLecture=async(req,res)=>{
  try {

  const {courseId}=req.params;

const course=await Course.findById(courseId)
 if(!course){
    return res.status(400).json({message:"course not found"});
  }

await course.populate("lectures");
await course.save();
return res.status(201).json(course);

  } catch (error) {
      return res.status(400).json({message:`failed to get course lectures ${error}`}); 
  }
}

// edit lecture

export const editLecture=async(req,res)=>{
  try {
    // console.log("woww");
    const {lectureId}=req.params;
    const {isPreviewFree,lectureTitle}=req.body;
    const lecture=await Lecture.findById(lectureId)
    if(!lecture){
       return res.status(400).json({message:"lecture not found"});
    }

    let videoUrl;
    if(req.file){
      videoUrl=await uploadOnCloudinary(req.file.path);
      lecture.videoUrl=videoUrl
    }
    if(lectureTitle){
      lecture.lectureTitle=lectureTitle;
    }
   
    lecture.isPreviewFree=isPreviewFree
    await lecture.save();
    return res.status(200).json(lecture);
  } catch (error) {
    console.log(error);
     return res.status(400).json({message:`failed to edit lecture ${error}`}); 
  }
}

//to remove lecture
export const removeLecture=async(req,res)=>{
  try {
    const {lectureId}=req.params;
    const lecture=await Lecture.findByIdAndDelete(lectureId)
    if(!lecture){
       return res.status(400).json({message:"lecture not found"});
    }
await Course.updateOne({lectures:lectureId},
  {$pull:{lectures:lectureId}}
)


    return res.status(200).json({message:"Lecture Removed"});
  } catch (error) {
     return res.status(400).json({message:`failed to remove lecture ${error}`}); 
  }
}

