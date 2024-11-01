import React from 'react'
import ServiceCard from './ServiceCard'

function ServicesPage() {
    return (
        <div id='service' className='w-[100%] h-[100%] px-4 lg:p-0 lg:flex lg:flex-col lg:items-center'>
            <div className='w-[100%] h-[140px] relative flex items-center lg:justify-center'>
                <h1 className="text-4xl lg:text-6xl font-bold z-20 relative">My Services</h1>
                <img src="tag.png" alt="" className="w-[120px] lg:w-[185px] absolute top-14 left-36 lg:top-17 lg:left-[50%] z-0" />
            </div>
            <div className='w-[100%] lg:w-[80%] h-fit lg:h-[300px] flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6'>
                <ServiceCard  cardno={"01"} title={"Web design"}/>
                <ServiceCard  cardno={"02"} title={"Graphics design"}/>
                <ServiceCard  cardno={"03"} title={"Social media"}/>
            </div>
        </div>
    )
}

export default ServicesPage