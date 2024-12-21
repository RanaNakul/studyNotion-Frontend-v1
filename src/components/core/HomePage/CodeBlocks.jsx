import React from 'react'
import CTAButton from './Button'
import {FiArrowRight} from "react-icons/fi"
import { TypeAnimation } from 'react-type-animation'

function CodeBlocks({
    position, heading, subheading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codecolor
}) {
  return (

    <div className={`flex flex-col ${position} w-full md:w-[90%] justify-between gap-8 my-5 md:my-20 md:mx-auto`}>
        {/* section 1 */}
        <div className='w-full md:w-[45%] flex flex-col gap-5 md:gap-8'>
            <h1 className='tracking-[-.02em]'>{heading}</h1>
            <div className='text-base text-richblack-300 font-medium md:w-[94%]'>
                {subheading}
            </div>

            <div className='flex justify-between sm:justify-start gap-7 mt-3 md:mt-7'>
                <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                    <div className='flex gap-2 items-center'>
                        {ctabtn1.text}
                        <FiArrowRight/>
                    </div>
                </CTAButton>
                <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>
                        {ctabtn2.text}
                </CTAButton>
            </div>

        </div>

        {/* section 2 */}
        <div className=' relative h-fit flex flex-row mt-5 md:mt-0 w-[100%] py-4 lg:w-[500px] codeblockBackground'>

            <div className={`absolute ${backgroundGradient} w-[80%] h-[90%] rounded-[50%] bg-white 
                -z-10 `}></div>

            <div className=' text-center flex flex-col w-[10%] font-mono text-richblack-400 '>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
            </div>

            <span className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codecolor} pr-2`}>
                <TypeAnimation
                    sequence={[codeblock , 2000 , ""]}
                    repeat={Infinity}
                    omitDeletionAnimation={true}
                    style={
                        {
                            whiteSpace: "pre-line",
                            display:"block",
                            wordBreak: 'break-all'
                        }
                    }
                />
            </span>
        </div>
 
    </div>
  )
}

export default CodeBlocks