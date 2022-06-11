import React from 'react'
import {cardData} from '../Data/data'

const Work = () => {

  return (
    <div name='work' className='bg-[#0a192f] text-gray-300 w-full md:h-screen'>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
                <p className='py-6'>\\ Check out some of my work! \\</p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
                {cardData.map((item) => (
                    <div style={{backgroundImage: `url(${item.image})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div hover:scale-105 duration-500" key={item.title}>
                        
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className='font-2xl font-bold text-white tracking-wider'>
                                {item.title}
                            </span>
                            <div className="pt-8 text-center">
                                <a href={item.demoLink} target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href={item.codeLink} target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Work