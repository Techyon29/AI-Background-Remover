import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className=' pb-16'>
        <h1 className=' text-2xl md:text-3xl lg:text-4xl text-center font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mt-4'>See the magic. Try now</h1>
        <div className='  text-center mb-24 mt-20'>
            <input type="file" name='file' id='upload2' hidden/>
            <label htmlFor="upload2" className='cursor-pointer hover:scale-105 transition-all duration-700 inline-flex gap-3 bg-linear-to-r from-violet-500 to-fuchsia-500 px-8 py-3.5 rounded-full'><img src={assets.upload_btn_icon} width={20} alt="" /><span className=' text-sm text-white'>Upload Your Image</span></label>
        </div>
    </div>
  )
}

export default Upload