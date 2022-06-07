import React from 'react'
import {techData} from '../Data/data'

const Skills = () => {

  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>\\ These are the technologies I have worked with \\</p>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
                {techData.map((item) => (
                    <div className="shadow-md shadow-[#040c16] pt-4 rounded-2xl bg-[#0a1f39] hover:scale-110 duration-500 hover:bg-[#113663]" key={item.name}>
                        <img src={item.icon} alt={item.name} className='w-20 mx-auto' />
                        <p className='my-4'>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Skills