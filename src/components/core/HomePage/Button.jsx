import React from 'react'
import { Link } from 'react-router-dom'

function Button({children, active, linkto}) {
  return (
    <Link to={linkto}>

        <div className={` text-center text-[16px] px-6 py-3 font-bold rounded-lg
         ${active ? "bg-yellow-50 text-black shadow-[inset_-2px_-2px_0px_rgba(255,255,255,0.51)]"
         : " bg-richblack-800 text-white shadow-[inset_-2px_-2px_0px_rgba(255,255,255,0.18)]"}
            hover:scale-95 hover:shadow-none transition-all duration-200`}>
            {children}
        </div>
    </Link>
  )
}

export default Button