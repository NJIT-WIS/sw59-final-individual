import React from 'react'

export default function Education() {
    return (
        <div className="flex flex-col border-opacity-50 justify-center text-center ">

            <div className="grid grid-cols-1 w-3/4 grid-flow-col grid-rows-3 gap-1 mx-auto">

                <div className="flex flex-col items-center justify-center text-6xl font-semibold text-[#5A1EBC]">
                    <p>My <span className='text-[#C5860C]'>Educational Experience</span></p>
                </div>
                <div className="grid card rounded-box w-full mx-auto my-auto bg-[#9E1E1E] text-white">
                    <div className='p-10'>
                        <p className=' font-semibold text-6xl'>New Jersey Institute of Technology</p>
                        <p className=' text-2xl font-semibold mt-8'>MSc in Computer Science 09/2021 - 08/2023</p>
                    </div>
                </div>

                <div className="grid card rounded-box w-full mx-auto mt-8 bg-[#285B17] text-white">
                    <div className=' p-10'>
                        <p className=' font-semibold text-6xl'>Northeast Agricultural University</p>
                        <p className=' text-2xl font-semibold mt-8'>BEng in Computer Science and Engineering  09/2016 - 07/2020</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
