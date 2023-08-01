import React from 'react'

export default function WorkingExperience() {
    return (
        <div className="flex flex-col border-opacity-50 justify-center text-center ">

            <div className="grid grid-cols-1 w-1/2 grid-flow-col grid-rows-3 gap-1 mx-auto">
                <div className="flex flex-col items-center justify-center text-6xl font-semibold text-[#5A1EBC]">
                    <p>My <span className='text-[#C5860C]'>Working Experience</span></p>
                </div>
                <div className="grid card rounded-box w-full mx-auto my-auto bg-[#354A63] text-white">
                    <div className='p-10'>
                        <p className=' font-semibold text-6xl'>CenterPoint Energy</p>
                        <p className=' text-2xl font-semibold mt-8'>Data Analyst  04/2022 - 04/2023</p>
                    </div>
                </div>

                <div className="grid card rounded-box w-full mx-auto mt-8 bg-[#787878] text-white">
                    <div className=' p-10'>
                        <p className=' font-semibold text-6xl'>LTS NJ Inc</p>
                        <p className=' text-2xl font-semibold mt-8'>Marketing Analyst  06/2016 - 08/2019</p>
                    </div>
                </div>
            </div>
        </div>
        )
}
