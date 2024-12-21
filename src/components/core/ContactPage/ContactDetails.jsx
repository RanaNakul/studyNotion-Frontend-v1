import React from 'react';
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import {IoEarth, IoCall} from "react-icons/io5"

const ContactDetails = () => {
  return (
    <div className='flex flex-col gap-10 bg-richblack-800 p-9 rounded-2xl'>
        <div className='flex flex-col gap-1'>
            <div className='flex gap-3 items-center text-lg font-semibold'>
                <HiChatBubbleLeftRight className='text-richblack-100 text-2xl'/>
                Chat on us
            </div>
            <p className=' text-sm font-medium text-richblack-200'>Our friendly team is here to help.</p>
            <p className=' text-sm font-semibold text-richblack-200'>info@studynotion.com</p>
        </div>

        <div className='flex flex-col gap-1'>
            <div className='flex gap-3 items-center text-lg font-semibold'>
                <IoEarth className='text-richblack-100 text-2xl'/>
                Visit us
            </div>
            <p className=' text-sm font-medium text-richblack-200'>Come and say hello at our office HQ.</p>
            <p className=' text-sm font-semibold text-richblack-200'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
        </div>

        <div className='flex flex-col gap-1'>
            <div className='flex gap-3 items-center text-lg font-semibold'>
                <IoCall className='text-richblack-100 text-2xl'/>
                Call us
            </div>
            <p className=' text-sm font-medium text-richblack-200'>Mon - Fri From 8am to 5pm</p>
            <p className=' text-sm font-semibold text-richblack-200'>+123 456 7869</p>
        </div>
    </div>
  )
}

export default ContactDetails