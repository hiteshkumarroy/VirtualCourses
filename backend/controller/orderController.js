import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import Course from '../model/courseModel.js';
import User from '../model/userModel.js';
dotenv.config();


const RazorPayInstance=new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET
})

export const RazorpayOrder=async(req,res)=>{
  try {
    console.log("razor")
    const {courseId}=req.body
    const course=await Course.findById(courseId);
    if(!course){
      return res.status(404).json({message:"course not found"});
    }
    const options={
      amount:course.price*100,
      currency:'INR',
      receipt:`${courseId.toString()}`
    }
    const order=await RazorPayInstance.orders.create(options);
    return res.status(200).json(order);

  } catch (error) {
    return res.status(400).json({message:`failed to create razorpay order ${error}`}); 
  }
}


export const verifyPayment=async(req,res)=>{
  
  try {
    console.log("veriypayment");
    const {courseId,userId,razorpay_order_id}=req.body;
    const OrderInfo=await RazorPayInstance.orders.fetch(razorpay_order_id);
    
    if(OrderInfo.status==='paid'){
      const user=await User.findById(userId)
      if(!user.enrolledCourses.includes(courseId)){
        await user.enrolledCourses.push(courseId);
        await user.save();
      }
      const course=await Course.findById(courseId).populate('lectures');
      
      if(!course.enrolledStudents.includes(userId)){
        await course.enrolledStudents.push(userId);
        await course.save();
      }
      
      return res.status(200).json({message:"payment verified and enrollment successful"})
    }
    else{
    return res.status(400).json({message:`failed payment ${error}`}); }
    
    
  } catch (error) {
    
    return res.status(500).json({message:`Internal Server Error during payment verification ${error}`}); 
  }
}