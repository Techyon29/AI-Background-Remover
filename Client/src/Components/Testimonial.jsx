import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className=' mb-10 sm:mb-20'>
        <h1 className=' text-center text-2xl md:text-3xl lg:text-4xl bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent font-semibold pb-10 sm:pb-20'>Customer Testimonials</h1>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8 '>
            {
                testimonialsData.map((element)=>
            <div className=' max-w-lg m-auto p-6 drop-shadow-md rounded-xl bg-white hover:scale-105 transition-all duration-700 ease-in-out' key={element.id}>
                <h1 className=' text-4xl text-gray-500'>”</h1>
                <p className=' text-gray-500 text-sm'>{element.text}</p>
                <div className=' flex gap-3 mt-5 items-center'>
                    <img src={element.image} alt="" className=' w-9 rounded-full'/>
                    <div>
                        <p className=' font-semibold text-neutral-900'>{element.author}</p>
                        <p className=' text-sm text-gray-600'>{element.jobTitle}</p>
                    </div>
                </div>
            </div>
                )
            }
        </div>
    </div>
  )
}

export default Testimonial