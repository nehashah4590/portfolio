"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import menu from '../../public/menu.png';
import Image from 'next/image';

interface NavbarProps {
  contact: string;
  project: string;

}

const Navbar: React.FC<NavbarProps> = ({ contact, project})=>{
  const [isOpen, setIsOpen]= useState(false);

  return (
    <div className='h-[80px] p-2 flex flex-col md:flex md:flex-row  lg:mx-20 text-xl tracking-wider'>
      <div className=' h-full w-full  p-2 flex justify-between items-center'>
        <h1 className=' px-2 lg:ml-12 hover:text-gray-500'><Link href="./">NEHA SHAH</Link></h1>
        <button
          type='button'
          className='md:hidden '
          onClick={()=>{setIsOpen(!isOpen)}}> 
          <Image src={menu} alt="menu button"/>
        </button>
      </div>
     
        <div className='h-full p-2 md:mx-8 md:px-8 flex  items-center w-full justify-start md:justify-end'>
        <ul className={`   gap-10  ${isOpen? "sm:absolute sm:top-12 bg-white shadow-md md:shadow-none w-full p-2 mt-2 md:mt-0 md:p-0 z-20 md:static md:flex md:justify-end md:items-center":"hidden md:flex justify-center items-center"}`}>
          <Link href="./"><li className='hover:text-gray-400'>About</li></Link>
          <Link href={`#${project}`} ><li className='hover:text-gray-500'>Projects</li></Link>
          <Link href={`#${contact}`} ><li className='hover:text-gray-500'>Contact</li></Link>
        </ul>
      </div>
 
    </div>
  )
}

export default Navbar
