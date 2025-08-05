import { useState } from 'react'
import Navbar from './components/Navbar'
import toast, { Toaster } from 'react-hot-toast';

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'



function App() {

  return (
  <>
    <div className="bg-[#171d32]">
      {/* <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes > */}
      
      <Navbar/> 
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>      
    </div>
    <Toaster className='text-4xl' />
    </>
  )
}

export default App
