import React from 'react'
import ServiceCard from './ServiceCard'
import tag from '../assets/tag.png'

function ServicesPage() {
    return (
        <div id='service' className='w-[100%] h-[100%] px-4 lg:p-0 lg:flex lg:flex-col lg:items-center'>
            <div className='w-[100%] h-[140px] relative flex items-center lg:justify-center'>
                <h1 className="text-4xl lg:text-6xl font-bold z-20 relative">My Skill</h1>
                <img src={tag} alt="" className="w-[120px] lg:w-[185px] absolute top-16 left-20 lg:top-17 lg:left-[52%] z-0" />
            </div>
            <div className='w-[100%] lg:w-[80%] h-fit lg:h-[350px] flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6'>
                <ServiceCard cardno={"01"} title={"Fronted Developer"} caption={"I am a frontend developer with strong expertise in HTML, CSS, and JavaScript, specializing in building responsive and visually appealing user interfaces. I have a solid background in React, allowing me to create interactive, component-driven applications, and I'm skilled in using modern CSS frameworks like Tailwind and Bootstrap to streamline styling while maintaining customizability."} />
                <ServiceCard cardno={"02"} title={"Backend Developer"} caption={"Along with my frontend skills, I have a solid foundation in backend development with Node.js, Express.js, and MongoDB, including experience using Mongoose for efficient data modeling and handling. This enables me to build full-stack applications, handle server-side logic, and create RESTful APIs that communicate seamlessly with the frontend."} />
                <ServiceCard cardno={"03"} title={"Soft Skill"} caption={"In addition to my technical expertise, I have strong communication skills in both English and Hindi, allowing me to collaborate effectively with diverse teams and convey ideas clearly. I’m comfortable discussing technical concepts, gathering requirements, and ensuring that all team members are aligned and informed. My ability to communicate."} />
            </div>
        </div>
    )
}

export default ServicesPage