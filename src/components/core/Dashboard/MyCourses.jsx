import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchInstructorCourses } from '../../../services/operations/courseDetailsAPI';
import IconBtn from '../../common/IconBtn';
import {VscAdd} from "react-icons/vsc"
import CoursesTable from './InstructorCourses/CoursesTable';

const MyCourses = () => {

    const {token} = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading,  setLoading] = useState(false);


    useEffect(() => {
        const fetchCourses = async () => {
            setLoading(true);

            const result = await fetchInstructorCourses(token);
            
            console.log("response -> ",result)

            if(result){
                setCourses(result);
            }

            setLoading(false);
        }

        fetchCourses();
    }, [token])



  return (
    <div className=' text-richblack-5'>
    
        <div className='mb-14 flex items-center justify-between'>
            <h1 className='text-3xl font-medium'>My Courses</h1>
            <IconBtn text="Add Course" onclick={() =>  navigate('/dashboard/add-course')} >
                <VscAdd/>
            </IconBtn>
        </div>

        {courses && <CoursesTable courses={courses} setCourses={setCourses} courseLoading={loading} />}

    </div>
  )
}

export default MyCourses