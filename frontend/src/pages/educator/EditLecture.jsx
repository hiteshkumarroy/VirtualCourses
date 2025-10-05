import React from 'react'
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useNavigate, useParams } from 'react-router-dom';

function EditLecture() {
  const {courseid,lectureId}=useParams();
  const navigate=useNavigate();
  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center p-4'>

<div className='w-full max-w-xl bg-white rounded-xl shadow p-6 space-y-5'>
  {/* header */}

  <div className='flex items-center gap-2 mb-0'>

<FaArrowLeftLong className='text-gray-600 cursor-pointer' onClick={()=>navigate('/createlecture/${courseid')}/>
  <h2 className='text-xl font-semibold text-gray-800'> Update Course Lecture</h2>

  </div>

  <button className='mt-2 px-4 cursor-pointer py-2 bg-red-600 active:bg-red-400 text-white rounded-md'>Remove Lecture</button>
<div>
  <label htmlFor="title" className='font-medium cursor-pointer'>Lecture Title*</label>
  <input type="text" id='title' className=' block border-1 w-full py-2 px-3 border-gray-400 rounded-md' placeholder='knwkndkne' />
</div>
<div>
  <label htmlFor="video" className='cursor-pointer font-medium'> Video*</label>
  <input type="file" id='video' className='file:bg-gray-600 file:text-white file:p-1 file:px-3 file:rounded-md file:mr-4 file:cursor-pointer block border-1 active:file:bg-gray-500 w-full py-2 px-3 border-gray-400 rounded-md' accept='/Video' />

</div>
<div className='flex items-center gap-2'>
  <input type="checkbox" className='cursor-pointer' id='free'/>
  <label htmlFor="free" className='cursor-pointer text-gray-700' > is this video free</label>
</div>
<div>
  <button className='w-full py-2 bg-black text-white p-1 rounded-md cursor-pointer active:bg-gray-900'>
    Update Lecture
  </button>
</div>
</div>

    </div>
  )
}

export default EditLecture;