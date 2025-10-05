import mongoose from 'mongoose';
const lectureSchema=mongoose.Schema({
  lectureTitle:{
    type:String,
    required:true,
  },
  videoUrl:{
    type:String
  },
  isPreviewFree:{
    type:Boolean
  }

},{timeStamps:true});

const Lecture=mongoose.model("Lecture",lectureSchema);
export default Lecture;