import React from 'react'
import tag from '../assets/tag.png'

function Footer() {
    return (
        <div className='w-[100%] h-[100%] px-5 lg:px-0 lg:flex lg:flex-col lg:items-center lg:justify-center'>
            <div className='w-[100%] lg:h-[210px] lg:w-[80%] flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b-2 border-white py-4'>
                <div className='lg:w-[50%] h-[100%] flex flex-col gap-3 lg:gap-7'>
                    <div className='w-[100%] h-[80px] relative flex items-end'>
                        <h1 className="text-4xl lg:text-5xl font-bold z-20 relative">PriTam</h1>
                        <img src={tag} alt="" className="w-[100px] lg:w-[120px] absolute top-14 left-16 lg:top-14 lg:left-[14%] z-0" />
                    </div>
                    <p className='lg:w-[400px]'>I am a frontend developer from, USA with 10 years of experience in companies like Microsoft, Tesla and Apple.</p>
                </div>
                <div className='lg:w-[50%] flex lg:items-center lg:justify-end gap-5'>
                    <input type="text" placeholder='Enter your email' className='h-[40px] w-[150px] lg:w-[300px] lg:h-[55px] text-[13px] lg:text-[18px] px-3 lg:px-4 rounded-full bg-gray-700 outline-none' />
                    <button className='w-[100px] h-[40px] lg:w-[150px] lg:h-[55px] lg:text-[17px] rounded-full text-[14px] font-semibold bg-gradient-to-r from-pink-400 via-red-500 to-orange-400'>Submit</button>
                </div>
            </div>
            <div className='w-[100%] lg:w-[80%] flex flex-col-reverse lg:flex-row lg:justify-between gap-2 py-4'>
                <p className='text-[13px] lg:text-[16px] font-semibold'>© 2023 Preet Sharma. All rights reserved.</p>
                <span className='flex items-center lg:gap-5 text-[14px] lg:text-[16px] font-semibold'>
                    <p>Term of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </span>
            </div>
        </div>
    )
}

export default Footer