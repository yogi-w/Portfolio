import React from 'react'

import ContactApp from '../assets/ContactApp.png';
import RecipeApp from '../assets/RecipeApp.png';
import WeatherApp from '../assets/WeatherApp.png';
import { FaCode } from "react-icons/fa";

const Projects = () => {
  return (
<div name='projects' className='m-w-full'>
    <div className='m-w-full m-auto px-6 md:px-30 md:my-20 my-15'>
        
            <h1 className='text-3xl md:text-5xl font-bold text-center'>Projects</h1>

    <div className='my-10 md:my-15 grid w-full gap-x-45 lg:gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 mx-auto place-items-center'>

{/* // Project 1 */}

                <div className=' hover:shadow-blue-500/100 shadow-xl border-1 border-blue-500 hover:scale-105 duration-200 rounded-xl overflow-hidden sm:w-[350px] lg:w-[400px]'>
                    <div>
                        <img className='object-top w-full h-[200px] ' loading='lazy' src={RecipeApp} alt="image" />
                    </div>
                <div className='px-2 my-5 py-3'>
                    <h1 className='md:text-2xl font-bold tracking-wide'>Recipe App</h1>
                    <p className='md:text-xl my-2 md:my-5'>Built with JavaScript, this app fetches and displays recipes using a public API.</p>
                    
                        <div className='flex gap-x-5'>
                        
                                <a href="https://yogi-w.github.io/Recipe-App/" target="_blank" rel="noopener noreferrer">
                                    
                                    <button className='cursor-pointer bg-blue-500 text-lg md:text-xl px-5 md:px-5 py-2 my-2 rounded-sm font-semibold'>Demo</button>
                                 </a>

                      
                                <a href="https://github.com/yogi-w/Recipe-App" target="_blank" rel="noopener noreferrer">
                                             
                                            <button className='cursor-pointer bg-blue-500 text-lg md:text-xl px-5 md:px-5 py-2 my-2 rounded-sm font-semibold flex items-center gap-x-1.5'>
                                                <FaCode />
                                                Code
                                            </button>
                                </a>
                                       
                                        
                        </div>
                </div>     

            
                </div>

                


{/* Project 2 */} 

                <div className=' hover:shadow-blue-500/100 shadow-xl border-1 border-blue-500 hover:scale-105 duration-200 rounded-xl overflow-hidden sm:w-[350px] lg:w-[400px]'>
                    <div>
                        <img className='object-cover w-full h-[200px] ' loading='lazy' src={WeatherApp} alt="image" />
                    </div>
                <div className='px-2 my-5 py-3'>
                    <h1 className='md:text-2xl font-bold tracking-wide'>Weather App</h1>
                    <p className='md:text-xl my-2 md:my-5'>Get current weather updates by city name using OpenWeatherMap API.</p>
                    
                        <div className='flex gap-x-5'>
                        
                                <a href="https://yogi-w.github.io/Weather-App/" target="_blank" rel="noopener noreferrer">
                                    
                                    <button className='cursor-pointer bg-blue-500 text-lg md:text-xl px-5 md:px-5 py-2 my-2 rounded-sm font-semibold'>Demo</button>
                                 </a>

                      
                                <a href="https://github.com/yogi-w/Weather-App" target="_blank" rel="noopener noreferrer">
                                             
                                            <button className='cursor-pointer bg-blue-500 text-lg md:text-xl px-5 md:px-5 py-2 my-2 rounded-sm font-semibold flex items-center gap-x-1.5'>
                                                <FaCode />
                                                Code
                                            </button>
                                </a>
                                       
                                        
                        </div>
                </div>     

            
                </div>



{/* Project 3 */}
                                
                <div className=' hover:shadow-blue-500/100 shadow-xl border-1 border-blue-500 hover:scale-105 duration-200 rounded-xl overflow-hidden sm:w-[350px] lg:w-[400px]'>
                    <div>
                        <img className='object-top w-full h-[200px] ' loading='lazy' src={ContactApp} alt="image" />
                    </div>
                <div className='px-2 my-5 py-3'>
                    <h1 className='md:text-2xl font-bold tracking-wide'>Contact App</h1>
                    <p className=' md:text-xl my-2 md:my-5'>A React (Vite) app to add, edit, delete and search contacts with Context API, Tailwind CSS and local storage for data persistence.</p>
                    
                        <div className='flex gap-x-5'>
                        
                                <a href="https://yogi-w.github.io/Contact-App/" target="_blank" rel="noopener noreferrer">
                                    
                                    <button className='cursor-pointer bg-blue-500 text-lg md:text-xl px-5 md:px-5 py-2 my-2 rounded-sm font-semibold'>Demo</button>
                                 </a>

                      
                                <a href="https://github.com/yogi-w/Contact-App" target="_blank" rel="noopener noreferrer">
                                             
                                            <button className='cursor-pointer bg-blue-500 text-lg md:text-xl px-5 md:px-5 py-2 my-2 rounded-sm font-semibold flex items-center gap-x-1.5'>
                                                <FaCode />
                                                Code
                                            </button>
                                </a>
                                       
                                        
                        </div>
                </div>     

            
                </div>

                






{/* Add new projects */}


    </div>
    
    </div>
    <hr className='text-blue-400' />
</div>
  )
}

export default Projects