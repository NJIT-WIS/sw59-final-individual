import Image from 'next/image'
import React from 'react'

export default function Project() {
    return (
        <div className="flex flex-col justify-center lg:flex-row mt-10">
            <div className="grid flex-grow  max-w-lg card rounded-box place-items-center ">
                <div className='text-[#5A1EBC] text-6xl font-semibold'>
                    <p><span className='text-[#BC800C]'>Projects</span> working</p>
                    <p>through</p>
                </div>
                <div>
                    <Image src={'/123.svg'} alt='' width={'400'} height={'600'} />
                </div>
            </div>

            <div className="grid flex-grow card rounded-box place-items-center max-w-screen-sm ml-3 mt-4">
                <div className='card rounded-box bg-[#354A63] text-[#FFFFFF] text-2xl font-semibold max-w-lg pt-10 pb-10 pl-5 pr-5'>
                    <p>Center Point Energy Data Module:
                        Using Sap HANA and SQL to create data module
                        based on each user’s previous years usage of
                        utility to detect which user didn’t make the pay-
                        ment or which user has potential of stealing the
                        power during a period. </p>
                </div>
                <div className='card rounded-box mt-3 bg-[#7B5050D1] text-[#FFFFFF] text-2xl font-semibold max-w-lg pt-10 pb-10 pl-5 pr-5'>
                    <p>
                    Beijing Estate Market & Price Prospective: 
Conduct data modeling using data mining skill and python tool for analyzing Beijing’s real estate market and predicting price trends in the next 5 years which provided real estate investor with effective decision-making
                    </p>
                </div>
            </div>
        </div>
    )
}
