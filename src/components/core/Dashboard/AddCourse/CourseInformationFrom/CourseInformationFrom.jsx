import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { addCourseDetails, editCourseDetails, fetchCourseCategories } from '../../../../../services/operations/courseDetailsAPI';
import {HiOutlineCurrencyRupee} from "react-icons/hi"
import RequirementField from './RequirementField';
import Upload from '../Upload';
import ChipInput from './ChipInput';
import IconBtn from "../../../../common/IconBtn"
import { MdNavigateNext } from "react-icons/md"
import { setCourse, setStep } from '../../../../../slices/courseSlice';
import toast from 'react-hot-toast';
import { COURSE_STATUS } from '../../../../../utils/constants';


const CourseInformationFrom = () => {

    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors},
    }= useForm();

    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const {course, editCourse} = useSelector((state) => state.course);
    const [loading, setLoading] = useState(false);
    const [courseCategories, setCourseCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            setLoading(true);
            const categories = await fetchCourseCategories();
            if(categories.length > 0){
                setCourseCategories(categories);
            }
            setLoading(false);
        }
        getCategories();
    }, []);

    useEffect(() => {
        if(editCourse){
            setValue("courseTitle", course.courseName);
            setValue("courseShortDesc", course.courseDescription);
            setValue("coursePrice", course.price);
            setValue("courseFullPrice", course.fullPrice);
            setValue("courseTags", course.tags);
            setValue("courseBenefits", course.whatYouWillLearn);
            setValue("courseCategory", course.category._id);
            setValue("courseRequirements", course.instructions);
            setValue("courseImage", course.thumbnail);
        }

    }, [editCourse, course, courseCategories, setValue])

    // console.log(courseCategories);

    const isFormUpdated = () => {
        const currentValues = getValues()
        // console.log("changes after editing form values:", currentValues)
        if (
          currentValues.courseTitle !== course.courseName ||
          currentValues.courseShortDesc !== course.courseDescription ||
          currentValues.coursePrice !== course.price ||
          currentValues.courseFullPrice !== course.fullPrice ||
          currentValues.courseTags.toString() !== course.tags.toString() ||
          currentValues.courseBenefits !== course.whatYouWillLearn ||
          currentValues.courseCategory !== course.category._id ||
          currentValues.courseRequirements.toString() !==
            course.instructions.toString() ||
          currentValues.courseImage !== course.thumbnail
        ) {
          return true
        }
        return false
      }

    const onSubmit = async (data) => {
        // console.log(data)
    
        if (editCourse) {
          // const currentValues = getValues()
          // console.log("changes after editing form values:", currentValues)
          // console.log("now course:", course)
        //   console.log("Has Form Changed:", isFormUpdated())
          if (isFormUpdated()) {
            const currentValues = getValues()
            const formData = new FormData()
            // console.log(data)
            formData.append("courseId", course._id)
            if (currentValues.courseTitle !== course.courseName) {
              formData.append("courseName", data.courseTitle)
            }
            if (currentValues.courseShortDesc !== course.courseDescription) {
              formData.append("courseDescription", data.courseShortDesc)
            }
            if (currentValues.coursePrice !== course.price) {
              formData.append("price", data.coursePrice)
            }
            if (currentValues.courseFullPrice !== course.fullPrice) {
              formData.append("fullPrice", data.courseFullPrice)
            }
            if (currentValues.courseTags.toString() !== course.tags.toString()) {
              formData.append("tag", JSON.stringify(data.courseTags))
            }
            if (currentValues.courseBenefits !== course.whatYouWillLearn) {
              formData.append("whatYouWillLearn", data.courseBenefits)
            }
            if (currentValues.courseCategory !== course.category._id) {
              formData.append("category", data.courseCategory)
            }
            if (
              currentValues.courseRequirements.toString() !==
              course.instructions.toString()
            ) {
              formData.append(
                "instructions",
                JSON.stringify(data.courseRequirements)
              )
            }
            if (currentValues.courseImage !== course.thumbnail) {
              formData.append("thumbnailImage", data.courseImage)
            }
            // console.log("Edit Form data: ", formData)
            setLoading(true)
            const result = await editCourseDetails(formData, token) 
            setLoading(false)
            if (result) {
              dispatch(setStep(2))
              dispatch(setCourse(result))
            }
          } else {
            toast.error("No changes made to the form")
          }
          return
        }
    
        const formData = new FormData()
        formData.append("courseName", data.courseTitle)
        formData.append("courseDescription", data.courseShortDesc)
        formData.append("price", data.coursePrice)
        formData.append("fullPrice", data.courseFullPrice)
        formData.append("tag", JSON.stringify(data.courseTags))
        formData.append("whatYouWillLearn", data.courseBenefits)
        formData.append("category", data.courseCategory)
        formData.append("status", COURSE_STATUS.DRAFT)
        formData.append("instructions", JSON.stringify(data.courseRequirements))
        formData.append("thumbnailImage", data.courseImage)
        setLoading(true)
        const result = await addCourseDetails(formData, token);
        // console.log(data.courseCategory);
        // console.log(formData);
        // console.log(result);
        if (result) {
          dispatch(setStep(2))
          dispatch(setCourse(result))
        }
        setLoading(false)
      }
    

  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className=' rounded-md bg-richblack-800 border-richblack-700 border-[1px] p-6 space-y-8'
    >

        {/* Course Title */}
        <div className='flex flex-col gap-2'>
            <label  htmlFor='courseTitle'
                className="lable-style"
            >
                Course Title<sup className="text-pink-200"> *</sup>
            </label>
            <input 
                type='text'
                name='courseTitle'
                id='courseTitle'
                placeholder='Enter Course Title'
                {...register("courseTitle",{required:true})}
                className="form-style"
            />
            {
                errors.courseTitle && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Course Title is Required.
                    </span>
                )
            }
        </div>

        {/* Course Short Description */}
        <div className='flex flex-col gap-2'>
            <label htmlFor='courseShortDesc'
                className="lable-style"
            >
                Course Short Description <sup className="text-pink-200"> *</sup>
            </label>
            <textarea 
                name='courseShortDesc'
                id='courseShortDesc'
                placeholder='Enter Description'
                {...register("courseShortDesc",{required:true})}
                className="form-style min-h-[130px]"
            />
            {
                errors.courseShortDesc && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Course Description is Required.
                    </span>
                )
            }
        </div>
        
        {/* Course Price */}
        <div className='flex flex-col gap-2 relative'>
            <label  htmlFor='courseFullPrice'
                className="lable-style"
            >
                Course Price<sup className="text-pink-200"> *</sup>
            </label>
            <input 
                type='number'
                name='courseFullPrice'
                id='courseFullPrice'
                placeholder='Enter Course Price'
                {...register("courseFullPrice",{
                    required:true,
                    valueAsNumber:true,
                    pattern: {
                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    }
                })}
                className="form-style pl-12"
            />
            <HiOutlineCurrencyRupee className='absolute top-10 left-3 text-2xl text-richblack-400' />
            {
                errors.courseFullPrice && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Course Price is Required.
                    </span>
                )
            }
        </div>

        {/* Course Discounted Price */}
        <div className='flex flex-col gap-2 relative'>
            <label  htmlFor='coursePrice'
                className="lable-style"
            >
                Course Discounted Price<sup className="text-pink-200"> *</sup>
            </label>
            <input 
                type='number'
                name='coursePrice'
                id='coursePrice'
                placeholder='Enter Course Discounted Price'
                {...register("coursePrice",{
                    required:true,
                    valueAsNumber:true,
                    pattern: {
                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                    }
                })}
                className="form-style pl-12"
            />
            <HiOutlineCurrencyRupee className='absolute top-10 left-3 text-2xl text-richblack-400' />
            {
                errors.coursePrice && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Course Discounted Price is Required.
                    </span>
                )
            }
        </div>

        {/* Course Category */}
        <div className='flex flex-col gap-2'>
            <label  htmlFor='courseCategory'
                className="lable-style"
            >
                Course Category <sup className="text-pink-200"> *</sup>
            </label>
            <select
                id='courseCategory'
                name='courseCategory'
                {...register("courseCategory",{required:true})}
                className="form-style cursor-pointer"
            >
                <option value="" disabled>Choose a Category</option>

                {
                    !loading && courseCategories.map((category) => (
                        <option key={category?._id} value={category?._id}>
                            {category?.name}
                        </option>
                    ))
                }
            </select>
            {
                errors.courseCategory && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Course Category is Required.
                    </span>
                )
            }
        </div>

        {/* Course Tags */}
        <ChipInput
                label="Tags"
                name="courseTags"
                placeholder="Enter Tags and press Enter"
                register={register}
                errors={errors}
                setValue={setValue}
                getValues={getValues}
            />

        {/* Course Thumbnail Image */}
        <Upload
            name="courseImage"
            label="Course Thumbnail"
            register={register}
            setValue={setValue}
            errors={errors}
            editData={editCourse ? course?.thumbnail : null}
        />

        {/* Benefits of the course  */}
        <div className='flex flex-col gap-2'>
            <label htmlFor='courseBenefits'
                className="lable-style"
            >
                Benefits of the course <sup className="text-pink-200"> *</sup>
            </label>
            <textarea 
                name='courseBenefits'
                id='courseBenefits'
                placeholder='Enter Benefits of the course'
                {...register("courseBenefits",{required:true})}
                className="form-style min-h-[130px]"
            />
            {
                errors.courseBenefits && (
                    <span className="-mt-1 text-[12px] text-yellow-100">
                        Course Benefits is Required.
                    </span>
                )
            }
        </div>

        {/* RequirementField */}
        <RequirementField 
            name="courseRequirements"
            id="courseRequirements"
            label="Requirements/Instructions"
            register={register}
            errors={errors}
            setValue={setValue}
            getValues={getValues}
        />

        {/* Next Button */}
        <div className="flex justify-end gap-x-2">
                {editCourse && (
                <button
                    onClick={() => dispatch(setStep(2))}
                    disabled={loading}
                    className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
                >
                    Continue Wihout Saving
                </button>
                )}
                <IconBtn
                disabled={loading}
                text={!editCourse ? "Next" : "Save Changes"}
                >
                <MdNavigateNext />
                </IconBtn>
        </div>

    </form>
  )
}

export default CourseInformationFrom