import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import {apiConnector} from '../../../services/apiConnector';
import { contactusEndpoint } from '../../../services/apis';
import countrycode from '../../../data/countrycode.json';
import toast from 'react-hot-toast';


const ContactUsForm = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors, isSubmitSuccessful}
    } = useForm();

    const submitContactForm = async(data) => {
        console.log('logging date:' , data);
        const toastId = toast.loading("Loading...")
        try {
            
            // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
            const response = {Statue:200}
            console.log("logging response: ", response);
            
            toast.success("Message Sent Successfully")
        } catch (error) {
            console.log('error: ', error.message);
            
        }
        toast.dismiss(toastId)

    }

    useEffect(() => {
        if(isSubmitSuccessful){
            reset({
                email:'',
                firstname:'',
                lastname:'',
                message:'',
                phoneNo:'',
            });
        }
    },[reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)} className='text-richblack-600 flex flex-col gap-10'>

        {/* Name */}
        <div className='flex justify-between mt-10'>
            {/* firstname */}
            <div className='flex flex-col gap-1 w-[48%]'>
                <label htmlFor='firstname'
                    className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
                    >First Name</label>
                <input
                    type='text'
                    name='firstname'
                    id='firstname'
                    placeholder='Enter first name'
                    {...register("firstname",{required:true})}
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />
                {
                    errors.firstname && (
                        <span className=' text-yellow-25 text-[14px]'>
                            Please Enter Your Name.
                        </span>
                    )
                }
            </div>

            {/* lastname */}
            <div className='flex flex-col gap-1 w-[48%]'>
                <label htmlFor='lastname'
                    className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
                    >Last Name</label>
                <input
                    type='text'
                    name='lastname'
                    id='lastname'
                    placeholder='Enter Last name'
                    {...register("lastname")}
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                />

            </div>
        </div>

        {/* email */}
        <div className='flex flex-col gap-1'>
            <label htmlFor='email'
                className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
                >Email Address</label>
            <input
                type='email'
                name='email'
                id='email'
                placeholder='Enter Email Address'
                {...register("email", {required:true})}
                style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                    className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
            {
                errors.email && (
                    <span className=' text-yellow-25 text-[14px] '>
                        Please Enter Your Email Address.
                    </span>
                )
            }
        </div>

        {/* Phone Number */}
        <div className='flex flex-col gap-1'>
            <label htmlFor='phonenumber'
                className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
                >Phone Number</label>
            <div className='flex flex-row gap-3'>
 
                    <select
                        name='dropdown'
                        id='dropdown'
                        {...register("countrycode",{required:true})}
                        style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className="w-[79px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        
                    >
                        {
                            countrycode.map((element, index) => (
                                <option key={index} value={element.code} selected={element.code === "+91"}>
                                    {element.code} -{element.country}
                                </option>
                            ))
                        }
                    </select>

                    <input
                        type='number'
                        name='phonenumber'
                        id='phonenumber'
                        placeholder='1234 567 890'
                        {...register("phoneNo",
                            {
                                required:{value:true,message:'Please enter a phone number'},
                                maxLength:{value:10,message:"Invalid Phone Number"},
                                minLength:{value:8,message:"Invalid Phone Number"}
                                
                            }
                        )}
                        style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className="w-[calc(100%-90px)] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        
                    />

            </div>
            {
                errors.phoneNo && (
                    <span className=' text-yellow-25 text-[14px] '>
                        {errors.phoneNo.message}
                    </span>
                )
            }
        </div>

        {/* message */}
        <div className='flex flex-col gap-1'>
            <label htmlFor='message'
                className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5"
                >Message</label>
            <textarea
                name='message'
                id='message'
                cols='30'
                rows='7'
                placeholder='Enter Your Message Here'
                {...register("message",{required:true})}
                style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                    }}
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
            {
                errors.message && (
                    <span className=' text-yellow-25 text-[14px] '>
                        Please Enter Your Message.
                    </span>
                )
            }
        </div>

        <button type='submit' className='text-center text-[16px] px-6 py-3 font-bold rounded-lg
            hover:scale-95 hover:shadow-none transition-all duration-200
            bg-yellow-50 text-black shadow-[inset_-2px_-2px_0px_rgba(255,255,255,0.51)]'>
            
                Send Message
                       
        </button>

        
    </form>
  )
}

export default ContactUsForm