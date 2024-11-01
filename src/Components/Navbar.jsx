import React, { useState } from 'react'
import { TbMenuDeep } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'

function Navbar() {
    const [togglenavbar, settogglenavbar] = useState(false)
    return (
        <div className='w-[100%] h-[50px]'>
            <div className='nav-tab w-[100%] h-[60px] flex justify-evenly items-center p-2'>
                <img src={logo} alt="" className='w-[150px]' />
                <div className='flex justify-center gap-14 text-[18px]'>
                    <Link to='home' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</Link>
                    <Link to='about' smooth={true} duration={500} style={{ cursor: 'pointer' }}>About Me</Link>
                    <Link to='service' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Services</Link>
                    <Link to='portfolio' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Portfolio</Link>
                    <Link to='contact' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Contact</Link>
                </div>
                <button className='px-3 h-[100%] rounded-full bg-gradient-to-r from-pink-400 via-red-500 to-orange-400'>Connect With Me</button>
            </div>
            {/* small size navbar */}
            <div className='w-[100%] h-[100%] lg:hidden'>
                <div className='w-[100%] h-[100%] flex justify-between items-center bg-white bg-opacity-[0.3] px-2'>
                    <img src="logo.png" alt="" className='w-[110px]' />
                    <TbMenuDeep fontSize='30px' onClick={() => settogglenavbar(!togglenavbar)} />
                </div>
                <div className={`w-[50%] h-[100%] bg-white fixed top-0 right-0 p-1 transform transition-transform duration-300 ease-in-out ${togglenavbar ? 'translate-x-100' : 'translate-x-full'}`}>
                    <RxCross2 color='black' fontSize='25px' className=' float-right' onClick={() => settogglenavbar(!togglenavbar)} />
                    <div className=' text-black mt-7 flex flex-col gap-10 items-center font-semibold'>
                        <Link to='home' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Home</Link>
                        <Link to='about' smooth={true} duration={500} style={{ cursor: 'pointer' }}>About Me</Link>
                        <Link to='service' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Services</Link>
                        <Link to='portfolio' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Portfolio</Link>
                        <Link to='contact' smooth={true} duration={500} style={{ cursor: 'pointer' }}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar