import express from "express";
import dotenv from 'dotenv';
import connectdb from "./config/connectdb.js";
import cookieParser from "cookie-parser";
import authRouter from "./route/authRoute.js";
import cors from "cors";
import userRouter from "./route/userRoute.js";
import courseRouter from "./route/courseRouter.js";
import paymentRouter from "./route/paymentRoute.js";
import reviewRouter from "./route/revewRoute.js";

dotenv.config();
const app=express();
app.use(cors({
  origin: "https://virtualcourses-2.onrender.com",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter);
app.use("/api/course",courseRouter);
app.use("/api/order",paymentRouter);
app.use("/api/review",reviewRouter);


const port=process.env.PORT || 8000;

app.get("/",(req,res)=>{
  res.send("hello from server");
})

app.listen(port,()=>{
  console.log("server started");
  connectdb();
})
