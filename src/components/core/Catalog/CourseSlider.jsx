import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import 'swiper/css/navigation'
// import "../../.."
// Import required modules
import { Pagination } from "swiper"

import CourseCard from "./CourseCard"

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
            slidesPerView={3.1}
            spaceBetween={25}
            pagination={{
                dynamicBullets: true,
            }}
            modules={[Pagination]}
          
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <CourseCard course={course} Height={"h-[250px]"}  />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider