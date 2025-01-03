import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import K70 from "../../public/k70.png";
import travelingyak from "../../public/travelingyak.png";
import shivtrading from "../../public/shivtrading.png";
import { AnimatedProjects } from './AnimateProjects';

const Projects = () => {
  return (
    <div className="lg:mx-40 my-20 px-8" id="project">
    <h1 className="py-4 md:pb-14  text-4xl tracking-wider font-bold bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text text-center ">Projects</h1>
    <p className="pb-8 text-center text-xl tracking-wide">Some of the projects, I have recently worked on:</p>
   <AnimatedProjects/>
   </div>
  )
}

export default Projects
