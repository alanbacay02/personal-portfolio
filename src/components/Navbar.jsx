import React, { useState, useEffect } from 'react'
import CatCode from '../assets/cat_code_logo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { LuMoon, LuSunMoon } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import PopoutMenu from './PopoutMenu';

const NAVBAR_ITEMS = [
  {
    title: 'About',
    href: ''
  },
  {
    title: 'Skills',
    href: ''
  },
  {
    title: 'Projects',
    href: ''
  },
  {
    title: 'Contact',
    href: ''
  },
]

const NAVBAR_ICONS = [
  {
    anchorIcon: <FaLinkedinIn />,
    anchorLink : 'https://www.linkedin.com/in/alan-neale-bacay-ii-60aa48258/'
  },
  {
    anchorIcon: <FaGithubAlt />,
    anchorLink : 'https://github.com/alanbacay02'
  }
]

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMobileMenuClick = () => {
    return (
      setMobileMenu(!mobileMenu)
    )
  }

  return (
    <div className={`w-full h-fit px-4 text-text z-10 ${scrolling ? 'navbar-scroll bg-background py-4' : 'navbar-default py-4'}`}>
      <div className='w-full max-w-[1200px] mx-auto'>
        {/* Parent Flex Container */}
        <div className='relative flex flex-row items-center justify-between'>
          {/* Navbar Logo */}
          <div id='navbar-logo' className=' w-6 md:w-10 h-auto hover:cursor-pointer z-50'>
            <img src={CatCode} alt='cat_code_logo' />
          </div>

          {/* Navbar List items on Medium and Larger devices */}
          <div className='hidden md:flex absolute w-full h-full items-center justify-center'>
            <ul className='flex flex-row items-center gap-10 z-50'>
              {NAVBAR_ITEMS.map((item, index) => {
                return (
                  <li id={index} className='group relative font-semibold text-lg hover:text-xl transition-all duration-300 text-text'>
                    <a href={item.href} className='py-2'>{item.title}</a>
                    <div className='absolute -bottom-1 left-0 h-1 w-0 -z-50 group-hover:w-full bg-primary transition-all duration-300' />
                  </li>
                )
              })}
            </ul>
          </div>
          
          {/* Social Media Icons, Hamburger Menu and Dark Mode Button Container */}
          <div className='flex items-center gap-4 sm:gap-6 md:gap-8'>
            {/* Social Media Icon Links */}
            <div className='hidden xs:flex flex-row gap-1 text-xl z-50'>
              {NAVBAR_ICONS.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.anchorLink}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:scale-125 hover:text-primary transition-all duration-300 p-2'>
                      {item.anchorIcon}
                  </a>
                )
              })}
            </div>
            {/* Dark Mode Button */}
            <button
              onClick={() => {setIsDarkMode(!isDarkMode)}}
              className='text-xl md:text-2xl hover:cursor-pointer z-50 hover:text-primary transition-all duration-300'
            >
              {isDarkMode ? <LuSunMoon /> : <LuMoon />}
            </button>

            {/* Hamburger Menu */}
            <div className='md:hidden text-2xl md:text-3xl' onClick={handleMobileMenuClick}>
              <RxHamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      {/* Popout Menu */}
      <PopoutMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </div>
  )
}

export default Navbar