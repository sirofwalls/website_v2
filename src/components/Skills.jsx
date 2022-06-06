import React from 'react'

import Linux from '../assets/linux.png'
import Docker from '../assets/docker.png'
import MySQL from '../assets/mysql.png'
import ReactJS from '../assets/react.png'
import Node from '../assets/node.png'
import Cloudflare from '../assets/cloudflare.png'
import GitHub from '../assets/github.png'
import MongoDB from '../assets/mongo.png'

const Skills = () => {

    const tech = [
        {name: 'Linux', icon: Linux},
        {name: 'Docker', icon: Docker},
        {name: 'MySQL', icon: MySQL},
        {name: 'NodeJS', icon: Node},
        {name: 'React', icon: ReactJS},
        {name: 'Cloudflare', icon: Cloudflare},
        {name: 'GitHub', icon: GitHub},
        {name: 'Mongo', icon: MongoDB},
    ]

  return (
    <div name='skills' className='bg-[#0a192f] text-gray-300 w-full h-screen'>
        <div className=" max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>// These are the technologies I have worked with //</p>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
                {tech.map((item) => (
                    <div className="shadow-md shadow-[#040c16] pt-4 rounded-2xl bg-[#0a1f39] hover:scale-110 duration-500" key={item.name}>
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