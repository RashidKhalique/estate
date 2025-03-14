import React from 'react'
import assets, { testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity:0,x:100}} 
    transition={{duration:1}}
    whileInView={{opacity:1,x:0}}
    viewport={{once:true}}
     className='container mmx-auto text-center py-10 lg:px-32 w-full overflow-hidden ' id='Testimonial'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '>Customer 
        <span className='underline underline-offset-4 under text-center font-light decoration-0'> Testimonails</span></h1>
      <p className='text-center text-gray-500 max-w-80 mb-12 mx-auto'>Real Stories from Those who found Home with us</p>
          
          
          <div className='flex flex-wrap justify-center gap-8'>
            {testimonialsData.map((Testimonial , index)=>(
                <div key={index} className='max-w-[340px]  shadow-lg rounded px-8 py-12 text-center  flex-1'>
                  <img className='w-20 h-20 rounded-full mb-4 mx-auto ' src={Testimonial.image} alt={Testimonial.alt} />
                    <h2 className='text-lg text-gray-700 font-medium '>{Testimonial.name}</h2>
                    <p className='text-gray-500 mb-4 text-sm'>{Testimonial.title}</p>
                    <div className='flex justify-center gap-1 text-red-500 mb-4'>
                        {Array.from({length:Testimonial.rating},(item ,index)=>(
                            <img key={index} src={assets.star_icon} alt="" />
                        )
                    )}
                    </div>
                    <p className='text-gray-600'>{Testimonial.text}</p>
                </div>
            ))}
          </div>
    </motion.div>
  )
}

export default Testimonials
