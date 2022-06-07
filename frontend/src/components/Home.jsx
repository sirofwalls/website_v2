import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>

        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600'>Hi My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Peter</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Devloper and IT Specialist</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ad dolores soluta dolore minima molestias cum, eius obcaecati quibusdam eos quaerat rem. Molestias, doloribus aperiam.</p>
            <div>
                <button className='text-white border-2 group px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home