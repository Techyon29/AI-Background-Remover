import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
    // const navigate = useNavigate();
    const { openSignIn } = useClerk();
    const { isSignedIn,user} = useUser();
  return (
    <div className=' flex items-center justify-between mx-4 py-3 lg:mx-44'>
        
            <Link to='/'><img src={assets.logo} alt="" className=' w-32 sm:w-44 cursor-pointer'/></Link>
            { isSignedIn 
            ?<div><UserButton/></div>
            :<button onClick={()=>openSignIn({})} className=' px-4 py-2 bg-zinc-800 sm:py-3 text-white rounded-full flex justify-center gap-2 text-sm'> Get started <img src={assets.arrow_icon} alt="" className=' w-3 sm:w-4'/></button>
            }
            
    </div>
  )
}

export default Navbar