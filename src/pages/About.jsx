import React from 'react'
import HighlightText from "../components/core/HomePage/HighlightText"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import FoundingStory from "../assets/Images/FoundingStory.png"
import StatsComponent from '../components/core/AboutPage/StatsComponent'
import LearningGrid from '../components/core/AboutPage/LearningGrid'
import ContactFormSection from '../components/core/AboutPage/ContactFormSection'
import Footer from "../components/common/Footer"
import ReviewSlider from '../components/common/ReviewSlider'

const About = () => {
  return (
    <div className='text-richblack-5 relative '>
        {/* section 1 */}
        <section className='bg-richblack-700 mb-40'>
            <div className='relative w-11/12 max-w-maxContent mx-auto flex flex-col items-center text-white justify-between'>
                <div className='w-[68%] mt-20 text-center'>
                    <h1 className='text-4xl font-semibold'>
                        Driving Innovation in Online Education for a 
                        <HighlightText text={"Brighter Future"}/>                
                    </h1>
                    <p className='mt-3 text-richblack-300 text-base font-medium'>
                    Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.
                    </p>
                </div>               

                <div className='h-[270px]'></div>

                <div className=' absolute flex gap-10 top-[296px] left-0'>
                    <img src={BannerImage1}/>
                    <img src={BannerImage2}/>
                    <img src={BannerImage3}/>
                </div>
            </div>
        </section>

        {/* setion 2 */}
        <section className='border-b-[1px] border-richblack-700 mb-28'>
            <div className='w-11/12 mx-auto text-4xl text-white text-center mb-20 font-semibold '>
                We are passionate about revolutionizing the way we learn. Our innovative platform
                <HighlightText text={"combines technology"}/>,
                <span className='bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text 
                    font-bold'> expertise</span>, and community to create an
                <span className='bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text 
                    font-bold'> unparalleled educational experience.</span>
            </div>
        </section>

        {/* section 3 */}
        <section>
            <div className='flex flex-col w-11/12 max-w-maxContent mx-auto gap-52'>
                {/* FoundingStory wala div */}
                <div className='flex flex-row w-full  justify-between items-center'>
                    <div className='w-[47%] flex flex-col gap-10'>
                        <h1 className='bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] '>
                            Our Founding Story
                        </h1>
                        <p className=' text-richblack-300 text-base font-medium'>
                            Our e-learning platform was born out of a shared vision and passion for transforming 
                            education. It all began with a group of educators, technologists, and lifelong learners 
                            who recognized the need for accessible, flexible, and high-quality learning opportunities
                            in a rapidly evolving digital world.
                        </p>
                        <p className=' text-richblack-300 text-base font-medium'>
                            As experienced educators ourselves, we witnessed firsthand the limitations and challenges
                            of traditional education systems. We believed that education should not be confined to 
                            the walls of a classroom or restricted by geographical boundaries. We envisioned a 
                            platform that could bridge these gaps and empower individuals from all walks of life to 
                            unlock their full potential.
                        </p>
                    </div>
                    <div className='relative'>
                        <div className='absolute AdoutEllipse w-[80%] h-[90%] rounded-[50%] bg-white '></div>
                        <img src={FoundingStory} className='relative'/>
                    </div>
                </div>

                {/* One Vision wala div */}
                <div className='flex gap-64 mb-24'>
                    <div className='lg:w-[38%]'>
                        <h1 className='text-4xl bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text 
                            font-bold mb-8'>Our Vision</h1>
                        <p className=' text-richblack-300 text-base font-medium'>
                            With this vision in mind, we set out on a journey to create an e-learning platform that 
                            would revolutionize the way people learn. Our team of dedicated experts worked tirelessly 
                            to develop a robust and intuitive platform that combines cutting-edge technology with 
                            engaging content, fostering a dynamic and interactive learning experience.
                        </p>
                    </div>
                    <div className='lg:w-[38%]'>
                        <h1 className='text-4xl mb-8'>
                            <HighlightText text={"Our Mission"}/> 
                        </h1>
                        <p className=' text-richblack-300 text-base font-medium'>
                        Our mission goes beyond just delivering courses online. We wanted to create a vibrant 
                        community of learners, where individuals can connect, collaborate, and learn from one 
                        another. We believe that knowledge thrives in an environment of sharing and dialogue, 
                        and we foster this spirit of collaboration through forums, live sessions, and networking 
                        opportunities.
                        </p>
                    </div>
                </div>

            </div>
        </section>

        {/* section 4 */}
        <section className=" bg-richblack-700">
            <StatsComponent/>
        </section>

        {/* section 5 */}
        <section className='w-11/12 mx-auto pt-20 mb-20'>
            <LearningGrid/>
            <ContactFormSection/>
        </section>

         {/* Reviews */}
         <section className='w-11/12 mx-auto text-white mt-32 font-semibold '>
            <h1 className='text-center text-4xl font-semibold text-richblack-50'>Reviews from other learners</h1>
            <ReviewSlider/>
        </section>

        <Footer/>

    </div>
  )
}

export default About