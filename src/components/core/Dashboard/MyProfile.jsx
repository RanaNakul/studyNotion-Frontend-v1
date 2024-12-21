import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import IconBtn from '../../common/IconBtn'
import {FiEdit} from "react-icons/fi"

const MyProfile = () => {

  const {user} = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className='text-richblack-5 w-full mx-auto'>
        <h1 className='text-3xl font-medium '>
          My Profile
        </h1>

        <div className='flex justify-between items-center px-12 py-8 mt-14 bg-richblack-800 rounded-md border-[1px] border-richblack-700'>
            <div className='flex items-center gap-4'>
                <img src={user?.image}
                  alt={`profile-${user.firstName}`}
                  className=' aspect-square w-[78px] rounded-full object-cover'
                />
                <div>
                  <p className='text-lg font-semibold mb-1'>{user?.firstName + " " + user?.lastName}</p>
                  <p className='text-sm text-richblack-300 font-normal'>{user?.email}</p>
                </div>
            </div>
            <IconBtn text='Edit'
              onclick={() => {
                navigate("/dashboard/settings")
              }}
            >
              <FiEdit/>
            </IconBtn>
        </div>

        <div className='flex flex-col gap-10 px-12 py-8 mt-10 bg-richblack-800 rounded-md border-[1px] border-richblack-700'>
          <div className='flex justify-between items-center'>
            <p className='text-lg font-semibold'>About</p>
            <IconBtn text='Edit'
              onclick={() => {
                navigate("/dashboard/settings")
              }}
            >
              <FiEdit/>
            </IconBtn>
          </div>
          <p className='text-sm text-richblack-300 font-normal'>
              {
                user?.additionalDetails?.about ?? "Write Something About Yourself"
              }
          </p>
        </div>


        <div className='flex flex-col gap-8 px-12 py-8 mt-10 bg-richblack-800 rounded-md border-[1px] border-richblack-700'>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-semibold'>Personal Details</p>
              <IconBtn text='Edit'
                onclick={() => {
                  navigate("/dashboard/settings")
                }}
              >
                <FiEdit/>
              </IconBtn>
            </div>

            <div className='flex flex-row gap-40 '>
                <div className='flex flex-col gap-5'>
                  <div>
                    <p className='text-sm text-richblack-300 font-normal'>First Name</p>
                    <p className='text-sm font-medium mt-2'>{user?.firstName}</p>
                  </div>
                  
                  <div>
                    <p className='text-sm text-richblack-300 font-normal'>Email</p>
                    <p className='text-sm font-medium mt-2'>{user?.email}</p>
                  </div>

                  <div >
                    <p className='text-sm text-richblack-300 font-normal'>Gender</p>
                    <p className='text-sm font-medium mt-2'>{`${user?.additionalDetails?.gender ?? "Add Gender"}`}</p>
                  </div>
                </div>

                <div className='flex flex-col gap-5'>
                  <div>
                    <p className='text-sm text-richblack-300 font-normal'>Last Name</p>
                    <p className='text-sm font-medium mt-2'>{user?.lastName}</p>
                  </div>
                  
                  <div>
                    <p className='text-sm text-richblack-300 font-normal'>Phone Number</p>
                    <p className='text-sm font-medium mt-2'>{`${user?.additionalDetails?.contactNumber ?? "Add Contact Number"}`}</p>
                  </div>

                  <div>
                    <p className='text-sm text-richblack-300 font-normal'>Date Of Birth</p>
                    <p className='text-sm font-medium mt-2'>{`${user?.additionalDetails?.dateOfBirth ?? "Add Date Of Birth"}`}</p>
                  </div>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default MyProfile