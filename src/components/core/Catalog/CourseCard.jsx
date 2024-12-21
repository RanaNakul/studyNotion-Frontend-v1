import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating'
// import ReactStars from "react-rating-stars-component"
// import {FaRegStar, FaStar} from "react-icons/fa"

const CourseCard = ({ course, Height, width }) => {

    const [avgReviewCount, setAvgReviewCount] = useState(0)
    useEffect(() => {
        const count = GetAvgRating(course.ratingAndReviews)
        setAvgReviewCount(count)
    }, [course])

  return (
    <div className='mb-4'>

        <Link to={`/courses/${course._id}`}>
            <div className="">
                <div className="rounded-lg">
                    <img
                    src={course?.thumbnail}
                    alt="course thumnail"
                    loading="lazy" 
                    className={`${Height} ${width} w-full rounded-xl object-cover `}
                    />
                </div>
                <div className="flex flex-col gap-2 px-1 py-3">
                    <p className="text-xl text-richblack-5">{course?.courseName}</p>
                    <p className="text-sm text-richblack-50">
                    {course?.instructor?.firstName} {course?.instructor?.lastName}
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-5">{avgReviewCount || 0}</span>
                        {/* <ReactStars
                            count={5}
                            value={avgReviewCount || 0}
                            size={20}
                            edit={false}
                            activeColor="#ffd700"
                            emptyIcon={<FaRegStar />}
                            fullIcon={<FaStar />}
                        /> */}
                        <RatingStars Review_Count={avgReviewCount} />
                    <span className="text-richblack-400">
                        {course?.ratingAndReviews?.length} Ratings
                    </span>
                    </div>
                    <p className="text-xl font-semibold text-richblack-5">
                        ₹ {course?.price} 
                        <span className="pl-5 text-lg text-richblack-500 line-through">₹ {course?.fullPrice}</span>
                    </p>
                </div>
            </div>
        </Link>

    </div>
  )
}

export default CourseCard