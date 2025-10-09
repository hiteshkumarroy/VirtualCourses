import { createSlice } from "@reduxjs/toolkit";

const reviewSlice=createSlice({
  name:"review",
  initialState:{
    reviewData:[],
  
  },
  reducers:{

    setreviewData:(state,action)=>{
      state.reviewData=action.payload;
    }
  }
})

export const {setreviewData} = reviewSlice.actions;

// console.log(courseSlice);
export default reviewSlice.reducer;