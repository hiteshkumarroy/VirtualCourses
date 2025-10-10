import express from 'express';
import { createCourse, createLecture, deleteCourse, editCourse, editLecture, getCourseById, getCourseLecture, getCreatorById, getCreatorCourses, getPublishedCourse, removeLecture } from '../controller/courseController.js';
import isAuth from '../middleware/isAuth.js'
import upload from '../middleware/multer.js'
import { searchWithAi } from '../controller/searchController.js';
const courseRouter=express.Router();
//course routes
courseRouter.get('/getcourse/:courseId',isAuth,getCourseById)

courseRouter.delete('/deletecourse/:courseId',isAuth,deleteCourse)

courseRouter.post('/editcourse/:courseId',isAuth,upload.single("thumbnail"),editCourse)

courseRouter.get('/getcreatorcourse',isAuth,getCreatorCourses)

courseRouter.get('/getpublishedcourse',getPublishedCourse);

courseRouter.post('/createcourse',isAuth,createCourse)
courseRouter.post('/creator',isAuth,getCreatorById);


// lecture routes

courseRouter.post('/createlecture/:courseId',isAuth,createLecture);
courseRouter.get('/courselecture/:courseId',isAuth,getCourseLecture);
courseRouter.post('/editlecture/:lectureId',isAuth,upload.single("videoUrl"),editLecture);
courseRouter.delete('/removelecture/:lectureId',isAuth,removeLecture);

// for search
courseRouter.post('/search',searchWithAi);

export default courseRouter;