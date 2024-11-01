import React from 'react'
import profile from '../assets/profile.jpg'
import tag from '../assets/tag.png'

function Aboutpage() {
    return (
        <div id='about' className="w-[100%] h-[100%] px-4 lg:px-0 lg:flex lg:flex-col lg:items-center">
            <div className='w-[100%] h-[170px] relative flex items-center lg:justify-center'>
                <h1 className="text-4xl lg:text-6xl font-bold z-20 relative">About me</h1>
                <img src={tag} alt="" className="w-[120px] lg:w-[185px] absolute top-20 left-24 lg:top-17 lg:left-[50%] z-0" />
            </div>
            <div className='lg:w-[80%] w-[100%] lg:h-[400px] lg:flex lg:items-center lg:justify-between'>
                <img src={profile} alt="" className='w-[300px] h-[350px] object-cover rounded-lg hidden lg:block' />
                <div className='w-[100%] h-[100%] lg:p-7'>
                    <div className='w-[100%] text-[15px] lg:text-[17px] font-semibold'>
                        <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
                        <p className='mt-5'>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
                    </div>
                    <div className="w-[100%] text-white mt-6 lg:mt-10 flex flex-col gap-4">
                        <div className="flex items-center gap-1  hover:scale-105 transform transition-transform duration-300">
                            <span className="w-1/3 font-semibold">HTML & CSS</span>
                            <div className="w-2/3 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-orange-500" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 hover:scale-105 transform transition-transform duration-300">
                            <span className="w-1/3 font-semibold">JavaScript</span>
                            <div className="w-2/3 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-orange-500" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 hover:scale-105 transform transition-transform duration-300">
                            <span className="w-1/3 font-semibold">React JS</span>
                            <div className="w-2/3 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-orange-500" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 hover:scale-105 transform transition-transform duration-300">
                            <span className="w-1/3 font-semibold">Node JS</span>
                            <div className="w-2/3 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-purple-500 to-orange-500" style={{ width: '60%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[100%] lg:w-[80%] h-[120px] flex items-center gap-1 justify-between'>
                <div className=' h-[80px] w-[33%] border-r-2 border-white flex flex-col justify-center items-center font-semibold px-1'>
                    <h1 className='text-gradient text-[25px] lg:text-5xl'>6+</h1>
                    <p className='text-[12px] lg:text-[20px] text-center'>MONTH OF EXPERIENCE</p>
                </div>
                <div className=' h-[80px] w-[33%] border-r-2 border-white flex flex-col justify-center items-center font-semibold px-1'>
                    <h1 className='text-gradient text-[25px] lg:text-5xl'>10+</h1>
                    <p className='text-[12px] lg:text-[20px] text-center'>PROJECTS COMPLETED</p>
                </div>
                <div className=' h-[80px] w-[33%] flex flex-col justify-center items-center font-semibold'>
                    <h1 className='text-gradient text-[25px] lg:text-5xl'>2+</h1>
                    <p className='text-[12px] lg:text-[20px] text-center'>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>

    )
}

export default Aboutpage