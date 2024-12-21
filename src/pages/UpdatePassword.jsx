import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {AiOutlineEyeInvisible, AiOutlineEye} from "react-icons/ai"
import { resetPassword } from '../services/operations/authAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs"

const UpdatePassword = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const [formData, setFormData] = useState({
        password:"",
        confirmPassword: "",
    })

    const {password,confirmPassword} = formData
    
    const {loading} =  useSelector((state => state.auth));

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)


    const handleOnChange = (e) => {
        setFormData( (prevDate) => (
            {
                ...prevDate,
                [e.target.name]:e.target.value
            }
        ))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const token = location.pathname.split('/').at(-1);
        dispatch(resetPassword(password, confirmPassword, token, navigate))
    }
  return (
    <div className=' text-richblack-5 flex flex-col items-center justify-center  min-h-[calc(100vh-3.5rem)] '>
        {
            loading ? (
                <div className='spinner'></div>
            ) : (
                <div className='lg:w-[444px] flex flex-col gap-5'>
                    <h1 className='text-3xl font-semibold'>Choose  new password</h1>
                    <p className='text-lg font-normal text-richblack-100'>
                        Almost done. Enter your new password and youre all set.
                    </p>
                    <form onSubmit={handleOnSubmit} className='flex flex-col gap-6'>
                        <label className="relative">
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                New password <sup className="text-pink-200">*</sup>
                            </p>
                            <input
                                required
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                                placeholder="Enter Password"
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                            />
                            <span
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                                >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                ) : (
                                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                )}
                            </span>
                        </label>
                        <label className="relative">
                            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                                Confirm new password <sup className="text-pink-200">*</sup>
                            </p>
                            <input
                                required
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleOnChange}
                                placeholder="Enter Confirm Password"
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
                            />
                            <span
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                                >
                                {showConfirmPassword ? (
                                    <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                                ) : (
                                    <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                                )}
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="mt-4 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
                        >
                            Reset Password
                        </button>


                    </form>

                    <div>
                        <Link to="/login" className='mt-2 flex gap-2 items-center'>
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

export default UpdatePassword