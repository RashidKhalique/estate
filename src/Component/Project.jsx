import React, { useEffect, useState } from 'react'
import assets, { projectsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Project = () => {
    const [currentstate, setcurrentstate] = useState(0)
    const [cardshow, setcardshow] = useState(1)
    useEffect(() => {
    const updatecardshow = ()=>{
        if(window.innerWidth >=1024)
        {
            setcardshow(projectsData.length)
        }
        else{
            setcardshow(1)
        }

    }
    updatecardshow();

    window.addEventListener('resize', updatecardshow)
    return ()=> window.removeEventListener('resize', updatecardshow)

    }, [])
    const nextproject = ()=>{
        setcurrentstate((prevIndex)=>(prevIndex + 1) % projectsData.length)
    }
    const Prevproject = ()=>{
        setcurrentstate((prevIndex)=> prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }
    return (
        <motion.div
        initial={{opacity:0,x:-200}} 
        transition={{duration:1}}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        className='container mx-auto px-6 py-4 pt-20 md:px-20 text-center overflow-hidden my-20 w-full lg:px-32 ' id='Project'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>Project <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
            <p className='text-gray-600 mb-8 max-w-80  text-center mx-auto'>Crafting Spaces , Building Legacies-Explore our Portfolio  </p>

            {/* slider here  */}

            <div className='flex justify-end items-center mb-8'>
                <button onClick={()=>Prevproject()} className='p-3 bg-gray-200 rounded mr-3' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="previous" />
                </button>

                <button onClick={()=>nextproject()} className='p-3 bg-gray-200 rounded mr-3' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="next" />
                </button>
            </div>

            {/* Project Slider  */}

            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out ' style={{transform : `translateX(-${(currentstate *100)/cardshow}%)`}}>
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4 '>
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-6' />
                            <div className='absolute left-0 right-0 bottom-5 flex justify-end'>
                                <div className='inline-block bg-white w-3/4 px-3 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-500'>{project.title}</h2>
                                    <p className='text-gray-500 text-sm inline-block'>{project.price} <span className='px-0.5 text-gray-600'>|</span> {project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Project
