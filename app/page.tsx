import Image from "next/image";
import pp from "../public/pp.png";
import GPTNepal from "../public/GPTNepal.png";
import shivtrading from "../public/shivtrading.png";
import heart from "../public/heart.png";
import Link from "next/link";
import Navbar from "./components/Navbar";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

export default function Home() {
  return (
   <>
   <Navbar contact="contact" project="project"/>
   <main>
     <div className="flex flex-col md:flex md:flex-row lg:mx-40 my-4">
      <div className="w-auto md:w-[70%] px-7 md:p-8">
      <Image src={pp} alt="pp" className="md:hidden m-4 ml-16 shadow-lg shadow-gray-500 rounded-full object-cover h-[200px] w-[200px]"/>
      <RoughNotationGroup show={true}>
      <h1 className="text-3xl font-bold pb-9 tracking-wide">Hello! I'm Neha, a  <RoughNotation type="highlight"  color="#E6E6FA"> developer  </RoughNotation>  from Nepal.</h1>
     <p className="pb-2 text-start">I love building tools that are <RoughNotation type="highlight" color="#FFB6C1"> <span className="block lg:inline">user-friendly, simple</span> </RoughNotation>  and <RoughNotation type="highlight" color="#e2d45a"> delightful. </RoughNotation></p>
     <p className="pb-2 text-start">I was a student at <RoughNotation type="highlight" color="#E6E6FA"> <span className="block lg:inline"> Purwanchal Campus, Dharan </span> </RoughNotation> 
      where I completed my four years Computer Engineering Course. My active participation
       in different software development workshops and competitions during my college time 
       started my interest in <RoughNotation type="highlight" color="#FFB6C1"><span className="block lg:inline"> Frontend Development.</span>  </RoughNotation></p>
       <p className="pb-2 text-start">
        Through these experiences, I had the opportunity to work as a Intern in SEDS Nepal where my job 
        was to <RoughNotation type="highlight" color="#e2d45a"> collaborate </RoughNotation> with other <RoughNotation type="highlight" color="#FFB6C1"> team members </RoughNotation> to make database 
        management Software. I also got the opportunity to work as a freelancer in different website  projects.
       </p>
       <p className="pb-2">I'm currently looking for a new role as a Frontend Developer. <RoughNotation type="circle" color="red"> Hire me? </RoughNotation></p>
       </RoughNotationGroup>
       <div className="flex">
        <button className="bg-black text-white text-sm hover:bg-white hover:text-black border rounded-sm px-8 py-2 m-4"> <Link href="https://www.linkedin.com/in/neha-shah-a528801b3/" target="blank">View Linkedin</Link> </button>
        <button className=" border rounded-sm px-8 text-sm py-2 m-4 hover:bg-black hover:text-white"><Link href="https://github.com/nehashah4590" target="blank">View Github</Link> </button>
       </div>
      </div>
      <div className="hidden md:flex justify-center py-8 pb-12 md:pr-2 lg:pr-0">
          <Image src={pp} alt="pp" className=" shadow-lg shadow-gray-500 rounded-lg object-cover h-[350px] w-[274px]"/>
      </div>
     </div>

     {/* projects */}
     <div className="lg:mx-40 my-20 px-8" id="project">
      <h1 className="pb-2 text-4xl font-bold">Projects</h1>
      <p className="pb-8">Some of the side projects, I have currently worked on:</p>
      <div className="flex flex-col md:flex md:flex-row gap-10">
      <div className="lg:h-[60vh] lg:w-[35vw] p-2">
        <Image src={GPTNepal} alt="project" className=" shadow-lg shadow-gray-500 rounded-lg object-cover"/>
        <h2 className="p-2 font-bold text-2xl mt-4">GPT Nepal</h2> 
        <p className="px-2 pb-2">It is a web based QA App for tourist visiting Nepal based on transformer model.</p>
        <Link href="https://qa-app-ten.vercel.app/" target="blank"><p className="font-semibold text-md px-2 hover:text-gray-500">View Project</p></Link>
      </div>
      <div className=" lg:h-[60vh] lg:w-[35vw] p-2">
        <Image src={shivtrading} alt="project" className=" shadow-lg shadow-gray-500 rounded-lg object-cover"/>
        <h2 className="p-2 font-bold text-2xl mt-4">Shiv trading</h2>  
        <p className="px-2 pb-2">It is a tiles and marble website where users can search there favorite tiles and marbles design according to sizes and areas. </p>
        <Link href="https://shiv-trading.com" target="blank"><p className="font-semibold text-md px-2 hover:text-gray-500">View Project</p></Link>       
      </div>
      </div>
     </div>

        {/* contact */}
        <div className="lg:mx-40 my-20 m-2 " id="contact">
      <h1 className="pb-2 text-4xl font-bold">Get in touch</h1>
      <p className="pb-28">Do you have a job opportunity or idea you'd like to discuss? Feel free to reach me at<span className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold"> er.nehashah822@gmail.com.</span> You
      can also find me on <Link href="https://twitter.com/Ne_ha_Sh_ah" target="blank" className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">Twitter</Link>, 
       <Link href="https://github.com/nehashah4590" target="blank" className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold"> Github</Link> and 
       <Link href="https://www.linkedin.com/in/neha-shah-a528801b3/" target="blank" className="bg-gradient-to-r from-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold"> Linkedin.</Link></p>
      <hr/>
      <p className="py-8 flex pb-32">Built with TypeScript, Tailwind and Next.js <Image src={heart} alt="heart" className="h-[22px] w-[22px] mt-[1px] mx-1"/></p>
      </div>
     
   </main>
   </>
  );
}
