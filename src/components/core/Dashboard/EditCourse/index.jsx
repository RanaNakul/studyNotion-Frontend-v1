import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import RenderSteps from '../AddCourse/RenderSteps';
import { getFullDetailsOfCourse } from '../../../../services/operations/courseDetailsAPI';
import { resetCourseState, setCourse, setEditCourse } from '../../../../slices/courseSlice';
import IconBtn from '../../../common/IconBtn';

const EditCourse = () => {

    const dispatch = useDispatch();
    const {courseId} = useParams();
    const {course} = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);
    const {token} =  useSelector((state) => state.auth);
    const navigate = useNavigate()

    useEffect(() => {
        const populateCourseDetails = async() => {
            setLoading(true);

            const result = await getFullDetailsOfCourse(courseId, token);
            if(result?.courseDetails){
                dispatch(setEditCourse(true));
                dispatch(setCourse(result?.courseDetails));
            }
            setLoading(false);
        }
        populateCourseDetails();
    },[ courseId, token]);

    const handleCancelEdit = () => {
        dispatch(resetCourseState());
        navigate("/dashboard/my-courses");
    }



    if(loading){
        return (
            <div className="grid flex-1 place-items-center">
                <div className='spinner'></div>
            </div>
        )
    }


  return (
    <div className='text-richblack-5 mx-auto w-[58%]'>

        <div className='mb-14 flex items-center justify-between'>
            <h1 className='text-3xl font-medium'>
            Edit Course
            </h1>
            <IconBtn text="Cancel Edit" onclick={handleCancelEdit }  >
            </IconBtn>
        </div>
        <div>
            {
                course ? (<RenderSteps/>) : (<p>Course Not Found</p>)
            }            
        </div>


    </div>
  )
}

export default EditCourse