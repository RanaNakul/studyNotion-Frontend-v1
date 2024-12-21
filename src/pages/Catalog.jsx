// import React, { useEffect, useState } from 'react'
// import Footer from '../components/common/Footer'
// import { useParams } from 'react-router-dom'
// import { apiConnector } from '../services/apiConnector';
// import { categories } from '../services/apis';
// import { getCatalogPageData } from '../services/operations/pageAndComponentData';
// import { useSelector } from 'react-redux';
// import Error from './Error';
// import CourseSlider from '../components/core/Catalog/CourseSlider';
// import CourseCard from '../components/core/Catalog/CourseCard';

// const Catalog = () => {

//   const {loading} = useSelector((state) => state.profile)
//   const {catalogName} = useParams();
//   const [active, setActive] = useState(1)
//   const [catalogPageData, setCatalogPageData] = useState(null);
//   const [categoryId, setCategoryId] = useState("");

//   // Fetch all categories
//   useEffect(() => {
//       const fetchCategories = async () =>{
//         try {
//           const result = await apiConnector("GET", categories.CATEGORIES_API);
//           console.log("print result: " , result);
//           console.log("catalog Name", catalogName);
//           const category_Id =  result?.data?.data?.filter((category) => category.name.toLowerCase() === catalogName)[0]._id;
//           console.log(category_Id);
//           setCategoryId(category_Id);
    
//         } catch (error) {
//           console.error(error);
//           console.log("Could not Fetch the Category List");
//         }
//       }
//       fetchCategories();
//   }, [catalogName]);

//   useEffect(() => {
//     const getCategoryDetails = async () => {
//         if (categoryId) {
//           try{
//             const res = await getCatalogPageData(categoryId);
//             console.log("res ->",  res);
//             setCatalogPageData(res);
//           }
//           catch(error){
//             console.log(error);
//           }
//         }
//     }
//     getCategoryDetails();

//   }, [categoryId]);

//   // useEffect(() => {
//   //   ;(async () => {
//   //     try {
//   //       const res = await apiConnector("GET", categories.CATEGORIES_API)
//   //       const category_id = res?.data?.data?.filter(
//   //         (ct) => ct.name.toLowerCase() === catalogName
//   //       )[0]._id
//   //       setCategoryId(category_id)
//   //     } catch (error) {
//   //       console.log("Could not fetch Categories.", error)
//   //     }
//   //   })()
//   // }, [catalogName])
//   // useEffect(() => {
//   //   if (categoryId) {
//   //     ;(async () => {
//   //       try {
//   //         const res = await getCatalogPageData(categoryId)
//   //         setCatalogPageData(res)
//   //       } catch (error) {
//   //         console.log(error)
//   //       }
//   //     })()
//   //   }
//   // }, [categoryId])

//   if (loading || !catalogPageData) {
//     return (
//       <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
//         <div className="spinner"></div>
//       </div>
//     )
//   }

//   if (!loading && !catalogPageData.success) {
//     return <Error />
//   }

//   return (
//     <div className=' text-white'>

//         <div className=" box-content bg-richblack-800 px-4">
//           <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
//               <p className="text-sm text-richblack-300">{`Home / catalog  /`}  <span className="text-yellow-25 ">{catalogPageData?.data?.selectedCategory?.name}</span></p>
//               <p className="text-3xl text-richblack-5">{catalogPageData?.data?.selectedCategory?.name}</p> 
//               <p className="max-w-[870px] text-richblack-200">{catalogPageData?.data?.selectedCategory?.description}</p>
//           </div>
         
//         </div>

        
//         {/* secton 1 */}
//         <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//           <div className="section_heading">Courses to get you started</div>
//           <div className="my-4 flex border-b border-b-richblack-600 text-sm">
//             <p
//               className={`px-4 py-2 ${
//               active === 1
//                 ? "border-b border-b-yellow-25 text-yellow-25"
//                 : "text-richblack-50"
//               } cursor-pointer`}
//               onClick={() => setActive(1)}
//             >
//               Most Popular
//             </p>
//             <p
//               className={`px-4 py-2 ${
//                 active === 2
//                   ? "border-b border-b-yellow-25 text-yellow-25"
//                   : "text-richblack-50"
//               } cursor-pointer`}
//               onClick={() => setActive(2)}
//             >
//               New
//             </p>
//           </div>
//           <CourseSlider
//             Courses={catalogPageData?.data?.selectedCategory?.courses}
//           />
//         </div>

