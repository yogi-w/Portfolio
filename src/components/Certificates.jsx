import React from 'react'

import Oracle from '../assets/Oracle_OCI.png';
import RecipeApp from '../assets/RecipeApp.png';


const Certificates = () => {
  return (
<div name='projects' className='m-w-full'>
    <div className='m-w-full m-auto px-6 md:px-30 md:my-20 my-15'>
        
            <h1 className='text-3xl md:text-5xl font-bold text-center'>Certificates</h1>

<div className="grid grid-cols-1 w-full place-items-center my-10 md:my-15 ">
{/* // certificate 1 */}

            <div className=' hover:shadow-blue-500/100 shadow-xl border-1 border-blue-500 hover:scale-105 duration-200 rounded-xl overflow-hidden'>
                    <div className=''>
                        {/* <img className='object-cover w-full h-[200px] ' loading='lazy' src={Oracle} alt="image" /> */}
                    <img className=' w-full h-[300px] ' loading='lazy' src={Oracle} alt="image" />
                    
                    </div>
                <div className='px-5 my-5 py-3 gap-y-2 flex justify-center flex-col items-center'>
                    <h1 className='md:text-2xl font-bold tracking-wide'>Oracle Cerified Foundation Associate</h1>
                    <p className='text-xl text-blue-400'> <strong>sept, 2025</strong></p>
                </div>     

            
            </div>



{/* Add new cerificate */}


    </div>
    
    </div>
    <hr className='text-blue-400' />
</div>
  )
}

export default Certificates