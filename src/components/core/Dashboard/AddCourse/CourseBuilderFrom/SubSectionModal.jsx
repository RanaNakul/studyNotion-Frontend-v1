import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { createSubSection, updateSubSection } from '../../../../../services/operations/courseDetailsAPI';
import { setCourse } from '../../../../../slices/courseSlice';
import {RxCross1} from "react-icons/rx";
import Upload from "../Upload";
import IconBtn from '../../../../common/IconBtn';


function SubSectionModal({
    modalData,
    setModalData,
    add=false,
    view=false,
    edit=false,
}) {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState: {errors},
    } = useForm();

    const dispatch = useDispatch();
    const {course} = useSelector((state) => state.course);
    const {token} = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        if(view || edit){
            setValue("lectureTitle",modalData.title);
            setValue("lectureDesc",modalData.description);
            setValue("lectureVideo",modalData.videoUrl);
        }
    },[view, edit, modalData, setValue]);

    const handleEditSubSection = async () => {

        const currentValues = getValues()
        const formData = new FormData();

        formData.append("sectionId", modalData.sectionId);
        formData.append("subSectionId", modalData._id);
        formData.append("courseId", course._id);

        if(currentValues.lectureTitle !== modalData.title){
            formData.append("title", currentValues.lectureTitle);
        }
        if(currentValues.lectureDesc !== modalData.description){
            formData.append("description", currentValues.lectureDesc);
        }
        if(currentValues.lectureVideo !== modalData.videoUrl){
            formData.append("videoFile", currentValues.lectureVideo);
        }

        setLoading(true);

        const result = await updateSubSection(formData, token);

        if(result){
            dispatch(setCourse(result));
        }

        setModalData(null);
        setLoading(false);
        
    }

    const isFormUpdated = () => {
        const currentValues = getValues();
        
        if(currentValues.lectureTitle !== modalData.title || 
            currentValues.lectureDesc !== modalData.description ||
            currentValues.lectureVideo !== modalData.videoUrl 
        ){
            return true;
        }
        else{
            return false;
        }
    }

    const onSubmit = async (data) => {

        if(view){
            return;
        }

        if(edit){
            if(!isFormUpdated()){
                toast.error("No changes made to the form")
            }
            else{
                handleEditSubSection();
            }
            return;
        }

        const formData = new FormData();
        formData.append("sectionId", modalData);
        formData.append("courseId", course._id);
        formData.append("title",data.lectureTitle);
        formData.append("description",data.lectureDesc);
        formData.append("videoFile",data.lectureVideo);


        setLoading(true);

        const result = await createSubSection(formData, token);

        if(result){
            dispatch(setCourse(result))
        }

        setModalData(null);
        setLoading(false);

    }


  return (
    <div className="fixed inset-0 z-[500] !mt-0 grid h-screen w-screen place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
    
        <div className=' w-[600px] flex flex-col bg-richblack-700 border border-richblack-300 rounded-lg 
        text-richblack-5 my-10  '>
            <div className='flex items-center justify-between py-6 px-6  '>
                <p>{view &&  "Viewing"} {edit && "Editing"} {add && "Adding"} Lecture</p>

                <button onClick={() => (!loading ? setModalData(null) : {})}>
                    <RxCross1/>
                </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className=' bg-richblack-800 py-6 px-6 gap-y-8 flex flex-col rounded-b-lg '>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='lectureTitle' 
                        className="lable-style"
                    >
                        Lecture Title<sup className="text-pink-200"> *</sup>
                    </label>
                    <input
                        type='text'
                        name='lectureTitle'
                        id='lectureTitle'
                        placeholder='Enter Lecture Title'
                        {...register("lectureTitle", {required:true})}
                        className='form-style'
                    />
                    {
                        errors.lectureTitle && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Lecture Title is required
                            </span>
                        )
                    }
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor='lectureDesc'
                        className="lable-style"
                    >
                        Lecture Description<sup className="text-pink-200"> *</sup>
                    </label>
                    <textarea
                        id='lectureDesc'
                        name='lectureDesc'
                        placeholder='Enter Lecture Desctiption'
                        {...register("lectureDesc",{required:true})}
                        className='form-style min-h-[130px]'
                    />
                    {
                        errors.lectureDesc && (
                            <span className="-mt-1 text-[12px] text-yellow-100">
                                Lecture Description is required
                            </span>
                        )
                    }
                </div>

                <Upload
                    name="lectureVideo"
                    label="Lecture Video"
                    register={register}
                    setValue={setValue}
                    errors={errors}
                    video={true}
                    editData={edit ? modalData?.videoUrl : null}
                    viewData={view ? modalData?.videoUrl : null}
                />


                {
                    !view && (
                        <div className='flex items-end justify-end'>
                            <IconBtn
                                text={loading ? "Loading..." : edit ? "Save Changes" : "Save"}
                            />
                        </div>
                    ) 
                }

            </form>
        </div>

    </div>
  )
}

export default SubSectionModal
