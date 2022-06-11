import {Link} from 'react-scroll'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>

        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className='text-pink-600'>Hi My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Peter</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Devloper and IT Specialist</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm an IT specialist focused on providing the best experience for clients, as well as a developer who just loves building things!</p>
            <div>
              <Link to='work' smooth={true} duration={500} className='cursor-pointer'>
                <button className='text-white border-2 group px-6 py-3 my-2 rounded-lg flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                  <span className='group-hover:rotate-90 duration-500'>
                      <HiArrowNarrowRight className='ml-3'/>
                  </span>
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Home