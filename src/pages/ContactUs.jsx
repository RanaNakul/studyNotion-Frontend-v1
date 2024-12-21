import React from 'react'
import ContactUcForm from "../components/core/ContactPage/ContactUsForm"
import ContactDetails from '../components/core/ContactPage/ContactDetails'
import Footer from "../components/common/Footer"
import ReviewSlider from '../components/common/ReviewSlider'

const ContactUs = () => {
  return (
    <div className='text-richblack-5'>

        {/* section 1 */}
        <section className='flex flex-row gap-10 w-11/12 justify-between mx-auto mt-20'>
            <div className='lg:w-[39%]'>
                <ContactDetails/>
            </div>
            <div className='w-[60%] border-[1px] p-14 rounded-2xl border-richblack-700'>
                <h1 className='text-4xl font-semibold'>
                    Got a Idea? We've got the skills. Let's team up
                </h1>
                <p className='text-base font-medium text-richblack-300 mt-4'>
                    Tell us more about yourself and what you're got in mind.
                </p>
                <ContactUcForm/>
            </div>
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

export default ContactUs