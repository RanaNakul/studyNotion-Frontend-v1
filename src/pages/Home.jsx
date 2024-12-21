import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import {FiArrowRight} from "react-icons/fi"
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimeLineSection from '../components/core/HomePage/TimeLineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExplorMore from '../components/core/HomePage/ExplorMore'
import ReviewSlider from '../components/common/ReviewSlider';




function Home() {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
    
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              video.play(); // Start playing when the video enters the viewport
            } else {
              video.pause(); // Pause when it leaves the viewport
            }
          },
          { threshold: 0.25 } // Video must be 25% visible to start playing
        );
    
        if (video) observer.observe(video);
    
        return () => {
          if (video) observer.unobserve(video);
        };
      }, []);


  return (
    <div>

        {/* Section 1 */}

        <div className=' relative mx-auto max-w-maxContent flex flex-col w-11/12 items-start md:items-center text-white justify-between'>

            <Link to={"/signup"}>

                <div className='mt-8 md:mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                 transition-all duration-200 hover:scale-95 w-fit group hover:shadow-none
                    shadow-[inset_0px_-1px_0px_rgba(255,255,255,0.18)]'>
                    <div className='flex flex-row items-center gap-2 px-10 py-[5px] rounded-full
                        transition-all duration-200 group-hover:bg-richblack-900 '>
                        <p>Becone an Instructor</p>
                        <FiArrowRight/>
                    </div>
                </div>

            </Link>

            <div className=' text-start md:text-center text-3xl md:text-4xl font-semibold mt-[35px] tracking-[-.02em]'>
                Empower Your Future with
                <HighlightText text={"Coding Skills"}/>
                
            </div>

            <div className='mt-4 w-full md:w-[70%] md:text-center text-base text-richblack-300 font-medium'>
                With our online coding courses, you can learn at your own pace, from anywhere in the world, 
                and get access to a wealth of resources, 
                including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8 mx-auto'>
                <CTAButton active={true} linkto={"/signup"}>
                    Learn More
                </CTAButton>

                <CTAButton active={false} linkto={"/login"}>
                    Book a Demo
                </CTAButton>
            </div>

            <div className='relative mx-0 md:mx-3 my-14 w-full md:w-[80%]'>
                <div className='absolute w-full h-[150px] md:h-[295px] videoframebackground rounded-[50%] '></div>
                <div className=' relative shadow-[8px_8px_0px_rgb(245,245,245)] md:shadow-[20px_20px_0px_rgb(245,245,245)]'>
                    <video ref={videoRef} muted loop autoPlay={false} preload="none">
                        <source src={Banner} type='video/mp4' />
                    </video>
                </div>
            </div>

            {/* code section 1 */}
            
            <div>

                <CodeBlocks 
                    position={"md:flex-row"}
                    heading={
                        <div className='text-3xl font-semibold' >
                            Unlock your 
                            <HighlightText text={"coding potential "}/> 
                            with our online courses.
                        </div>
                    }
                    subheading={
                            `Our courses are designed and taught by industry experts who \n have years of experience in coding and are passionate about sharing their knowledge with you.`
                    }
                    ctabtn1={
                        {
                            text: "Try it Yourself",
                            active: true,
                            linkto: "/signup"
                        }
                    }
                    ctabtn2={
                        {
                            text: "Learn More",
                            active: false,
                            linkto: "/login"
                        }
                    }
                    codeblock={
                        `<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<linkrel="stylesheet"href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a>\n<ahref="three/">Three</a>\n</nav>`
                    }
                    codecolor={"text-[#1FA2FF]"}
                    backgroundGradient={"codeblockEllipse1"}
                />
                
            </div>

            {/* code section 2 */}
            
            <div>
                <CodeBlocks 
                    position={"md:flex-row-reverse"}
                    heading={
                        <text className='text-4xl font-semibold ' >
                            Start
                            <HighlightText text={`coding \n in seconds`}/> 
                        </text>
                    }
                    subheading={
                            `Go ahead, give it a try. Our hands-on learning environment
                            means you'll be writing real code from your very first lesson.`
                    }
                    ctabtn1={
                        {
                            text: "Continue Lesson",
                            active: true,
                            linkto: "/signup"
                        }
                    }
                    ctabtn2={
                        {
                            text: "Learn More",
                            active: false,
                            linkto: "/login"
                        }
                    }
                    codeblock={
                        `import React from "react";\nimport CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`
                    }
                    codecolor={"text-[#E7BC5B]"}
                    backgroundGradient={"codeblockEllipse2"}
                />
            </div>

            <ExplorMore/>

        </div>

        {/* Section 2 */}

        <div className=' bg-pure-greys-5 text-richblack-700 '>

                <div className='homepage_bg h-[320px]'>

                    <div className='h-[220px]'></div>

                    <div className='h-[340px] w-11/12 max-w-maxContent mx-auto flex flex-row gap-8 justify-center '>

                        <CTAButton  active={true} linkto={"/signup"} >
                            <div className='flex gap-2 items-center'>
                                Explore Full Catalog
                                <FiArrowRight/>
                            </div>
                        </CTAButton>

                        <CTAButton active={false} linkto={"/login"}>
                            <div className='flex gap-2 items-center '>
                                Learn More
                            </div>
                        </CTAButton>

                    </div>

                </div>

                <div className='w-11/12 max-w-maxContent mx-auto flex flex-col md:flex-row gap-5 md:gap-16 mt-[35px] md:mt-[90px] pb-[52px]'>

                    <div className='w-full md:w-[45%] text-3xl md:text-4xl font-semibold tracking-[-.02em]'>
                        Get the skills you need for a
                        <HighlightText text={"job that is in demand."} />                         
                    </div>

                    <div className='w-full md:w-[43%] flex flex-col items-start'>
                        <div className='text-base text-richblack-700 font-medium'>
                            The modern StudyNotion is the dictates its own terms. Today, to be a 
                            competitive specialist requires more than professional skills.
                        </div>

                        <div className='mt-12'>
                            <CTAButton active={true} linkto={"/login"}>
                                Learn More
                            </CTAButton>
                        </div>
                    </div>

                </div>
                
                <TimeLineSection/>

                <LearningLanguageSection/>

        </div>

        {/* Section 3 */}

        <div className=' w-11/12 max-w-maxContent mx-auto flex flex-col items-start md:items-center justify-between gap-8
             bg-richblack-900 text-white'>

            <InstructorSection/>

            <h2 className='text-3xl text-start md:text-center md:text-4xl font-semibold mt-10 md:mt-28'>Reviews form other learners</h2>

            <ReviewSlider/>
        </div>

        {/* Footer */}

        <Footer/>


    </div>
  )
}

export default Home