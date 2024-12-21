import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import IconBtn from '../../../../common/IconBtn';
import { resetCourseState, setStep } from '../../../../../slices/courseSlice';
import { COURSE_STATUS } from '../../../../../utils/constants';
import { editCourseDetails } from '../../../../../services/operations/courseDetailsAPI';
import { useNavigate } from 'react-router-dom';

function PublishCourse() {

    const {register, handleSubmit, setValue} = useForm();
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const {course} = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect( () => {
        if (course?.status === COURSE_STATUS.PUBLISHED) {
            setValue("public", true);
        }
    },[])

    const goBack =  () => {
        dispatch(setStep(2));
    }

    const goToCourses  = () => {
        dispatch(resetCourseState());
        navigate("/dashboard/my-courses")
    }


    const  onSubmit = async (data) => {
        if( (course?.status === COURSE_STATUS.PUBLISHED && data.public === true)  || 
             (course?.status === COURSE_STATUS.DRAFT && data.public === false) ){
                goToCourses();
                return;
        }
        
        const formData = new FormData();
        formData.append("courseId", course._id);
        const courseStatus =  data.public ? COURSE_STATUS.PUBLISHED : COURSE_STATUS.DRAFT;
        formData.append("status", courseStatus);


        setLoading(true);
        const result = await editCourseDetails(formData,token);

        if(result){
            goToCourses()
        }
        setLoading(false);


    }


  return (
    <div className=' rounded-md bg-richblack-800 border-richblack-700 border-[1px] p-6'>
        <p className=' text-2xl font-medium'>Publish Course</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor='public' className='text-base font-medium flex items-center text-richblack-400 mt-4 mb-6'>
                    <input 
                        type="checkbox"
                        id='public' 
                        {...register('public')} 
                        className=' rounded w-4 h-4'
                    />
                    <span className='p-4'>
                        Make this Course as Public
                    </span>
                </label>

                <div className='flex flex-row justify-end gap-4'>
                    <button
                        disabled={loading}
                        type="button"
                        onClick={goBack}
                        className=' rounded-md cursor-pointer py-2 px-4 text-richblack-900 font-semibold bg-richblack-400'
                    >
                        Back
                    </button>
                    <IconBtn
                        disabled={loading} text="Save Changes" 
                    >
                    </IconBtn>
                </div>
                
            </div>
        </form>
    </div>
  )
}

export default PublishCourse