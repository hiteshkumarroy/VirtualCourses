import { createSlice } from "@reduxjs/toolkit";

const courseSlice=createSlice({
  name:"course",
  initialState:{
    creatorCourseData:[],
    publishedCourseData:null,
    selectedCourse:null
  },
  reducers:{
    setCreatorCourseData:(state,action)=>{
      state.creatorCourseData=action.payload;
    },
    setPublishedCourseData:(state,action)=>{
      state.publishedCourseData=action.payload;
    },
    setSelectedCourse:(state,action)=>{
      state.selectedCourse=action.payload;
    }
  }
})

export const {setCreatorCourseData} = courseSlice.actions;
export const {setPublishedCourseData} = courseSlice.actions;
export const {setSelectedCourse} = courseSlice.actions;
// console.log(courseSlice);
export default courseSlice.reducer;