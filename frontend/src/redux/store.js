import {configureStore} from "@reduxjs/toolkit";
import userSlice from './userSlice.js';
import courseSlice from './courseSlice.js'
import lectureSlice from "./lectureSlice.js"

const store =configureStore({
  reducer:{
user:userSlice,
course:courseSlice,
lecture:lectureSlice
  }
})
export default store;