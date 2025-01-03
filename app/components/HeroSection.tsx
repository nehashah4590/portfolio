import React from 'react'
import Image from "next/image";
import pp from "../../public/pp.jpg";

const HeroSection = () => {
    return (
        <div className="flex flex-col mx-4 lg:mx-40 my-4">
            <div>
            <h1 className="py-4 md:pb-14  text-4xl tracking-wider font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text text-center">Software Developer</h1>
                <p className='text-justify text-xl tracking-wide'>
                Hey there, my name is Neha Shah, and I work as a frontend developer. I am a seasoned and self-driven software developer. I have a strong desire to become knowledgeable about new 
                technologies and use them in my work. In addition, I pick things up quickly and can adapt to different situations. 
                </p>
            </div>
            <div className="flex justify-center py-8 pb-12 md:pr-2 lg:pr-0">
                <Image src={pp} alt="pp" className=" shadow-lg shadow-gray-500 rounded-xl object-cover h-[350px] w-[350px]" />
            </div>
        </div>
    )
}

export default HeroSection
