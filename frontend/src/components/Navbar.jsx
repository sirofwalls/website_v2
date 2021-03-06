import {useState} from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {Link} from 'react-scroll'
import { navDava } from '../Data/data'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleHamburger = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='z-50 fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div className="lg:mx-4">
            <Link to='home' smooth={true} duration={500} className='cursor-pointer'>
                <img className='hover:scale-110 duration-300' src={Logo} alt="Logo" style={{width: '50px'}} />
            </Link>
        </div>

        {/* Main Menu */}
        <ul className='hidden md:flex'>
            {navDava.map((item) => (
                <li key={item.linkTo}>
                    <Link className='hover:border-b-4 hover:border-pink-600' to={item.linkTo} smooth={true} duration={500}>
                        {item.name}
                    </Link>
                </li>
            ))}
            
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
            {navDava.map((item) => (
                <li className='py-6 text-4xl' key={item.linkTo}>
                    <Link className='hover:border-b-4 hover:border-pink-600' to={item.linkTo} smooth={true} duration={500} onClick={toggleHamburger}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>

        {/* Social Icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/peter-walser">LinkedIn <FaLinkedin size={30} /></a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/sirofwalls">GitHub <FaGithub size={30} /></a>
                </li>
                <li className='w-[150px] h-[50px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#68938a]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="mailto:mail@ptrwlsr.com">Email <HiOutlineMail size={30} /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar