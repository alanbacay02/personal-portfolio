import React, { useState } from 'react'
import CatCode from '../assets/cat_code_logo.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { LuMoon, LuSunMoon } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

const NAVBAR_ITEMS = [
  {
    title: 'About',
    href: '/#'
  },
  {
    title: 'Skills',
    href: '/#'
  },
  {
    title: 'Projects',
    href: '/#'
  },
  {
    title: 'Contact',
    href: '/#'
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

  const handleMobileMenuClick = () => {
    return (
      setMobileMenu(!mobileMenu)
    )
  }

  return (
    <div className='absolute inset-0 w-full h-fit py-4 px-6 text-text-950 z-50'>
      <div className='w-full max-w-[1200px] mx-auto'>
        <div className='relative flex flex-row items-center justify-between'>
          <div id='navbar-logo' className='mx-3 my-5 w-10 h-auto hover:cursor-pointer z-50'>
            <img src={CatCode} alt='cat_code_logo' />
          </div>
          <div className='hidden sm:flex absolute w-full h-full items-center justify-center'>
            <ul className='flex flex-row items-center gap-10 z-50'>
              {NAVBAR_ITEMS.map((item, index) => {
                return (
                  <li id={index} className='group relative font-semibold text-lg hover:text-xl transition-all duration-300 text-text'>
                    <a href={item.href} className='py-2'>{item.title}</a>
                    <div className='absolute -bottom-1 left-0 h-1 w-0 -z-50 group-hover:w-full bg-primary transition-all duration-300' />
                  </li>
                )
              })}
              {/* <li className='group relative'>
                <button className='px-4 py-2 border-2 font-[400] text-lg border-text-950 transition-all duration-300 z-50'>Contact Me</button>
                <div className='absolute inset-0 w-full h-0 group-hover:h-full bg-primary-500 -z-10 transition-all duration-300' />
              </li> */}
            </ul>
          </div>

          <div className='sm:hidden text-3xl' onClick={handleMobileMenuClick}>
            <RxHamburgerMenu />
          </div>
          
          <div className='flex items-center gap-8'>
            <div className='hidden sm:flex flex-row gap-1 text-xl z-50'>
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
            <button
              onClick={() => {setIsDarkMode(!isDarkMode)}}
              className='text-2xl hover:cursor-pointer z-50 hover:text-primary transition-all duration-300'
            >
              {isDarkMode ? <LuSunMoon /> : <LuMoon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar