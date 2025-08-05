import React from 'react'
import me from '../assets/me.jpg'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";import { FaReact } from "react-icons/fa6";
import { ReactTyped } from "react-typed";


const Home = () => {
  return (
    <div>
    <div name='home' className='m-w-full m-auto px-6 md:px-30 my-20 pt-20 '>

        <div className='flex flex-col md:flex-row md:justify-center md:items-center space-x-0 '> 
            <div className='md:w-1/2 md:mt-15 mt-10 space-y-2 order-2 md:order-1 '>
                <span className='text-xl '>Welcome In My Feed</span>
                <div className='flex space-x-2 text-2xl md:text-4xl mt-2 md:mt-4'>
                    <h1 >Hello, I'm a </h1>
                    {/* <span className='text-red-700 font-bold'>Developer</span> */}
                    <ReactTyped
                    className='text-blue-400 font-bold'
                    strings={["Developer"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                    />
                </div>
                <br />
                
                <p className='text-lg md:text-xl text-justify'> I'm a front-end web developer with a passion for creating clean, responsive, and user-friendly websites. My journey started with curiosity and turned into a strong desire to build digital experiences that are both functional and visually appealing.</p>
                <br />

                    {/* icons */}
                    <div className='flex flex-col items-center md:items-start'>
                        <h1 className='font-semibold md:text-2xl'>Currenlty working on
                            
                        </h1>
                        <ul className='flex space-x-2 py-4'>
                            <li><FaHtml5 className='text-2xl cursor-pointer md:text-3xl hover:scale-120 duration-200' /></li>
                            <li> <FaCss3Alt className='text-2xl cursor-pointer md:text-3xl hover:scale-120 duration-200' /></li>
                            <li><IoLogoJavascript  className='text-2xl cursor-pointer md:text-3xl hover:scale-120 duration-200' /></li>
                            <li><FaReact className='text-2xl cursor-pointer md:text-3xl hover:scale-120 duration-200' /></li>
                        </ul>
                      
                       
                        
                        




                    </div>
            </div>


            <div className='md:w-1/2 md:ml-20 md:mt-8 mt-5 order-1 grid place-items-center'>
                <img src={me}
                loading="lazy"
                style={{
                boxShadow: '0 0 30px rgba(59, 130, 246, 1)' // Tailwind blue-500
                }}
                 className='border-4 border-blue-400 shadow-blue-500/100 shadow-xl object-cover object-top rounded-full w-[300px] h-[300px] md:w-[450px] md:h-[450px]' alt="" />
            </div>
        </div>
       
    </div>

        <hr className='text-blue-400'/>
    </div>
  )
}

export default Home