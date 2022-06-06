import {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleHamburger = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className="">
            <img src={Logo} alt="Logo" style={{width: '50px'}} />
        </div>

        {/* Main Menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* Mobile Menu */}
        <div className='md:hidden z-10 mr-4'>
            {isOpen ? (
                <FaTimes onClick={toggleHamburger}/>
            ) : (
                <FaBars onClick={toggleHamburger}/>
            )}
        </div>
        <ul className={isOpen ? (
            'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            ) : (
                'hidden'
            )}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">GitHub <FaGithub size={30} /></a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#68938a]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Email <HiOutlineMail size={30} /></a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">Resume <BsFillPersonLinesFill size={30} /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar