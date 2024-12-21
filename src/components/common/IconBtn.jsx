import React from 'react'

const IconBtn = ({text,onclick,children,disabled,outline=false,customClasses,type}) => {
  return (
    <button
        disabled={disabled}
        onClick={onclick}
        type={type}
        className={`flex items-center gap-2 px-5 py-2 ${
        outline ? "border border-yellow-50 bg-transparent text-yellow-50" : "bg-yellow-50 text-richblack-900"} rounded-md text-base font-semibold ${customClasses}`}
    >
        {
            children ? (
                <>
                    <span>
                    {text}
                    </span>
                    {children}
                </>
            ) : (text)
        }
    </button>
  )
}

export default IconBtn