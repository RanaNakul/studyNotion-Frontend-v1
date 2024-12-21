import React from 'react'
import IconBtn from './IconBtn'

const ConfirmationModal = ({modalData}) => {
  return (
    // <div className='fixed inset-0 flex items-center justify-center !mt-0 z-[1000] text-richblack-5 overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'
    //  onClick={modalData?.btn2Handler}>
    //     <div className="flex flex-col gap-4 bg-richblack-800 px-6 py-6 border z-[1011] border-richblack-300 rounded-lg">
    //         <p className='text-2xl font-semibold'>
    //             {modalData.text1}
    //         </p>
    //         <p className='text-base font-normal text-richblack-200'>
    //             {modalData.text2}
    //         </p>
    //         <div className='flex gap-4'>
    //             <IconBtn 
    //                 onclick={modalData?.btn1Handler}
    //                 text={modalData?.btn1Text}
    //             />
    //             <button onClick={modalData?.btn2Handler}
    //                 className='px-5 py-2 bg-richblack-200 rounded-md text-richblack-900 font-semibold'
    //             >
    //                 {modalData?.btn2Text}
    //             </button>
                
    //         </div>
    //     </div>
    // </div>

    <div className=' fixed z-[1000] inset-0 flex flex-row items-center justify-center'>

        <div  className='fixed inset-0 !mt-0 z-[1001] overflow-auto bg-white bg-opacity-10 backdrop-blur-sm'
        onClick={modalData?.btn2Handler} ></div>

        <div className="  flex flex-col gap-4 bg-richblack-800 px-6 py-6 border z-[1002] border-richblack-300 rounded-lg text-richblack-5">
            <p className='text-2xl font-semibold'>
                {modalData.text1}
            </p>
            <p className='text-base font-normal text-richblack-200'>
                {modalData.text2}
            </p>
            <div className='flex gap-4'>
                <IconBtn 
                    onclick={modalData?.btn1Handler}
                    text={modalData?.btn1Text}
                />
                <button onClick={modalData?.btn2Handler}
                    className='px-5 py-2 bg-richblack-200 rounded-md text-richblack-900 font-semibold'
                >
                    {modalData?.btn2Text}
                </button>
                
            </div>
        </div>

    </div>
  )
}

export default ConfirmationModal