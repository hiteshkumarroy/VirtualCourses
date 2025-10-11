import React, { useState } from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6'
import {RiMicAiFill} from 'react-icons/ri'
import pic from '../assets/ai.png'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { serverUrl } from '../App';
import start from '../assets/start.mp3'
function SearchWithAi() {
  const startSound=new Audio(start);
  const navigate=useNavigate();
  const [input,setInput]=useState("");
  const [recommendations,setRecommendations]=useState([]);
  const [listening,setListening]=useState(false);

  // to speak message
  function speak(message){
    let utterance=new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }

  // creating speech instance
  const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition || window.SpeechRecognitionAlternative;

  const recognition=new SpeechRecognition();
  if(!recognition){
    toast.error("Speech recognition not supported");
  }

  //handling voice search converting speech to query
  const handleSearch=async()=>{
    if(!recognition)return;
      setListening(true);
    recognition.start();
    startSound.play();
    recognition.onresult=async(e)=>{
     const transcript=e.results[0][0].transcript.trim();
     setInput(transcript);
    await handleRecommendation(transcript);
    setListening(false);
    }
  }

  //handling search with query
  const handleRecommendation=async(query)=>{
    try {
      setListening(true);
      const result=await axios.post(serverUrl+'/api/course/search',{input:query},{withCredentials:true});
      console.log(result.data);
setRecommendations(result.data);

      if(result.data.length>0){
        speak("These are the top courses I found for you");
      }
      else{
         speak("no courses found");
      }
      setListening(false);


    } catch (error) {
      console.log(error);
      setListening(false);

    }
  }



  return (
    <div className='min-h-screen bg-gradient-to-br from-black to-gray-800 text-white flex flex-col items-center px-4 py-16'>
{/* search container */}
<div className='bg-white shadow-xl rounded-3xl p-6 sm:p-8 w-full max-w-2xl text-center relative'>
<FaArrowLeftLong onClick={()=>navigate('/')} className='text-black w-[22px] h-[22px] cursor-pointer absolute'/>
<h1 className='text-2xl sm:text-3xl font-bold text-gray-600 mb-6 flex items-center justify-center gap-2' >
  <img src={pic} className='w-8 h-8 sm:w-[30px] sm:h-[30px]' alt="" />
  Search With
  <span className='text-[#CB99C7]'>AI</span>
</h1>
<div className='flex items-center bg-gray-700 rounded-full overflow-hidden shadow-xl  relative w-full'>
  <input value={input} onChange={(e)=>{
    setInput(e.target.value)
  }} type="text" className='flex-grow px-4 py-3 bg-transparent text-white placeholder-gray-400
  focus-outline-none text-sm sm:text-base' placeholder='What do you want to learn? (e.g. AI, MERN, Cloud...'/>
  {
  input && <button className='absolute right-14 sm:right-16 bg-white rounded-full' onClick={()=>{
    handleRecommendation(input);
  }}>

    <img className='cursor-pointer w-9 h-9 rounded-full p-2' src={pic} alt="" />
    
    </button>}


  <button className='absolute right-2 bg-white rounded-full w-9 h-9 flex items-center justify-center ' onClick={()=>{
    handleSearch()
  }}><RiMicAiFill className='cursor-pointer w-5 h-5 text-[#cb87c5]'/></button>
</div>
</div> 
{
recommendations.length>0?(

<div className='w-full max-w-6xl mt-12 px-2 sm:px-4'>

<h1 className='text-xl sm:text-2xl font-semibold mb-6 text-white text-center'>

Ai Search Results
</h1>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8'>
{
  recommendations?.map((course,index)=>{

return <div key={index} className='bg-white text-black p-5 rounded-2xl shadow-md hover:shadow-indigo-500/30 transition-all duration-300 border border-gray-200 cursor-pointer border:bg-gray-200 cursor hover:bg-gray-200' onClick={()=>{navigate(`/viewcourse/${course._id}`)}}>
<h2 className='text-lg font-bold sm:text-xl'>{course.title} </h2>
<p className='text-sm text-gray-600 mt-1'>{course.category}</p>
</div>

  })
}
</div>


</div>):(listening?<h1 className='text-center text-xl sm:text-2xl mt-10 text-gray-400'> Listening....</h1>:<h1  className='text-center text-xl sm:text-2xl mt-10 text-gray-400'>No Course Found Yet</h1>)

}
    </div>
  )
}

export default SearchWithAi