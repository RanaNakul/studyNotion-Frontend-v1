import React, { useEffect, useState } from 'react'
import { Link , NavLink , matchPath} from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import {NavbarLinks} from "../../data/navbar-links"
import { useSelector } from 'react-redux' 
import {AiOutlineShoppingCart} from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { categories } from '../../services/apis'
import { apiConnector } from '../../services/apiConnector'
import {SlArrowDown} from "react-icons/sl"
import { useLocation } from 'react-router-dom'
import { ACCOUNT_TYPE } from '../../utils/constants'

// const subLinks= [
//   {
//       title: "python",
//       link: "/categlog/python"
//   },
//   {
//       title: "Web Dev",
//       link: "/categlog/web-development"
//   }
// ]

const Navbar = () => {

  const {token} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.profile);
  const {totalItems} = useSelector((state) => state.cart);
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);

  const fetchSubLinks = async() => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      // console.log("print result: " , result);
      setSubLinks(result.data.data);

    } catch (error) {
      console.error(error);
      console.log("Could not Fetch the Category List");
    }
  }

  useEffect(() => { 
    fetchSubLinks();
  },[])

  // const matchRoute = (route) => {
  //   return matchPath({path:route}, location.pathname);
  // }
  const homeRoute = () => {
    return matchPath({path:"/"}, location.pathname);
  }
  const aboutRoute = () => {
    return matchPath({path:"/about"}, location.pathname);
  }
  const contactRoute = () => {
    return matchPath({path:"/contact"}, location.pathname);
  }



  return (
    <div className={`flex items-center justify-center h-14 py-10 md:py-0 border-b-[1px] border-richblack-700 
       ${homeRoute()||aboutRoute()||contactRoute() ? "bg-richblack-900" :"bg-richblack-800"} `}>
        <div className='w-11/12 max-w-maxContent flex items-center justify-between'>

            <Link to='/'>
                <img src={logo} alt='logo.png' width={160} height={42} loading='lazy' title='Study Notion Home' />
            </Link>

            <nav>
                <ul className='gap-x-6 text-richblack-25 -mr-4 hidden md:flex'>
                    {
                      NavbarLinks.map( (link , index) => (
                        <li key={index}>
                          {
                            link.title === "Catalog" ? (
                              <div className=' relative flex gap-[6px] items-center group cursor-pointer'>
                                  <p className="aria-[current=page]:text-yellow-25">
                                    {link.title}
                                  </p>
                                  <SlArrowDown className=' text-[12px] font-bold'/>

                                  <div className=' invisible opacity-0 absolute left-[50%] top-[50%]
                                   flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                    transition-all duration-200 group-hover:visible
                                   group-hover:opacity-100 w-[300px] translate-x-[-50.5%]
                                   translate-y-[27px] z-50'>

                                   <div className=' absolute left-[50%] top-0 h-6 w-6 rotate-45 rounded
                                    bg-richblack-5 translate-x-[93%] translate-y-[-40%]'></div>

                                    {
                                        subLinks?.length? (

                                            subLinks.map((subLink, index) => (
                                                <NavLink to={`/catalog/${subLink.name.toLowerCase()}`} key={index} className={`w-full 
                                                hover:bg-richblack-100 px-4 py-3 rounded-lg transition-all duration-200 z-[51]`}>
                                                    {subLink.name}
                                                </NavLink>
                                            ))

                                        ) : (<div></div>)
                                    }


                                  </div>

                              </div>
                            ) : (
                              <NavLink to={link?.path}
                                className="aria-[current=page]:text-yellow-25">
                                {/* <p className={`${ matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                  {link.title}
                                </p> */}
                                <p >
                                  {link.title}
                                </p>
                              </NavLink>
                            )
                          }
                        </li>
                      ))
                    }
                </ul>            
            </nav>

            <div className='flex gap-x-4 items-center w-[180px] justify-end'>

                    {
                      user && user?.accountType !== ACCOUNT_TYPE.INSTRUCTOR && (
                            <Link to="/dashboard/cart" className=' relative'>
                                  <AiOutlineShoppingCart className="text-2xl text-richblack-200"/>
                                  {
                                    totalItems > 0 && (
                                        <span className=' absolute -top-[4px] -right-[10px] flex items-center justify-center text-richblack-900 text-[9px] bg-yellow-25 rounded-full w-5 h-5 animate-bounce'>
                                          {totalItems > 9 ? ('9+') : (totalItems)}
                                        </span>
                                    )
                                  }
                            </Link>
                      )
                    }
                    {
                      token === null &&(
                        <Link to="/login">
                          <button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                           text-richblack-100 rounded-lg'>
                                Log in
                          </button>
                        </Link>
                      )
                    }
                    {
                      token === null &&(
                        <Link to="/signup">
                          <button className=' border border-richblack-700 bg-richblack-800 px-[12px] py-[8px]
                           text-richblack-100 rounded-lg'>
                                Sign up
                          </button>
                        </Link>
                      )
                    }
                    {
                      token !== null && <ProfileDropDown/>
                    }
            </div>

            
        </div>

    </div>
  )
}

export default Navbar
