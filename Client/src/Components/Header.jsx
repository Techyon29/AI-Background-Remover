import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
        <div className=' '>
            <h1 className=' text-neutral-700 text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight'>Remove the <br className=' max-md:hidden'/> <span className=' bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'>background</span>  from <br className=' max-md:hidden'/>images for free </h1>
            <p className=' text-[15px] text-gray-500 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deleniti minus ratione fugiat saepe eum ipsa? Molestiae, autem? Id quaerat laudantium culpa temporibus ducimus. Iusto autem similique quidem maxime tenetur?</p>
            <button className=' bg-linear-to-r from-violet-600 to-fuchsia-500  rounded-full hover:scale-105 transition-all duration-700 ease-in-out'>
                <input type="file" name='' id='upload' hidden/>
                <label htmlFor="upload" className=' inline-flex items-center py-3.5 px-8 cursor-pointer text-white gap-3'> <img width={20} src={assets.upload_btn_icon} alt="" /> <p className=' text-sm '>Upload your image</p></label></button>
        </div>
        <div className=' w-full max-w-md'>
            <img src={assets.header_img} alt="" className=''/>
        </div>
    </div>
  )
}

export default Header