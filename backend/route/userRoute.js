import express from 'express';
const userRouter =express.Router();
import isAuth from '../middleware/isAuth.js';
import { getCurrentUser, updateProfile } from '../controller/userController.js';
import upload from '../middleware/multer.js';
userRouter.get("/getcurrentuser",isAuth,getCurrentUser);
userRouter.get("/profile",isAuth,upload.single("photoUrl"),updateProfile);

export default userRouter;