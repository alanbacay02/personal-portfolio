import React, { useEffect, useRef } from 'react'
import { FaGithubSquare, FaLinkedin, FaViber, FaWhatsapp } from 'react-icons/fa'

const headerStyle = 'text-base font-bold mb-1 text-gray-400 dark:text-gray-400'

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
  }, [showContactModal])

  const handleEmailLinkClick = () => {
    setShowContactModal(!showContactModal)

    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth'})
    }
  }

  return (
    <div>
      <div className='fixed top-0 left-0 h-full w-full flex items-center justify-center z-30'>
        <div ref={modalRef}  className='flex flex-col p-6 max-w-[45%] h-fit bg-background dark:bg-gray dark:bg-zinc-800 rounded-lg'>
          <div>
            <h3 className='header'>Contact Me</h3>
            <p className='paragraph'>
              Feel free to contact me through any of the links below, or send me an email through the 
              <button
                onClick={handleEmailLinkClick}
                className='text-primary dark:text-primary hover:underline ml-1'
              >
                email form
              </button>!
            </p>
          </div>
          <div className='w-full mt-2 mb-4 h-[1px] mx-auto bg-secondary dark:bg-gray-500' />
          <div className='mb-4'>
              <h4 className={headerStyle}>Socials</h4>
              <div className='flex flex-row items-center text-2xl md:text-3xl gap-1 text-primary dark:text-darkPrimary'>
                <a
                  href='https://www.linkedin.com/in/alanbacay/'
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
          <div className='mb-4'>
            <h4 className={headerStyle}>Email</h4>
            <div className='flex flex-row items-center text-sm sm:text-base gap-2 font-medium text-blue-500 dark:text-sky-400'>
              <a
                href='mailto:alanjbacay@gmail.com'
                target='_blank'
                rel='noreferrer'
                className='hover:text-blue-600 transition-colors duration-300'
              >
                alanjbacay@gmail.com
              </a>
            </div>
          </div>
          <div>
            <h4 className={headerStyle}>Phone</h4>
            <div className='flex flex-col text-sm sm:text-base font-medium text-blue-500 dark:text-sky-400'>
              <a
                href='tel:+639491520850'
                target='_blank'
                rel='noreferrer'
                className='w-fit hover:text-blue-600 transition-colors duration-300'
              >
                (+63) 949 152 0850
              </a>
              <p className='flex flex-row items-center text-[0.700rem] leading-normal text-zinc-500/80 dark:text-gray-200'>
                Available on Whatsapp
                <span className='pl-0.5 mr-1'><FaWhatsapp /></span>
                and Viber
                <span className='px-0.5'><FaViber /></span>
              </p>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={() => {setShowContactModal(!showContactModal)}}
            className='w-fit ml-auto'
          >
            Close
          </button>
        </div>
      </div>

      {/* Darkens Screen behind modal to give focus */}
      <div className='fixed inset-0 bg-black/20 dark:bg-black/50 z-20' />
    </div>
  )
}

export default ContactModal