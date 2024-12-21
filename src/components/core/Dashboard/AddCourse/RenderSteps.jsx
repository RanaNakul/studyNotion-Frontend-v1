import React from 'react'
import {FaCheck} from "react-icons/fa"
import CourseInformationFrom from './CourseInformationFrom/CourseInformationFrom';
import CourseBuilderFrom from './CourseBuilderFrom';
import { useSelector } from 'react-redux';
import PublishCourse from './PublishCourse';

const RenderSteps = () => {

    
    const {step} = useSelector((state) => state.course);
    // const step = 2 ;


    const steps = [
        {
            id:1,
            title: "Course Information",
        },
        {
            id:2,
            title: "Course Builder",
        },
        {
            id:3,
            title: "Publish"
        },
    ]

  return (
    <div className='flex-1'>
        <div className='flex w-full justify-center mb-2'>
            {
                steps.map((item, index) => (
                    <>
                        <div className='flex flex-col items-center ' key={index}>
                            <div className={`${step > item.id ? "font-bold bg-yellow-50 text-richblack-900 p-[8.9px]"
                             : `${step === item.id ? "bg-yellow-900 text-yellow-50 border-yellow-50 py-1 px-3  "
                                    : " border-richblack-700  bg-richblack-800 text-richblack-300 font-medium py-1 px-3 " }` 
                            }
                              flex items-center  justify-center aspect-square border-[1px] rounded-full `}>
                                {
                                    step > item.id ? (<FaCheck className=''/> ) : (item.id)
                                }
                            </div>
                        </div>
                        {
                            item.id !== steps.length && (
                                <div className={`${step > item.id ? "border-yellow-50" : "border-richblack-500"} h-[calc(34px/2)] w-[33%]  border-dashed border-b-2   `} ></div>
                            )
                        }
                    </>
                ))
            }
        </div>
        <div className='relative mb-16 flex fles-row w-full select-none justify-between'>
            {
                steps.map( (item) => (
                    <div className='flex min-w-[130px] flex-col items-center gap-y-2'>
                        <p className='text-sm text-richblack-5'>{item.title}</p>
                    </div>
                ))
            }
        </div>
        { step === 1 && <CourseInformationFrom />}
        { step === 2 && <CourseBuilderFrom />}
        { step === 3 && <PublishCourse />}
    </div>
  )
}

export default RenderSteps