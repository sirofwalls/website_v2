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
                    <p>Hi! I'm Peter, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus dolor at dolore perspiciatis quam harum vero, sit itaque modi iste temporibus, odit quidem dolorum porro?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About