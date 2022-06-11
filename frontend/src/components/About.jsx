import React from 'react'

const About = () => {
  return (
    <div name='about' className='bg-[#0a192f] w-full h-screen text-gray-300'>
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 px-4">
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>Hey! I'm Peter. Nice to meet you! Please take a look around.</p>
                </div>
                <div>
                    <p>My name is Peter. I am an all-around IT nerd who gets excited about all the different tech options in the world. When I am not trying to learn, I help run an online gaming community with some of my closest friends.</p>
                    <p>This site is still a work in progress as I try to incorporate more tech and options into my development routine.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About