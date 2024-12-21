import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import IconBtn from '../../../../common/IconBtn';
import { MdAddCircleOutline, MdNavigateNext } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import NestedView from './NestedView';
import { setCourse, setEditCourse, setStep } from '../../../../../slices/courseSlice';
import toast from 'react-hot-toast';
import { createSection, updateSection } from '../../../../../services/operations/courseDetailsAPI';

function CourseBuilderFrom() {

    const {register, handleSubmit, setValue, formState:{errors}} = useForm();

    const [editSectionName, setEditSectionName] = useState(null);
    const [loading, setLoading] = useState(false);
    const {course} = useSelector((state) => state.course);
    const dispatch = useDispatch();
    const {token} = useSelector((state) => state.auth)

    const cancelEdit = () => { 
        setEditSectionName(null);
        setValue("sectionName","");
    }
    
    const goBack = () => {
        dispatch(setStep(1));
        dispatch(setEditCourse(true));
    }

    const goNext = () => {
        if(course.courseContent.length === 0){
            toast.error("Please add atleast one Section");
            return;
        }
        if(course.courseContent.some((section) => section.subSection.length === 0)){
            toast.error("Please add atleast one lecture in each section");
            return;
        }
        dispatch(setStep(3));
    }

    const handleChangeEditSectionName = (sectionId,sectionName) => {
        if(editSectionName === sectionId){
            cancelEdit();
        }
        setEditSectionName(sectionId);
        setValue("sectionName",sectionName);
    }
    
    const onSubmit = async (data) => {
        setLoading(true);
        let result;

        if(editSectionName){
            result = await updateSection(
                {
                    newSectionName:data.sectionName,
                    sectionId:editSectionName,
                    courseId:course._id,
                },token)
            // console.log("index ->",result)
        }
        else{
            result = await createSection(
                {
                    sectionName:data.sectionName,
                    courseId:course._id,
                },token)
                // console.log(result);
        }

        if(result){
            // console.log(result);
            dispatch(setCourse(result));
            setEditSectionName(null);
            setValue("sectionName","");
        }
        setLoading(false);
    }

  return (
    <div className=' rounded-md bg-richblack-800 border-richblack-700 border-[1px] p-6 space-y-8'>
        <p className=' text-2xl font-medium'>Course Builder </p>

        <form onSubmit={handleSubmit(onSubmit)}>

            <div className='flex flex-col gap-2'>

                <label htmlFor='sectionName' className='lable-style'>
                    Section Name<sup className="text-pink-200"> *</sup>
                </label>
                <input
                    id='sectionName'
                    name='sectionName'
                    placeholder='Add Section Name'
                    {...register("sectionName",{required:true})}
                    className='form-style'
                />
                {
                    errors.sectionName && (
                        <span className='-mt-1 text-[12px] text-yellow-100'>
                            Section Name is Required
                        </span>
                    )
                }

                <div className='mt-3 flex flex-row items-end gap-4'>
                    <IconBtn type="submit" text={ editSectionName ? "Edit Section Name" : "Create Section"} 
                    outline={true} disabled={loading}>
                    <MdAddCircleOutline className='text-xl' />
                    </IconBtn>

                    {
                        editSectionName && (
                            <button type='button' className=' text-richblack-400 underline ' onClick={cancelEdit}>
                                Cancel Edit
                            </button>
                        )
                    }                    
                            
                    
                </div>

            </div>

        </form>

        {
            course.courseContent.length > 0 && (
                <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
            )
        }

        <div className='flex flex-row justify-end gap-4'>
            <button className=' rounded-md cursor-pointer py-2 px-4 text-richblack-900 font-semibold bg-richblack-400' onClick={goBack}>
                Back
            </button>
            <IconBtn disabled={loading} text="Next" onclick={goNext}>
                <MdNavigateNext />
            </IconBtn>
        </div>
 
    </div>
  )
}

export default CourseBuilderFrom