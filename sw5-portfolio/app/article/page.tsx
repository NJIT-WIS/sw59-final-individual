import Image from 'next/image'
import React from 'react'

export default function Article() {
    return (
        <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow card rounded-box place-items-center w-1/2">
                <div className='text-[#5A1EBC] text-6xl mt-4 mb-3'>
                    <p id='article_test_key' className=' font-bold'>Know More</p>
                    <p className=' font-bold'>About <span className='text-[#E69D0F]'>me!</span></p>
                </div>

                <div className='card w-2/5 h-auto mt-2' style={{ backgroundColor: '#d0c5ff' }}>
                    <div className='m-10 text-center'>
                        <span className='text-[#5A1EBC] font-bold'>SUMMARY</span>
                        <p className=' text-left mt-3 text-[#1F5DFC]'>2+ years of work experience in database management, statistical analysis, prediction analysis, and risk control</p>
                        <p className=' text-left mt-5 text-[#1F5DFC]'>1+ years of marketing analysis experience in cluster analysis, price elasticity testing, and demand prediction.</p>
        
                    </div>
                </div>
            </div>
            <div className=' flex w-1/2 mt-12 '>
                <Image src={'/nextjs.svg'} alt='self defined, hobbies personality image' width={600} height={800} />
            </div>
        </div>
    )
}
