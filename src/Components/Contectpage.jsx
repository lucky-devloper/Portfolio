import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import tag from '../assets/tag.png'

function Contectpage() {
    return (
        <div id='contact' className='w-[100%] h-[100%] px-5 lg:px-0 lg:flex lg:flex-col lg:items-center'>
            <div className='w-[100%] h-[140px] relative flex items-center lg:justify-center '>
                <h1 className="text-4xl lg:text-6xl font-bold z-20 relative">Get in touch</h1>
                <img src={tag} alt="" className="w-[110px] lg:w-[185px] absolute top-16 left-36 lg:top-14 lg:left-[53%] z-0" />
            </div>
            <div className='w-[100%] lg:w-[80%] h-fit lg:flex lg:items-start lg:gap-10'>
                <div className='w-[100%] lg:w-[40%] flex flex-col gap-4 lg:gap-8'>
                    <h1 className='services-format text-3xl lg:text-5xl font-semibold'>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <span className='flex items-center gap-2'>
                        <MdOutlineEmail fontSize='18px' />
                        <p>pritamsharmassm701@gmail.com</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <PiPhoneCallFill fontSize='18px' />
                        <p>+706-1771-656</p>
                    </span>
                    <span className='flex items-center gap-2'>
                        <FaLocationDot fontSize='18px' />
                        <p>bihar, India</p>
                    </span>
                </div>
                <form action='https://formspree.io/f/mwpklbww' method='POST' className='w-[100%] lg:w-[60%] flex flex-col gap-2 mt-4 lg:mt-0 lg:px-3'>
                    <label htmlFor="" className='text-[13px] lg:text-[18px] text-gray-300 font-semibold'>Your Name</label>
                    <input type="text" name='name' placeholder='Enter your name' className='w-[90%] lg:w-[100%] h-[50px] bg-gray-700 px-2 rounded-md outline-none' />
                    <label htmlFor="" className='text-[13px] lg:text-[18px] text-gray-300 font-semibold'>Your Email</label>
                    <input type="email" name='email' placeholder='Enter your email' className='w-[90%] lg:w-[100%] h-[50px] bg-gray-700 px-2 rounded-md outline-none' />
                    <label htmlFor="" className='text-[13px] lg:text-[18px] text-gray-300 font-semibold'>Write your message here </label>
                    <textarea name='message' placeholder='Enter your message' cols="30" rows="7" className='bg-gray-700 px-2 rounded-md outline-none'></textarea>
                    <button type='submit' className='mt-4 h-[55px] w-[160px] rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-orange-400'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contectpage