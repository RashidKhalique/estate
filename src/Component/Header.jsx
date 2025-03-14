import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden cursor-pointer ' style={{backgroundImage:"url('/header_img.png')"}} id='Header'>
        <Navbar/>
        <motion.div 
        initial={{opacity:0,y:100}} 
        transition={{duration:1.5}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='text-white container text-center  mx-auto  px-6 py-4 md:px-20 lg:px-32   '>
            <h2 className=' text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl  font-semibold pt-30 md:pt-20 hover:animate-pulse'>Explore  Home that Fit your Dream's</h2>
            <div className='space-x-6 mt-16 mb-12'>
           <a href='#Project' className='border border-white px-6 md:px-8 py-3 rounded'>Project</a>
           <a href='#Contact' className='bg-blue-600 px-6 md:px-8 py-3 rounded'>Contact us</a>
          
          </div>
        </motion.div>
    </div>
  )
}

export default Header
