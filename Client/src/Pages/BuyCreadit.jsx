import React from 'react'
import { assets, plans } from '../assets/assets'
const BuyCreadit = () => {
  return (
    <div className=' min-h-[80vh] text-center pt-14 mb-10'>
      <button className=' border-gray-400 border px-10 py-2 rounded-full text-sm text-gray-600 mb-6'>OUR PLAN</button>
      <h1 className=' text-2xl md:text-3xl lg:text-4xl font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent mb-6 sm:mb-10 '>Choose the plan that’s right for you</h1>
      <div className=' flex flex-wrap justify-center text-left gap-6'>
        {plans.map((element,index)=>
        <div className=' bg-white drop-shadow-sm rounded-lg py-12 px-14 text-gray-700 hover:scale-105 transition-all duration-700'>
          <img width={40} src={assets.logo_icon} alt="" />
          <span>
          <h1 className='mt-3 font-semibold text-zinc-800'>{element.id}</h1>
          <h2 className=' text-sm'>{element.desc}</h2>
          </span>
          <div className=' mt-6'><span className=' text-3xl font-medium'>${element.price}</span> <span className=' text-sm text-gray-600'>/{element.credits}credits</span>
          </div>
          <button className='mt-8 bg-gray-800 text-white  py-2.5 min-w-52 rounded-md cursor-pointer'>Purchase</button>
        </div>
        )}
      </div>
    </div>
  )
}

export default BuyCreadit