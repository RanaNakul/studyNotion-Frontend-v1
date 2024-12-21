import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'

const Settings = () => {
  return (
    <div className='text-richblack-5 w-full mx-auto'>
        <h1 className='text-3xl font-medium '>
            Edit Profile
        </h1>

        <ChangeProfilePicture/>

        <EditProfile/>

        <UpdatePassword/>

        <DeleteAccount/>

    </div>
  )
}

export default Settings