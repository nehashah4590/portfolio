import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heart from "../../public/heart.png";

const Contact = () => {
  return (
    <div className="lg:mx-40 my-24 m-2 " id="contact">
    <h1 className="py-4 md:pb-14 tracking-wider text-4xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text text-center">Get in touch</h1>
    <p className="pb-28 tracking-wide text-xl">Do you have a job opportunity or idea you'd like to discuss? Feel free to reach me at 
        <Link href="mailto:er.nehashah822@gmail.com" target="blank" className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold"> er.nehashah822@gmail.com.</Link> You
    can also find me on <Link href="https://twitter.com/Ne_ha_Sh_ah" target="blank" className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">Twitter</Link>, 
     <Link href="https://github.com/nehashah4590" target="blank" className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold"> Github</Link> and 
     <Link href="https://www.linkedin.com/in/nehashah822/" target="blank" className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold"> Linkedin.</Link></p>
    <hr/>
    <p className="py-8 flex pb-32 tracking-wider text-xl">Built with Aceternity UI, TypeScript, Tailwind and Next.js <Image src={heart} alt="heart" className="h-[22px] w-[22px] mt-[1px] mx-1"/></p>
    </div>
  )
}

export default Contact

