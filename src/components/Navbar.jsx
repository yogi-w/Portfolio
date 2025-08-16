import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';

import './navbar.css'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
   
  };

    useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";   // stop background scroll
    } else {
      document.body.style.overflow = "auto";     // allow scroll again
    }
  }, [isOpen]);

 

 

  return (
<div >
    <nav className="fixed inset-0 z-50 top-0 left-0 w-full bg-[#0f172a] px-4 flex justify-between md:px-15 md:items-center py-4 gap-20 h-15 ">
      <span className='text-2xl font-bold tracking-wide my-auto'>Portfolio</span>

      {/* Desktop Menu */}
                {/* <NavLink to="/home" className={({isActive})=>`${isActive ? "text-orange-700" : "text-white"}`}>Home</NavLink> */}

      <div className='mx-24 py-2 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 hidden md:flex gap-13'>
<Link
  to="home"
  spy={true}
  smooth={true}
  duration={500}
  offset={-70}
  activeClass="active"
  className="text-white text-xl cursor-pointer"
>
  Home
</Link>          
<Link
  to="about"
  spy={true}
  smooth={true}
  duration={500}
  offset={-70}
  activeClass="active"
  className="text-white text-xl cursor-pointer"
>
  About
</Link>           
<Link
  to="skills"
  spy={true}
  smooth={true}
  duration={500}
  offset={-70}
  activeClass="active"
  className="text-white text-xl cursor-pointer"
>
  Skills
</Link> 
<Link
  to="projects"
  spy={true}
  smooth={true}
  duration={500}
  offset={-70}
  activeClass="active"
  className="text-white text-xl cursor-pointer"
>
  Projects
</Link> 
<Link
  to="contact"
  spy={true}
  smooth={true}
  duration={500}
  offset={-70}
  activeClass="active"
  className="text-white text-xl cursor-pointer"
>
  Contact
</Link>        
      </div>

      {/* Hamburger icon */}
      <div className="md:hidden text-3xl cursor-pointer text-white z-50 my-auto" onClick={toggleMenu}>
        {isOpen ? '✕' : '☰'}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
      <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center gap-6 text-white text-4xl md:hidden">
<Link
  to="home"
  className='cursor-pointer'
  smooth={true}
  duration={500}
  offset={-70}
  onClick={() => setIsOpen(false)}
>
  Home
</Link>
<Link
  to="about"
  className='cursor-pointer'
  smooth={true}
  duration={500}
  offset={-70}
  onClick={() => setIsOpen(false)}
>
  About
</Link>
<Link
  to="skills"
  className='cursor-pointer'
  smooth={true}
  duration={500}
  offset={-70}
  onClick={() => setIsOpen(false)}
>
  Skills
</Link>
        <Link
  to="projects"
  className='cursor-pointer'
  smooth={true}
  duration={500}
  offset={-70}
  onClick={() => setIsOpen(false)}
>
  Projects
</Link>

<Link
  to="contact"
  className='cursor-pointer'
  
  smooth={true}
  duration={500}
  offset={-70}
  onClick={() => setIsOpen(false)}
>
  Contact
</Link>
      </div>
)}



    </nav>
    <hr className='text-blue-400' />
</div>
    
  );
};

export default Navbar;