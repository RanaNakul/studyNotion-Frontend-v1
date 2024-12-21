import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RxDropdownMenu} from "react-icons/rx";
import { MdEdit } from 'react-icons/md';
import {RiDeleteBin6Line} from "react-icons/ri";
import ConfirmationModal from '../../../../common/ConfirmationModal';
import { IoCaretDownOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import SubSectionModal from './SubSectionModal';
import { deleteSection, deleteSubSection } from '../../../../../services/operations/courseDetailsAPI';
import { setCourse } from '../../../../../slices/courseSlice';


function NestedView({handleChangeEditSectionName}) {

  const {course} = useSelector((state) => state.course);
  const {token} = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [addSubSection, setAddSubSection] = useState(null);
  const [viewSubSection, setViewSubSection] = useState(null);
  const [editSubSection, setEditSubSection] = useState(null);

  const [confirmationModal, setConfirmationModal] = useState(null); 

  const handleDeleteSection = async (sectionId) => {
      const result = await deleteSection(
                  {
                    sectionId,
                    courseId:course._id,
                  },token)
      
      console.log("Delete Section ->",result)

      if(result){
        dispatch(setCourse(result))
      }
      setConfirmationModal(null); 
  };

  const handleDeleteSubSection = async (subSectionId, sectionId) => {
      const result = await deleteSubSection(
                    {
                      sectionId,
                      subSectionId,
                      courseId:course._id,
                    },token)

      if(result){
        dispatch(setCourse(result));
      }
      setConfirmationModal(null);
      
  };

  return (
    <div>

      <div className=' rounded-lg bg-richblack-700 px-8 p-6 text-richblack-300'>
        {
          course?.courseContent?.map((section) => (
            <details key={section._id} open>
                <summary  className='flex items-center justify-between gap-x-3 border-b-[1px] border-richblack-500 py-3'>

                    <div className='flex items-center gap-x-3'>
                        <RxDropdownMenu className='text-xl'/>
                        <p className=' text-richblack-50 text-lg capitalize'>{section.sectionName}</p>
                    </div>

                    <div className='flex items-center gap-x-3 text-xl'>

                      <button onClick={() => handleChangeEditSectionName(section._id, section.sectionName)}>
                        <MdEdit/>
                      </button>

                      <button 
                          onClick={ () => setConfirmationModal({
                            text1:"Delete this Section?",
                            text2:"All the lectures in this section will be deleted",
                            btn1Text: "Delete",
                            btn2Text:"Cancel",
                            btn1Handler: () => handleDeleteSection(section._id),
                            btn2Handler: () => setConfirmationModal(null),
                          })}
                      >
                        <RiDeleteBin6Line/>
                      </button>

                      <span>|</span>

                      <IoCaretDownOutline/>

                    </div>

                </summary>

                <div className='mx-6 py-3'>
                  {
                    section?.subSection?.map((data) => (
                      <div key={data._id}  
                        className='flex items-center justify-between gap-x-3 border-b-[1px] border-richblack-500 mb-3'
                      >
                          <div className='flex items-center gap-x-3 w-full py-3 '
                            onClick={ () => setViewSubSection(data)}
                          >
                            <RxDropdownMenu className='text-xl'/>
                            <p className=' text-richblack-50 text-lg capitalize'>{data.title}</p>
                          </div>

                          <div className='flex items-center gap-x-3 text-xl'>
                            <button
                            onClick={ () => setEditSubSection({...data,sectionId:section._id})}
                            >
                              <MdEdit/>
                            </button>
                            <button
                              onClick={ () => setConfirmationModal({
                                text1:"Delete this Sub Section?",
                                text2:"Selected lectures will be deleted",
                                btn1Text: "Delete",
                                btn2Text:"Cancel",
                                btn1Handler: () => handleDeleteSubSection(data._id,section._id),
                                btn2Handler: () => setConfirmationModal(null),
                              })}
                            >
                              <RiDeleteBin6Line/>
                            </button>
                          </div>

                      </div>
                    ))
                  }

                  <button
                  onClick={() => setAddSubSection(section._id)}
                  className='flex items-center gap-x-2 text-yellow-50'
                  >
                    <FaPlus className='text-lg'/>
                    <p>Add  Lecture</p>
                  </button>
                   
                </div>



            </details>
          ))
        }
      </div>

      {
        addSubSection ? (<SubSectionModal 
            modalData={addSubSection}
            setModalData={setAddSubSection}
            add={true}
        />) 
        :viewSubSection ? (<SubSectionModal 
            modalData={viewSubSection}
            setModalData={setViewSubSection}
            view={true}
        />)
        :editSubSection ? (<SubSectionModal 
            modalData={editSubSection}
            setModalData={setEditSubSection}
            edit={true}
        />) 
        : <></>
      }

      {confirmationModal && <ConfirmationModal  modalData={confirmationModal} />}
    
    </div>
  )
}

export default NestedView