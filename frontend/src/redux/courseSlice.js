import { createSlice } from "@reduxjs/toolkit";

const courseSlice=createSlice({
  name:"course",
  initialState:{
    creatorCourseData:[],
    publishedCourseData:null
  },
  reducers:{
    setCreatorCourseData:(state,action)=>{
      state.creatorCourseData=action.payload;
    },
    setPublishedCourseData:(state,action)=>{
      state.publishedCourseData=action.payload;
    }
  }
})

export const {setCreatorCourseData} = courseSlice.actions;
export const {setPublishedCourseData} = courseSlice.actions;
// console.log(courseSlice);
export default courseSlice.reducer;