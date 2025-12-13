import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className=' flex px-4 lg:px-44 py-3 items-center justify-between  m-auto gap-4'>
        <Link to={'/'}>
        <img className=' w-40' src={assets.logo} alt="" />
        </Link>
        <span className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @developer | All right reserved.</span>
        <span className=' flex gap-1'>
            <img className=' w-12' src={assets.facebook_icon} alt="" />
            <img className=' w-12' src={assets.google_plus_icon} alt="" />
            <img className=' w-12' src={assets.twitter_icon} alt="" />
        </span>
    </div>
  )
}

export default Footer