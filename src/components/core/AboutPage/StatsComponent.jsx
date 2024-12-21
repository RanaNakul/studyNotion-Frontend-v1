import React from 'react'

const stats =[
    {count: "5k", label:"Active Students"},
    {count: "10+", label:"Mentors"},
    {count: "200+", label:"Courses"},
    {count: "50+", label:"Awards"},
]


const StatsComponent = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <div className='flex justify-around py-10 text-center'>
            {
                stats.map( (data , index) => (
                    <div key={index}>
                        <h1 className='text-3xl font-bold'>
                            {data.count}
                        </h1>
                        <p className=' text-richblack-500 text-base font-semibold '>
                            {data.label}
                        </p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default StatsComponent