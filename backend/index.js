import express from "express";
import dotenv from 'dotenv';
import connectdb from "./config/connectdb.js";
import cookieParser from "cookie-parser";
import authRouter from "./route/authRoute.js";
dotenv.config();
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter);

const port=process.env.PORT || 8000;

app.get("/",(req,res)=>{
  res.send("hello from server");
})

app.listen(port,()=>{
  console.log("server started");
  connectdb();
})