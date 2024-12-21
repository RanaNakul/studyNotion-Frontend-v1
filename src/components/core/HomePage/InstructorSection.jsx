import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from "./Button"
import {FiArrowRight} from "react-icons/fi"


const InstructorSection = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-10 md:gap-20 items-center mt-10 md:mt-24 '>

        <div className='w-full md:w-[50%] md:shadow-[-20px_-20px_0px_rgb(245,245,245)] '>
            <img src={Instructor} alt='Instructor.png' className='mx-auto' />
        </div>

        <div className='w-full md:w-[50%] flex flex-col items-start gap-6'>

            <div className='text-3xl md:text-4xl font-semibold mt-[35px] w-full md:w-[60%] tracking-[-.02em]'>
                Become an 
                <HighlightText text={"instructor"} />            
            </div>

            <p className='text-base text-richblack-300 font-medium md:mb-10 w-full md:w-[85%]'>
            Instructors from around the world teach millions of students on StudyNotion. We provide 
            the tools and skills to teach what you love.
            </p>

            <CTAButton active={true} linkto={"/signup"}>
                <div className='flex flex-row items-center gap-2 '>
                    Start Teaching Today
                    <FiArrowRight/>
                </div>
            </CTAButton>
        </div>

    </div>
  )
}

export default InstructorSection