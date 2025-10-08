import express from 'express';
import { createReview, getReviews } from '../controller/reviewController.js';
import isAuth from '../middleware/isAuth.js'


const reviewRouter=express.Router();
reviewRouter.post('/createrreview',isAuth,createReview)

reviewRouter.get('/getReviews',getReviews);