import React from 'react'

import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timelineImage from '../../../assets//Images/TimelineImage.png'

const timeline= [
    {
        Logo: Logo1,
        Heading:"Leadership",
        Descrpition: "Fully committed to the success company",
    },
    {
        Logo: Logo2,
        Heading:"Responsibility",
        Descrpition: "Students will always be our top priority",
    },
    {
        Logo: Logo3,
        Heading:"Flexibility",
        Descrpition: "The ability to switch is an important skills",
    },
    {
        Logo: Logo4,
        Heading:"Solve the problem",
        Descrpition: "Code your way to a solution",
    },
]

const TimeLineSection = () => {
  return (
    <div className='w-11/12 max-w-maxContent flex flex-row justify-around items-center md:mb-[150px] mx-auto'>

        <div className='w-full md:w-[40%] flex flex-col gap-5'>
                {
                    timeline.map( (element , index) =>{
                        return (
                            <div className='flex flex-col gap-6' key={index}>

                                <div className='flex flex-row gap-6'>
                                    <div className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full
                                    shadow-[0px_0px_62px_rgba(0,0,0,0.12)]'>
                                        <img src={element.Logo} alt={`${element.Logo}`}/>
                                        
                                    </div>

                                    <div>
                                        <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
                                        <p className='text-base'>{element.Descrpition}</p>
                                    </div>
                                </div>
                                
                                <div className='w-[50px] flex justify-center'>
                                    {
                                        (index !== timeline.length-1) ?   
                                        (<hr className='w-[42px] border-richblack-100 border-dashed rotate-90 my-4 '/>)
                                            : (<div></div>)
                                    }
                                </div>

                            </div>
                        )
                    })
                }
        </div>

        <div className='relative w-0 md:w-[50%] invisible md:visible'>

            <div className='absolute bg-black w-[95%] h-[85%] rounded-[50%] top-4 -left-4 timelineIamgeBg '></div>

            <img src={timelineImage} alt='timelineImage.png' className='relative shadow-[20px_20px_0px_#FFFFFF] z-10' loading="lazy" />

            <div className='absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-8 items-center 
                z-10 px-10 gap-5 left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                <div className='flex items-center gap-4'>
                    <p className='text-4xl font-bold'>10</p>
                    <p className=' text-sm text-caribbeangreen-300'>YEARS <br/> EXPERIENCES</p>
                </div>
                <hr className=' border-caribbeangreen-300 w-11 rotate-90 '/>
                <div className='flex items-center gap-4'>
                    <p className='text-4xl font-bold'>250</p>
                    <p className=' text-sm text-caribbeangreen-300'>YEARS <br/> EXPERIENCES</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TimeLineSection