import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'

const Navbar = () => {
    const [showmenu , setshowmenu] = useState(false)
    useEffect(() => {
       if(showmenu)
       {
        document.body.style.overflow = 'hidden'
       }
       else{
        document.body.style.overflow = 'auto'
       }
       return()=>{
         document.body.style.overflow = 'auto'
       }
    }, [showmenu])
    return (
        <div className='top-0 left-0 absolute w-full z-20'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={assets.logo} alt="" />
                <ul className='hidden md:flex gap-7 text-white '>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Project" className='cursor-pointer hover:text-gray-400'>Project</a>
                    <a href="#Testimonial" className='cursor-pointer hover:text-gray-400'>Testimonial</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>
                <img src={assets.menu_icon} alt="" className='md:hidden w-7' onClick={()=>setshowmenu(true)} />

            </div>
            {/* mobile menu  */}
            <div className={`md:hidden ${showmenu ? 'fixed w-full' : "hidden"}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6'>
                    <img src={assets.cross_icon} className='w-6' alt="" onClick={()=> setshowmenu(false)} />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 mx-6 text-lg font-medium justify-center' >
                    <a onClick={()=> setshowmenu(false)} href="#Header" className='px-4 py-2 inline-block rounded-full'>Home</a>
                    <a onClick={()=> setshowmenu(false)} href="#About" className='px-4 py-2 inline-block rounded-full'>About</a>
                    <a onClick={()=> setshowmenu(false)} href="#Project" className='px-4 py-2 inline-block rounded-full'>Project</a>
                    <a onClick={()=> setshowmenu(false)} href="#Testimonial" className='px-4 py-2 inline-block rounded-full'>Testinomial</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
