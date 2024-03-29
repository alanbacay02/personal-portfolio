import React, { useEffect, useRef } from 'react'
import { FaExternalLinkAlt, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";
import pdf from '../pdf-assets/Bacay_II_Alan_Neale_Resume.pdf'

const MENU_LIST_ITEMS = [
  {
    listItem: 'About',
    href: 'about'
  },
  {
    listItem: 'Projects',
    href: 'projects'
  },
  {
    listItem: 'Contact',
    href: 'contact'
  },
]

const handleIdLinkClick = (idTarget) => {
  const contactElement = document.getElementById(idTarget.toString())
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: 'smooth'})
  } else {
    console.error(`Element with ID '${idTarget}' does not exist!`)
  }
}

const PopoutMenu = ({ mobileMenu, setMobileMenu }) => {
  const popMenu = useRef()

  useEffect(() => {
    // Checks `mobileMenu` state to update scrolling behavior of 'body'
    if (mobileMenu) {
      document.body.classList.add('no-scroll') // Adds '.no-scroll' class to 'body' when `MobileMenu` is true
    } else if (!mobileMenu) {
      document.body.classList.remove('no-scroll') // Removes '.no-scroll' class from 'body' when `MobileMenu` is false
    }
    const currentMenu = popMenu.current
    const handleMouseDown = (e) => {
      if (!currentMenu.contains(e.target)) {
        setMobileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      // Removes '.no-scroll' class from 'body' when component unmounts
      document.body.classList.remove('no-scroll')
      // Removes event listener from body when component unmounts
      document.removeEventListener('mousedown', handleMouseDown)

    }
  }, [mobileMenu, setMobileMenu])

  return (
    <div>
      <div ref={popMenu} className={`w-full max-w-[450px] h-full fixed top-0 right-0 ${mobileMenu ? 'translate-x-0' : 'translate-x-full'} z-50 bg-background dark:bg-darkBackground border-l border-secondary dark:border-darkSecondary text-text dark:text-darkText transition-all duration-300`}>
        {/* Flex Parent Container */}
        <div className='flex flex-col'>
          {/* Menu Close Button */}
          <button
            onClick={() => { setMobileMenu(false) }}
            className='text-2xl ml-auto m-4 mb-1'
          >
            <IoCloseOutline />
          </button>

          {/* Menu List Link Items */}
          <ul className='flex flex-col text-lg px-4 pb-5 pt-1 gap-5'>
            {MENU_LIST_ITEMS.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    className='pr-10'
                    onClick={() => { setMobileMenu(false); handleIdLinkClick(item.href) }}
                  >{item.listItem}</button>
                </li>
              )
            })}
          </ul>

          {/* Social Media Icons and Email Address Parent Container */}
          <div className='flex flex-col gap-4 p-4 border-y border-gray-200 dark:border-gray-700'>
            {/* Social Media Icons */}
            <div>
              <h3 className='text-base font-bold mb-2 text-gray-400'>Social Media</h3>
              <div className='flex flex-row items-center gap-2 ml-1 text-2xl text-primary dark:text-darkPrimary'>
                <a
                  href='https://www.linkedin.com/in/alan-neale-bacay-ii-60aa48258/'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-blue-600 transition-colors duration-300'>
                    <FaLinkedin />
                </a>
                <a
                  href='https://github.com/alanbacay02'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-blue-600 transition-colors duration-300'>
                    <FaGithubSquare />
                </a>
              </div>
            </div>

            {/* Email Address */}
            <div>
              <h3 className='text-base font-bold mb-2 text-gray-400'>Email Address</h3>
              <a
                href='mailto:alanjbacay@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='ml-1 font-medium text-blue-500 dark:text-sky-300 hover:text-blue-600 transition-colors duration-300'
              >
                alanjbacay@gmail.com
              </a>
            </div>
          </div>
          
          {/* Button Group Parent Container */}
          <div className='flex flex-col gap-2 justify-center p-4 text-sm font-medium'>
            {/* Resume Button */}
            <a
              href={pdf}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-1.5 px-3 py-2 w-fit bg-secondary text-text dark:bg-darkSecondary dark:text-darkText rounded-lg'
            >
              View Resume <FaExternalLinkAlt />
            </a>

            {/* Contact Button */}
            <button
              onClick={() => {
                handleIdLinkClick('contact')
                setMobileMenu(!mobileMenu)
              }}
              className='px-3 py-2 w-fit bg-primary dark:bg-darkPrimary rounded-lg text-white dark:text-darkBackground'
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {/* Darkens Screen when popout menu is active */}
      {mobileMenu ? <div className='fixed inset-0 bg-black/50 z-40' /> : ''}
    </div>
  )
}

export default PopoutMenu