//         {/* section 2 */}
//         <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//           <div className="section_heading">
//             Top Courses in {catalogPageData?.data?.differentCategory?.name}
//           </div>
//           <div className="py-8">
//             <CourseSlider Courses={catalogPageData?.data?.differentCategory?.courses}/>
//           </div>
//         </div>

//         {/* section 3 */}
//         <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
//           <div className="section_heading">Frequently Bought</div>
//           <div className="py-8">
//             <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//               {catalogPageData?.data?.mostSellingCourses
//                 ?.slice(0, 4)
//                 .map((course, i) => (
//                   <CourseCard course={course} key={i} Height={"h-[400px]"} />
//                 ))}
//             </div>
//           </div>
//         </div>
        

//         <Footer/>
//     </div>
//   )
// }

// export default Catalog

import React, { useEffect, useState, lazy, Suspense } from 'react';
import Footer from '../components/common/Footer';
import { useParams } from 'react-router-dom';
import { apiConnector } from '../services/apiConnector';
import { categories } from '../services/apis';
import { getCatalogPageData } from '../services/operations/pageAndComponentData';
import { useSelector } from 'react-redux';

// Lazy load components
const Error = lazy(() => import('./Error'));
const CourseSlider = lazy(() => import('../components/core/Catalog/CourseSlider'));
const CourseCard = lazy(() => import('../components/core/Catalog/CourseCard'));

const Catalog = () => {
  const { loading } = useSelector((state) => state.profile);
  const { catalogName } = useParams();
  const [active, setActive] = useState(1);
  const [catalogPageData, setCatalogPageData] = useState(null);
  const [categoryId, setCategoryId] = useState("");

  // Fetch all categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await apiConnector("GET", categories.CATEGORIES_API);
        // console.log("print result: ", result);
        // console.log("catalog Name", catalogName);
        const category_Id = result?.data?.data?.find(
          (category) => category.name.toLowerCase() === catalogName
        )._id;
        // console.log(category_Id);
        setCategoryId(category_Id);
      } catch (error) {
        console.error(error);
        console.log("Could not Fetch the Category List");
      }
    };
    fetchCategories();
  }, [catalogName]);

  useEffect(() => {
    const getCategoryDetails = async () => {
      if (categoryId) {
        try {
          const res = await getCatalogPageData(categoryId);
          // console.log("res ->", res);
          setCatalogPageData(res);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getCategoryDetails();
  }, [categoryId]);

  if (loading || !catalogPageData) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!loading && !catalogPageData.success) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Error />
      </Suspense>
    );
  }

  return (
    <div className="text-white">
      <div className="box-content bg-richblack-800 px-4">
        <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent">
          <p className="text-sm text-richblack-300">
            {`Home / catalog /`} <span className="text-yellow-25">
              {catalogPageData?.data?.selectedCategory?.name}
            </span>
          </p>
          <p className="text-3xl text-richblack-5">
            {catalogPageData?.data?.selectedCategory?.name}
          </p>
          <p className="max-w-[870px] text-richblack-200">
            {catalogPageData?.data?.selectedCategory?.description}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="section_heading">Courses to get you started</div>
        <div className="my-4 flex border-b border-b-richblack-600 text-sm">
          <p
            className={`px-4 py-2 ${
              active === 1
                ? "border-b border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(1)}
          >
            Most Popular
          </p>
          <p
            className={`px-4 py-2 ${
              active === 2
                ? "border-b border-b-yellow-25 text-yellow-25"
                : "text-richblack-50"
            } cursor-pointer`}
            onClick={() => setActive(2)}
          >
            New
          </p>
        </div>
        <Suspense fallback={<div>Loading Courses...</div>}>
          <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses} />
        </Suspense>
      </div>

      {/* Section 2 */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="section_heading">
          Top Courses in {catalogPageData?.data?.differentCategory?.name}
        </div>
        <div className="py-8">
          <Suspense fallback={<div>Loading Courses...</div>}>
            <CourseSlider Courses={catalogPageData?.data?.differentCategory?.courses} />
          </Suspense>
        </div>
      </div>

      {/* Section 3 */}
      <div className="mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
        <div className="section_heading">Frequently Bought</div>
        <div className="py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {catalogPageData?.data?.mostSellingCourses
              ?.slice(0, 4)
              .map((course, i) => (
                <Suspense key={i} fallback={<div>Loading Course...</div>}>
                  <CourseCard course={course} Height={"h-[400px]"} />
                </Suspense>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
