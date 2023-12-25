import React, { useEffect } from 'react'
import { FaExternalLinkAlt, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";

const MENU_LIST_ITEMS = [
  {
    listItem: 'About',
    href: ''
  },
  {
    listItem: 'Skills',
    href: ''
  },
  {
    listItem: 'Projects',
    href: ''
  },
  {
    listItem: 'Contact',
    href: ''
  },
]

const PopoutMenu = ({ mobileMenu, setMobileMenu }) => {

  useEffect(() => {
    // Checks `mobileMenu` state to update scrolling behavior of 'body'
    if (mobileMenu) {
      document.body.classList.add('no-scroll') // Adds '.no-scroll' class to 'body' when `MobileMenu` is true
    } else if (!mobileMenu) {
      document.body.classList.remove('no-scroll') // Removes '.no-scroll' class from 'body' when `MobileMenu` is false
    }

    return () => {
      // Removes '.no-scroll' class from 'body' when component unmounts
      document.body.classList.remove('no-scroll')
    }

  }, [mobileMenu])

  return (
    <div className={`w-[100%] max-w-[450px] h-screen fixed top-0 z-50 bg-background border-l border-secondary ${mobileMenu ? 'right-0' : '-right-full'} transition-all duration-300`}>
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
        <ul className='flex flex-col text-lg p-4 py-5 gap-5'>
          {MENU_LIST_ITEMS.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href} className='w-fit'>{item.listItem}</a>
              </li>
            )
          })}
        </ul>

        {/* Social Media Icons and Email Address Parent Container */}
        <div className='flex flex-col gap-4 p-4 border-y border-gray-200'>
          {/* Social Media Icons */}
          <div>
            <h3 className='text-base font-bold mb-2 text-gray-400'>Social Media</h3>
            <div className='flex flex-row items-center gap-2 ml-1 text-2xl text-primary'>
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
              className='ml-1 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors duration-300'
            >
              alanjbacay@gmail.com
            </a>
          </div>
        </div>
        
        {/* Button Group Parent Container */}
        <div className='flex flex-col gap-2 justify-center p-4 text-sm font-medium'>
          {/* Resume Button */}
          <button className='flex items-center gap-1.5 px-3 py-2 w-fit bg-secondary text-text rounded-lg'>
            View Resume <FaExternalLinkAlt />
          </button>

          {/* Contact Button */}
          <button className='px-3 py-2 w-fit bg-primary rounded-lg text-white'>Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default PopoutMenu