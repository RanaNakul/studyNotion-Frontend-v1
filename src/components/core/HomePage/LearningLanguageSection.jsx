import React from 'react'
import HighlightText from './HighlightText'
import Know_your_progress from "../../../assets/Images/Know_your_progress.png"
import Compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "./Button"


const LearningLanguageSection = () => {
  return (
    <div className='w-11/12 max-w-maxContent flex flex-col mx-auto mt-12 md:mt-24 items-start md:items-center md:text-center'>
 
        <div className=' text-3xl md:text-4xl font-semibold tracking-[-.02em]'>
          Your swiss knife for 
          <HighlightText text={"learning any language"}/>
        </div>

        <div className=' w-full md:w-[60%] text-base text-richblack-700 font-medium font-inter mt-3'>
          Using spin making learning multiple languages easy. with 20+ languages realistic 
          voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex flex-col min-[830px]:flex-row items-center mt-5 mx-auto ">

            <img src={Know_your_progress} alt='Know_your_progress.png' className=' object-center mt-12 min-[830px]:-mr-32 min-[830px]:-mt-14' />
            <img src={Compare_with_others} alt='Compare_with_others.png' className=' object-center -mt-16 -ml-3  min-[830px]:m-0 ' />
            <img src={plan_your_lessons} alt='plan_your_lessons.png' className=' object-center -mt-24 -ml-3 min-[830px]:-ml-[150px] min-[830px]:-mt-14 md:hidden min-[1200px]:block' />
            
        </div>

        <div className=' mt-10 mb-20 mx-auto'>
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>

    </div>
  )
}

export default LearningLanguageSection