import React from 'react'
import profile from '../assets/profile.jpg'
import { IoLogoHtml5 } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoSass } from "react-icons/io5";
import { Link } from 'react-scroll'

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
            <p className='text-[15px] lg:text-xl lg:w-[50%] text-center w-[70%]'>I am frontend developer from Bihar, India. And i have strong knowledge of hands-on experience building and deploying live projects</p>
            <h1 className='text-2xl font-semibold'>Technologies</h1>
            <div className='flex items-center justify-center gap-2 lg:gap-8'>
                <IoLogoHtml5 color='#dd4b24'  className='text-[30px] lg:text-[40px]'/>
                <SiCss3 color='#2862e8' className='text-[25px] lg:text-[35px]'/>
                <RiJavascriptFill color='#ecdb1c' className='text-[32px] lg:text-[44px]'/>
                <FaReact color='#00d2f7' className='text-[28px] lg:text-[38px]'/>
                <RiTailwindCssFill color='#36b6f3' className='text-[29px] lg:text-[40px]'/>
                <FaBootstrap color='#7010ee' className='text-[28px] lg:text-[40px]'/>
                <IoLogoSass color='#c86393' className='text-[30px] lg:text-[40px]'/>
            </div>
            <div className='w-[100%] h-[50px] lg:h-[60px] flex justify-center items-center gap-5'>
                <Link to='contact' smooth={true} duration={500} style={{ cursor: 'pointer' }} className='w-[130px] h-[100%] lg:w-[160px] lg:text-[15px] font-semibold text-[13px] rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-orange-400 lg:hover:border-2 lg:hover border-white text-center flex items-center justify-center'>Connect With Me</Link>
                <a href="https://amaranth-rosalyn-74.tiiny.site" className='h-[100%] w-[120px] lg:w-[150px] border-2 border-white text-[13px] lg:text-[16px] font-semibold lg:hover:border-blue-600 rounded-full flex items-center justify-center'>My resume</a>
            </div>
        </div>
    )
}

export default Homepage