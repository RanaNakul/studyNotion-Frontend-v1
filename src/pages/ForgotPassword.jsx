import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs"
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const {loading} = useSelector((state) => state.auth);
    const disppatch = useDispatch(); 


    const handleOnSubmit = (e) => {
        e.preventDefault();

        disppatch(getPasswordResetToken(email, setEmailSent));
    }
  return (
    <div className='text-richblack-5 flex flex-col justify-center items-center min-h-[calc(100vh-3.5rem)] '>
        {
            loading ? (
                <div className='spinner'></div>
            ) : (
                <div className='w-[444px] flex flex-col gap-5'>
                    <h1 className='text-3xl font-semibold'>
                        {
                            emailSent ? "Check your email" : "Reset your Password"
                        }
                    </h1>

                    <p className='text-lg font-normal text-richblack-100'>
                        {
                            emailSent ? `We have sent the reset email to ${email}` :
                                        `Have no fear. We’ll email you instructions to reset your password. If you dont 
                                        have access to your email we can try account recovery`
                        }
                    </p>

                    <form onSubmit={handleOnSubmit} className='flex flex-col gap-6'>
                        {
                            !emailSent && (
                                <label>
                                    <p  className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                        Email Address<sup className="text-pink-200"> *</sup>
                                    </p>
                                    <input
                                    
                                        required
                                        type='email'
                                        name='email'
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        placeholder='Enter Your Email Address'
                                        style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                                    />
                                </label>
                            ) 
                        }

                        <button type='submit' className='text-center text-[16px] px-6 py-3 font-bold rounded-lg
                                hover:scale-95 hover:shadow-none transition-all duration-200
                              bg-yellow-50 text-black shadow-[inset_-2px_-2px_0px_rgba(255,255,255,0.51)]'>
                            {
                                !emailSent ? "Submit" : "Resend Email"
                            }
                        </button>
                    </form>


                    <div>
                        <Link to="/login" className='flex gap-2 items-center'>
                            <BsArrowLeft/>
                            <p>Back to Login</p>
                        </Link>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default ForgotPassword