import React from 'react'
import { BsArrowRight } from "react-icons/bs";

function ServiceCard({ cardno, title, caption }) {
    return (
        <div className='w-[100%] min-h-[240px] lg:min-h-[250px] border-white border-2 hover:border-pink-600 hover:bg-pink-600 hover:bg-opacity-[0.2] hover:scale-105 transform transition-transform duration-300 rounded-md p-2 flex flex-col justify-center gap-3'>
            <h1 className='text-[18px] lg:text-4xl font-semibold'>{cardno}</h1>
            <h2 className='text-3xl lg:text-4xl font-semibold services-format'>{title}</h2>
            <p className='text-gray-200 text-[13px] font-semibold lg:text-[14px]'>{caption}</p>
            <div className='flex items-center gap-2 lg:text-xl'>
                <button>Read more</button>
                <BsArrowRight className='text-[20px] font-semibold lg:text-2xl' />
            </div>
        </div>
    )
}

export default ServiceCard