import { useEffect } from 'react'
import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {techData} from '../Data/data'

const Skills = () => {

    const {ref, inView} = useInView({
        threshold: 0.3
    })

    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.3,
                }
            })
        }
    }, [inView, animation])

  return (
    <div ref={ref} name='skills' className='overflow-x-hidden overflow-y-visible bg-[#0a192f] text-gray-300 w-full h-screen p-4'>
        <motion.div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto" initial={{x: '100vw', opacity: 0}} animate={animation}>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>\\ Here are a few technologies I’ve been working with recently \\</p>
            </div>

            <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center py-8">
                {techData.map((item) => (
                    <div className="shadow-md shadow-[#040c16] pt-4 rounded-2xl bg-[#0a1f39] hover:scale-110 duration-500 hover:bg-[#113663]" key={item.name}>
                        <img src={item.icon} alt={item.name} className='w-20 mx-auto' />
                        <p className='my-4'>{item.name}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    </div>
  )
}

export default Skills