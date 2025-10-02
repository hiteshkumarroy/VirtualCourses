import React, { useEffect } from 'react'
import { FaStar } from 'react-icons/fa6'
import { getPublishedCourse } from '../customHooks/getPublishedCourse'

function Card({thumbnail,title,category,price,id}) {


  return (
    <div className='max-w-[18rem] cursor-pointer w-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-300'>
<img src={thumbnail} alt="img" className='  w-full h-40 object-'/>

<div className='p-5 space-y-2'>

  <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>

  <span className='px-2 py-0.5 rounded-full text-gray-700 bg-gray-200 capitalize'>{category}</span>

<div className='flex justify-between text-sm text-gray-600 mt-3  px-[10px]'>
<span className='font-semibold text-gray-800'>₹{price||"NA"}</span>
<span className='flex items-center gap-1'><FaStar
className='text-yellow-500'
/>5</span>
</div>
</div>
    </div>
  )
}

export default Card