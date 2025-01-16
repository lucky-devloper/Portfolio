import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import tag from '../assets/tag.png'
import ecommerce from '../assets/ecommerce.png'
import pasteapp from '../assets/paste.com.png'
import managementapp from '../assets/amnagementapp.png'
import expanceapp from '../assets/expance.png'
import foodApp from '../assets/Foodapp'

function Projectpage() {
    return (
        <div id='portfolio' className='w-[100%] h-[100%] px-5 py-5 lg:px-0 lg:flex lg:flex-col lg:items-center'>
            <div className='w-[100%] h-[140px] relative flex items-center lg:justify-center '>
                <h1 className="text-4xl lg:text-6xl font-bold z-20 relative">My latest work</h1>
                <img src={tag} alt="" className="w-[110px] lg:w-[185px] absolute top-14 left-48 lg:top-17 lg:left-[55%] z-0" />
            </div>
            <div className='w-[100%] lg:w-[80%] h-fit grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-5'>
                <div className='w-[100%] h-[100px] lg:h-[250px] rounded-md overflow-hidden hover:border-pink-500 hover:border-4 hover:scale-105 transform transition-transform duration-300'>
                    <a href="https://e-commerce-in-react-plum.vercel.app/"><img src={ecommerce} alt="" className='w-[100%] h-[100%] object-cover' /></a>
                </div>
                <div className='w-[100%] h-[100px] lg:h-[250px] rounded-md overflow-hidden hover:border-pink-500 hover:border-4 hover:scale-105 transform transition-transform duration-300'>
                    <a href="https://paste-editer.vercel.app/"><img src={pasteapp} alt="" className='w-[100%] h-[100%] object-cover' /></a>
                </div>
                <div className='w-[100%] h-[100px] lg:h-[250px] rounded-md overflow-hidden hover:border-pink-500 hover:border-4 hover:scale-105 transform transition-transform duration-300'>
                    <a href="https://employee-management-tau-green.vercel.app/"><img src={managementapp} alt="" className='w-[100%] h-[100%] object-cover' /></a>
                </div>
                <div className='w-[100%] h-[100px] lg:h-[250px] bg-white rounded-md overflow-hidden hover:border-pink-500 hover:border-4 hover:scale-105 transform transition-transform duration-300'>
                    <a href="https://expense-tracker-dusky-two.vercel.app/"><img src={expanceapp} alt="" className='w-[100%] h-[100%] object-cover' /></a>
                </div>
                <div className='w-[100%] h-[100px] lg:h-[250px] bg-white rounded-md overflow-hidden hover:border-pink-500 hover:border-4 hover:scale-105 transform transition-transform duration-300'>
                    <a href="https://client-side-food-app.vercel.app/"><img src={foodApp} alt="" className='w-[100%] h-[100%] object-cover' /></a>
                </div>
            </div>
            <div className='w-[100%] flex justify-center h-[50px] lg:h-[60px] mt-5'>
                <div className='flex items-center justify-center gap-2 hover:gap-4 border-2 w-[140px] lg:w-[160px] hover:w-[180px] h-[100%] transition-all rounded-full'>
                    <button>Show More</button>
                    <BsArrowRight className='text-[20px] font-semibold lg:text-2xl' />
                </div>
            </div>
        </div>
    )
}

export default Projectpage