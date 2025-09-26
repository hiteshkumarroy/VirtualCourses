import express from 'express';
import { createCourse, deleteCourse, editCourse, getCourseById, getCreatorCourses, getPublishedCourse } from '../controller/courseController.js';
import isAuth from '../middleware/isAuth.js'
import upload from '../middleware/multer.js'
const courseRouter=express.Router();

courseRouter.get('/getcourse/:courseId',isAuth,getCourseById)

courseRouter.delete('/deletecourse/:courseId',isAuth,deleteCourse)

courseRouter.post('/editcourse/:courseId',isAuth,upload.single("thumbnail"),editCourse)

courseRouter.get('/getcreatorcourse',isAuth,getCreatorCourses)

courseRouter.get('/getpublishedcourse',getPublishedCourse);

courseRouter.post('/createcourse',isAuth,createCourse)
export default courseRouter;