import React, { useState } from 'react'
import {HomePageExplore} from "../../../data/homepage-explore"
import HighlightText from './HighlightText';
import CourseCard from './CourseCard';

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExplorMore = () => {

    const [currentTab , setCurrentTab] = useState(tabsName[0]);
    const [courses , setCourses]  = useState(HomePageExplore[0].courses);
    const [currentCard , setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);

    const setMyCards = (value) => {
        setCurrentTab(value);
        const result = HomePageExplore.filter((course) => course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }


  return (
    <div className='w-full md:w-11/12 relative flex flex-col items-start md:items-center'>

        <div className='text-start md:text-center text-3xl font-semibold mt-[35px] tracking-[-.02em]'>
            Unlock the 
            <HighlightText text={"Power of Code"} />
        </div>

        <p className=' text-start md:text-center text-base text-richblack-300 font-medium mt-3'>
            Learn to Build Anything You Can Imagine
        </p>

        <div className=' invisible min-[594px]:visible flex flex-row items-center  gap-1 min-[950px]:gap-5 rounded-full bg-richblack-800 p-1 mt-7 mb-5 shadow-[inset_0px_-1px_0px_rgba(255,255,255,0.18)] h-[72px] min-[875px]:h-fit'>
            {
                tabsName.map((element , index) => {
                    return (
                        <div className={`text-[16px] ${currentTab === element ? " bg-richblack-900 text-richblack-5 font-medium " : 
                            " text-richblack-200 "} rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2 text-center h-full flex items-center`}
                            key={index}
                            onClick={() => setMyCards(element)}>
                            {element}
                        </div>
                    )
                })
            }
        </div>

        <div className='h-[730px] min-[594px]:h-[850px] min-[950px]:h-[200px]'></div>

        <div className=' absolute top-[180px] min-[396px]:top-[150px] min-[594px]:top-[250px] flex flex-col min-[950px]:flex-row gap-10 justify-between w-full'>
            {
                courses.map((course, index) => {
                    return  (
                        <CourseCard 
                            key={index}
                            cardData={course}
                            currentCard={currentCard}
                            setCurrentCard={setCurrentCard}
                        />
                    )
                })
            }
        </div>

    </div>
  )
}

export default ExplorMore