import React, { useEffect, useRef } from 'react'
import { FaGithubSquare, FaLinkedin, FaLongArrowAltRight } from 'react-icons/fa'
import headerImg from '../assets/polarProgrammer.png'
import { IoCloseOutline } from "react-icons/io5";

const ContactModal = ({ showContactModal, setShowContactModal }) => {
  const modalRef = useRef()

  useEffect(() => {
    if (showContactModal) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    let currentModalRef = modalRef.current
    const handleMouseDown = (e) => {
      if (!currentModalRef.contains(e.target)) {
        setShowContactModal(!showContactModal)
      }
    }

    document.addEventListener('mousedown', handleMouseDown)

    return () => {
      document.body.classList.remove('no-scroll')
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [showContactModal, setShowContactModal])

  const handleScrollToContactClick = () => {
    setShowContactModal(!showContactModal)

    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth'})
    }
  }

  return (
    <div>
      <div className='fixed top-0 left-0 h-full w-full flex items-center justify-center px-4 z-30'>
        <div ref={modalRef}  className='relative flex flex-col items-center w-full max-w-[400px] h-fit pb-4 bg-background dark:bg-gray dark:bg-zinc-800 rounded-lg'>
          {/* Close Button at Top of Modal */}
          <div className='absolute top-0 right-0 z-50 text-2xl m-1 text-white dark:text-darkWhite'>
            <button onClick={() => {setShowContactModal(!showContactModal)}} className='hover:scale-125 transition-all duration-300'><IoCloseOutline /></button>
          </div>

          {/* SVG Header Img */}
          <div className='w-full bg-sky-600 dark:bg-sky-700 mx-auto px-4 py-2 mb-4 rounded-t-lg'>
            <img src={headerImg} alt='header_img.png' className='mx-auto' />
          </div>

          {/* Header and Paragraph */}
          <div className='text-center mb-3 px-4'>
            <h3 className='text-sm sm:text-base font-medium mb-3'>Open to Opportunities!</h3>
            <p className='text-xs sm:text-sm'>Let's Chat! Reach out via the links below or drop a message using the  <button onClick={handleScrollToContactClick} className='pl-0.5 text-accent dark:text-darkPrimary hover:underline'>email form</button>. Looking forward to connecting!</p>
          </div>

          {/* Social Media Icons */}
          <div className='px-4'>
              <div className='flex flex-row items-center text-2xl md:text-3xl gap-1 text-primary dark:text-darkPrimary'>
                <a
                  href='https://www.linkedin.com/in/alanbacay/'
                  target='_blank'
                  rel='noreferrer'
                  onClick={() => { setShowContactModal(!showContactModal) }}
                  className='hover:text-blue-600 transition-colors duration-300'>
                    <FaLinkedin />
                </a>
                <a
                  href='https://github.com/alanbacay02'
                  target='_blank'
                  rel='noreferrer'
                  onClick={() => { setShowContactModal(!showContactModal) }}
                  className='hover:text-blue-600 transition-colors duration-300'>
                    <FaGithubSquare />
                </a>
              </div>
          </div>

          {/* Divider Div */}
          <div className='w-full h-[1.5px] bg-secondary dark:bg-gray-600 my-4' />

          {/* View More Contacts Button */}
          <button
            onClick={handleScrollToContactClick}
            className='flex flex-row items-center gap-2 w-fit px-3 py-2 rounded-lg font-medium text-xs sm:text-sm bg-primary dark:bg-darkPrimary text-white dark:text-black hover:bg-blue-600 dark:hover:bg-blue-600 transition-colors duration-300'
          >
            View More
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>

      {/* Darkens Screen behind modal to give focus */}
      <div className='fixed inset-0 bg-black/50 z-20' />
    </div>
  )
}

export default ContactModal