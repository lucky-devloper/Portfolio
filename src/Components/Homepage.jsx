import React from 'react'
import profile from '../assets/profile.jpg'

function Homepage() {
    return (
        <div id='home' className='w-[100%] h-fit flex justify-center items-center flex-col gap-5 py-2'>
            <img src={profile} alt="" className='w-[200px] h-[200px] lg:h-[250px] lg:w-[250px] object-cover rounded-full lg:mt-14' />
            <div className='w-[98%] lg:hidden'>
                <h1 className='text-4xl font-bold bg-gradient-to-r from-pink-400 via-red-500 to-orange-400 bg-clip-text text-transparent w-[100%] text-center'>I'm Pritam Sharma</h1>
                <span className='text-4xl text-center font-semibold flex flex-col items-center gap-5 mt-4'>
                    <p>fronted</p>
                    <p>developer based</p>
                    <p>in India</p>
                </span>
            </div>
            <div className='w-[60%] hidden lg:block'>
                <h1 className='text-6xl font-bold w-[100%] text-center'><span className='text-gradient'>I'm Pritam Sharma,</span> fronted developer based in India.</h1>
            </div>
            <p className='text-[15px] lg:text-xl lg:w-[50%] text-center w-[70%]'>I am a frontend developer from Bihar, India with 6 month of experience in freelancer as a fronted developer.</p>
            <div className='w-[100%] h-[50px] lg:h-[60px] flex justify-center items-center gap-5'>
                <button className='w-[130px] h-[100%] lg:w-[160px] lg:text-[15px] font-semibold text-[13px] rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-orange-400 lg:hover:border-2 lg:hover border-white'>Connect With Me</button>
                <a href="https://amaranth-rosalyn-74.tiiny.site" className='h-[100%] w-[120px] lg:w-[150px] border-2 border-white text-[13px] lg:text-[16px] font-semibold lg:hover:border-blue-600 rounded-full flex items-center justify-center'>My resume</a>
            </div>
        </div>
    )
}

export default Homepage