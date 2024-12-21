import React, { useEffect, useState } from 'react'
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import {RxCountdownTimer} from "react-icons/rx"
import {BsArrowLeft} from "react-icons/bs"
import { sendOtp, signUp } from '../services/operations/authAPI';
import { toast } from 'react-hot-toast';

const VerifyEmail = () => {

    const [otp,setOtp] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {signupData,loading} = useSelector((state)=> state.auth);

    useEffect( () => {
        if(!signupData){
            navigate('/signup');
            toast.error("User Date not found")
        }
    }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const {
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        } = signupData

        dispatch(signUp(
            accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            otp,
            navigate
            ))
    } 

  return (
    <div className='flex flex-col justify-center items-center text-white min-h-[calc(100vh-3.5rem)] '>
        {
            loading ? (
                <div className='spinner'></div>
            ) : (
                <div className='w-[444px] flex flex-col gap-5'>
                    <h1 className='text-3xl font-semibold'>Verify Email</h1>
                    <p className='text-lg font-normal text-richblack-100'>
                        A verification code has been sent to you. Enter the code below
                    </p>
                    <form onSubmit={handleOnSubmit} className='flex flex-col gap-6'>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderInput={(props) => <input {...props} placeholder='-' style={{
                                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                        }}
                                        className="w-[60px] rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5
                                            text-center
                                        " />}
                            renderSeparator={<span className='w-5'></span>}
                        />
                        <button type='submit' className='text-center text-[16px] px-6 py-3 font-bold rounded-lg
                                hover:scale-95 hover:shadow-none transition-all duration-200
                              bg-yellow-50 text-black shadow-[inset_-2px_-2px_0px_rgba(255,255,255,0.51)]'>
                            Verify and Register
                        </button>
                    </form>
                    <div className='mt-4 flex justify-between'>
                        <div>
                            <Link to="/login" className='flex gap-2 items-center'>
                                <BsArrowLeft/>
                                <p>Back to Login</p>
                            </Link>
                        </div>
                        <button 
                          onClick={() => dispatch(sendOtp(signupData.email,navigate))}
                          className='flex gap-2 items-center text-blue-100'
                        >
                            <RxCountdownTimer/>
                            Resend it
                        </button>

                    </div>
                </div>
            )
        }
    </div>
  )
}

export default VerifyEmail