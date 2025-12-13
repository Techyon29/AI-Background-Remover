import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div className=' mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]'>
      <div className=' bg-white rounded-lg px-8 py-6 drop-shadow-sm'>
      <div className='flex flex-col sm:grid grid-cols-2 gap-8'>
      <div className=' flex flex-col'>
        <span className=' font-semibold text-gray-600 mb-2'>Original</span>
        <img className=' rounded-md border' src={assets.image_w_bg} alt="" />
      </div>
      <div className=' flex flex-col'>
        <span className=' font-semibold text-gray-600 mb-2'>Background Remover</span>
        <div className=' rounded-md overflow-hidden border border-gray-300 h-full relative bg-layer'>
        <img  src={assets.image_wo_bg} alt="" />
        {/* <div className=' absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
          <div className=' border-4 border-violet-600 border-t-transparent w-12 h-12 rounded-full animate-spin'>
          </div>
        </div> */}
        </div>
      </div>
        </div>
      <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6 '>
        <span className=' px-8 py-3.5 border border-violet-600  text-violet-600 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'>Try another image</span>
        <span className=' px-8 py-3.5 text-white text-sm  bg-linear-to-r from-violet-500 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'>Download Image</span>
      </div>
      </div>

    </div>
  )
}

export default Result