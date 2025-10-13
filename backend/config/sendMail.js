import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const transporter=nodemailer.createTransport(
  {
    service:"smtp.gmail.com",
    port:465,
    secure:true,
   auth:{
    user:process.env.USER_EMAIL,
    pass:process.env.USER_PASS
   },
  });

  const sendMail=async(to,otp)=>{
    await transporter.sendMail({
      from:`"VirtualCourses" <${process.env.USER_EMAIL}`,
      to:to,
      subject:"Reset your password",
      html:`<p> Your OTP for Password Reset is <b>${otp}</b>. It expires in 5 minutes. </p>`

    })
  }
  export default sendMail;
