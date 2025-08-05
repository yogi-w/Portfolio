import React from 'react'
import { BsFiletypePdf } from "react-icons/bs";

const About = () => {
  return (
<div name='about'>
    <div className='m-w-full m-auto px-6 md:px-50 mt-12 md:my-15'>
       <h1 className='text-3xl md:text-5xl font-bold text-center my-3 md:pb-2'>About <span className='text-blue-500'>Me</span></h1>
       <br />
       <p className='text-xl text-gray-400 md:text-2xl font-bold pb-4'>Front-end developer!</p>
       <p className='text-[18px] md:text-2xl text-justify'>
        Hi! I'm a passionate front-end developer with a growing love for building
    modern and responsive web applications. I enjoy turning ideas into code and
    crafting user experiences that are clean and functional. Currently focused on learning JavaScript, React, and Tailwind CSS, I'm
    always excited to explore new tools and improve my skills one project at a
    time.</p>
    <p className='pt-4 pb-10 text-[18px] md:text-2xl text-justify'> When I'm not coding, you’ll find me learning something new, debugging for
    hours with joy, or sketching out new UI ideas.
    </p>  
    </div>
    
    <p className='text-gray-300 font-semibold text-center my-3  text-lg md:text-xl'>Feel free to view</p>
    <div className='flex justify-center mb-15'>
      
      <button className='cursor-pointer bg-blue-600 text-2xl flex justify-center items-center gap-x-2 md:text-3xl py-3 md:py-4 px-5 rounded-2xl'>
        <BsFiletypePdf />
        <a href="public/yogi_cv.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </button>
      <a href=""></a>
    </div>
    <hr className='text-blue-400' />

</div>
  )
}

export default About