import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJs } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";


const Skills = () => {
  return (
<div name='skills' className='mb-10'>

    <div className='m-w-full m-auto px-6 md:px-30 md:my-20 my-10 '>
        <h1 className='text-3xl md:text-5xl text-center font-bold'>Skills</h1>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 md:my-20 gap-x-5 gap-y-10 place-items-center'>
            
            <div className='lg:px-7 hover:scale-105 duration-200 hover:shadow-blue-500/100 shadow-xl border-blue-400 flex flex-col gap-4 border-1 items-center w-[200px] justify-center mx-auto md:mx-0 md:w-[auto] py-9 rounded-xl'>
                <FaHtml5 className='text-cyan-700 text-8xl md:text-[11rem]' />
                <h1 className='text-2xl md:text-3xl tracking-wide'>HTML5</h1>
            </div>
            <div className='lg:px-7 hover:scale-105 duration-200 hover:shadow-blue-500/100 shadow-xl border-blue-400 flex flex-col gap-4 border-1 items-center  w-[200px] justify-center mx-auto md:mx-0 md:w-[auto] py-9 rounded-xl'>
                <IoLogoCss3 className='text-cyan-700 text-8xl md:text-[11rem]' />
                <h1 className='text-2xl md:text-3xl tracking-wide'>CSS3</h1>
            </div>
            <div className='lg:px-7 hover:scale-105 duration-200 hover:shadow-blue-500/100 shadow-xl border-blue-400 flex flex-col gap-4 border-1 items-center  w-[200px] justify-center mx-auto md:mx-0 md:w-[auto] py-9 rounded-xl'>
                <FaJs  className='text-cyan-700 text-8xl md:text-[11rem]' />
                <h1 className='text-2xl md:text-3xl tracking-wide'>JavaScript</h1>
            </div>
            <div className='lg:px-7 hover:scale-105 duration-200 hover:shadow-blue-500/100 shadow-xl border-blue-400 flex flex-col gap-4 border-1 items-center  w-[200px] justify-center mx-auto md:mx-0 md:w-[auto] py-9 rounded-xl'>
                <IoLogoReact  className='text-cyan-700 text-8xl md:text-[11rem]' />
                <h1 className='text-2xl md:text-3xl tracking-wide'>React</h1>
            </div>
            <div className='lg:px-7 hover:scale-105 duration-200 hover:shadow-blue-500/100 shadow-xl border-blue-400 flex flex-col gap-4 border-1 items-center  w-[200px] justify-center mx-auto md:mx-0 md:w-[auto] py-9 rounded-xl'>
 
                <RiTailwindCssFill   className='text-cyan-700 text-8xl md:text-[11rem]' />
                <h1 className='text-2xl md:text-3xl tracking-wide'>Tailwind Css</h1>
            </div>
            <div className='lg:px-7 hover:scale-105 duration-200 hover:shadow-blue-500/100 shadow-xl border-blue-400 flex flex-col gap-4 border-1 items-center  w-[200px] justify-center mx-auto md:mx-0 md:w-[auto] py-9 rounded-xl'>
                <FaJava   className='text-cyan-700 text-8xl md:text-[11rem]' />
                <h1 className='text-2xl md:text-3xl tracking-wide'>Java</h1>
            </div>
            {/* <div className='lg:px-7 hover:scale-105 duration-200 hover:shadow-blue-500/100 shadow-xl border-blue-400 flex flex-col gap-4 border-1 items-center  w-[200px] justify-center mx-auto md:mx-0 md:w-[auto] py-9 rounded-sm'>
             <IoLogoReact  className='text-cyan-700 text-8xl md:text-[11rem]' />
                <h1 className='text-2xl md:text-3xl tracking-wide'>C++</h1>
            </div> */}





        </div>
    </div>
        <hr className='text-blue-400'/>
    </div>
  )
}

export default Skills