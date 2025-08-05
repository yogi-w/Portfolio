import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';

const Contact = () => {
    const [boxShadow, setboxShadow] = useState('')
        const [boxShadow1, setboxShadow2] = useState('')
    const handleFocus = () => {
    setboxShadow('0 0 12px rgba(59, 130, 246, 1)'); // Tailwind blue-500
  };

 const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset
  } = useForm()

 async function onSubmit(data) {
    console.log(" data submited", data);
    const userInfo = {
        name:data.name,
        email:data.email,
        message:data.message
    }
    try {
       await axios.post('https://getform.io/f/adrgodoa', userInfo)
       toast.success('Your message has been sent');
      reset();
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
        
    }
    
  }
  

  return (
<div className='' name='contact'>
    <div className='m-w-full m-auto px-6 sm:px-30 sm:my-15 my-10 '>

        <h1 className='text-3xl md:text-5xl text-center font-bold'>Get In Touch</h1>
        <p className='mt-5 text-center text-lg text-gray-400 sm:text-2xl'>Please fill out the form below to contact me</p>

    <form 
    // action="https://getform.io/f/adrgodoa"  
    // method="POST" 
    onSubmit={handleSubmit(onSubmit)}
    style={{
                boxShadow: '0 0 12px rgba(59, 130, 246, 1)' // Tailwind blue-500
                }}
    className=' backdrop-blur-md bg-white/7 border border-white/20 rounded-lg flex flex-col items-start md:px-20 md:py-10 md:mt-8 mt-5 md:p-10 p-7 justify-center md:w-[600px] lg:w-[700px] 2xl:w-[800px] mx-auto'>
        <h1 className='text-xl md:text-3xl font-bold'>Send Your Message</h1>

        <div className='w-full flex flex-col gap-y-8 mt-4'>
           
            <input 
            {...register('name',
                {
                    required: true,
                    minLength:3
                })}
            style={{ boxShadow }}
            onFocus={handleFocus}
            type="text" 
            id='name'
            name="name"
            placeholder='Your Name' 
            className='border rounded-md w-full p-3 md:text-xl ' />

            {errors.name && <p>This field is required</p>}

            <input 
            {...register('email',
                {
                    required: true,
                })}
            style={{ boxShadow }}
            onFocus={handleFocus}
            type="email" 
            id='email'
            name="email"
            placeholder='Your Email' 
            className='border rounded-md w-full p-3 md:text-xl' />

            {errors.email && <p>This field is required</p>}

            <textarea 
             {...register('message',
                {
                    required: true,
                    minLength:5
                })}

            style={{ boxShadow }}
            onFocus={handleFocus}
            className='border rounded-md 
            w-full p-3 md:text-xl' placeholder='Enter your Message' name="message" 
            rows="6" 
            id="message"></textarea>
            {errors.message && <p>This field is required</p>}
            <button 
            type="submit" disabled={isSubmitting} className='p-3 bg-blue-500 text-2xl rounded-xl cursor-pointer'>
                {isSubmitting ? "wait" : "submit"}
            </button>
        </div>
        <div className='mx-auto mt-7 flex gap-x-3 md:gap-x-5'>
           
           <a href="https://github.com/yogi-w" target="_blank" rel="noopener noreferrer">
                
                <FaGithub className='text-4xl md:text-5xl cursor-pointer' />

           </a>

           <a href="https://www.linkedin.com/in/yogi-s-787658363" target="_blank" rel="noopener noreferrer">
            
                <FaLinkedin className='text-4xl md:text-5xl cursor-pointer'  />

           </a>
           
            </div>
            
        


    </form>




    </div>
    <hr className='text-blue-400' />
</div>
  )
}

export default Contact