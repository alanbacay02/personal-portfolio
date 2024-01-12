import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";
import { LuMoon, LuSunMoon } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import PopoutMenu from './PopoutMenu';
import { useTheme } from '../ThemeContext';
import { CatCodeLogoSvg } from '../svg-components/IconSVG';

const NAVBAR_ITEMS = [
  {
    title: 'About',
    href: 'about'
  },
  {
    title: 'Projects',
    href: 'projects'
  },
  {
    title: 'Contact',
    href: 'contact'
  },
]

const NAVBAR_ICONS = [
  {
    anchorIcon: <FaLinkedinIn />,
    anchorLink : 'https://www.linkedin.com/in/alanbacay/'
  },
  {
    anchorIcon: <FaGithubAlt />,
    anchorLink : 'https://github.com/alanbacay02'
  }
]

const parentVariants = {
  visible: {
    delay: 0.5, // Add a short delay before triggering this transition
    transition: { 
      when: "beforeChildren", // Trigger children animations after transition
      staggerChildren: 0.1, // Step interval for staggering
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 }
}

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [scrolling, setScrolling] = useState(false)
  const {darkMode, changeDarkMode} = useTheme()

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

  const handleListLinkClick = (idTarget) => {
    const contactElement = document.getElementById(idTarget.toString())
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth'})
    } else {
      console.error(`Element with ID '${idTarget}' does not exist!`)
    }
  }

  return (
    <div className={`bg-background dark:bg-darkBackground text-text dark:text-darkText w-full h-fit z-30 ${scrolling ? 'navbar-scroll py-4' : 'navbar-default py-4'}`}>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        {/* Parent Flex Container */}
        <motion.div
          variants={parentVariants}
          initial='hidden'
          animate='visible'
          className='relative flex flex-row items-center justify-between overflow-hidden'
        >
          {/* Navbar Logo */}
          <a id='navbar-logo'
           href='/#'
           className='dark:fill-darkText w-6 md:w-7 h-auto hover:cursor-pointer hover:fill-primary dark:hover:fill-darkPrimary transition-colors duration-300'>
            <CatCodeLogoSvg />
          </a>

          {/* Navbar List items on Medium and Larger devices */}
          <div className='hidden md:flex absolute w-full h-full items-center justify-center'>
            <ul className='flex flex-row items-center gap-10'>
              {NAVBAR_ITEMS.map((item, index) => {
                return (
                  <motion.li
                    key={index}
                    variants={childVariants}
                    className='group relative font-semibold text-sm hover:text-base transition-all duration-300'
                  >
                    <button
                      onClick={() => {handleListLinkClick(item.href)}}
                      className='py-2'
                    >
                      {item.title}
                    </button>
                    <div className='absolute bottom-0 left-0 h-1 w-0 -z-50 group-hover:w-full bg-primary dark:bg-darkPrimary transition-all duration-300' />
                  </motion.li>
                )
              })}
            </ul>
          </div>
          
          {/* Social Media Icons, Hamburger Menu and Dark Mode Button Container */}
          <div className='flex items-center gap-4 sm:gap-6 md:gap-8'>
            {/* Social Media Icon Links */}
            <div className='hidden xs:flex flex-row gap-1 text-base z-50'>
              {NAVBAR_ICONS.map((item, index) => {
                return (
                  <motion.a
                    key={index}
                    variants={childVariants}
                    href={item.anchorLink}
                    target='_blank'
                    rel='noreferrer'
                    className='hover:scale-125 hover:text-primary transition-all duration-300 p-2'>
                      {item.anchorIcon}
                  </motion.a>
                )
              })}
            </div>
            {/* Dark Mode Button */}
            <motion.button
              variants={childVariants}
              onClick={changeDarkMode}
              className='text-xl md:text-xl hover:cursor-pointer z-50 hover:text-primary transition-all duration-300'
            >
              {darkMode ? <LuSunMoon /> : <LuMoon />}
            </motion.button>

            {/* Hamburger Menu */}
            <div className='md:hidden text-2xl md:text-3xl' onClick={handleMobileMenuClick}>
              <RxHamburgerMenu />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Popout Menu */}
      <PopoutMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
    </div>
  )
}

export default Navbar