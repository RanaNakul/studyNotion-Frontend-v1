import React from 'react'
import ContactUsForm from '../ContactPage/ContactUsForm'

const ContactFormSection = () => {
  return (
    <div className='mt-28 mx-auto flex flex-col items-center justify-center'>
         <div className='text-center'>
            <h1 className='text-4xl font-semibold'>Get in Touch</h1>
            <p className='text-base font-medium text-richblack-300 mt-3'>We'd love to here for you, Please fill out this form.</p>
         </div>
         <ContactUsForm/>
    </div>
  )
}

export default ContactFormSection