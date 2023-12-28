import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import EmailForm from './EmailForm'

const Contacts = () => {

  return (
    <div className='w-full py-14 sm:py-20'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='relative grid sm:grid-cols-2 gap-4 md:gap-16'>
          <div className='flex flex-col my-3 text-text'>
            <h2 className='header'>Contact Me</h2>
            <p className='paragraph max-w-[85%] mb-6'>Feel free to reach out to me through my socials, or send an email through the form.</p>
            <div className='mb-4'>
              <h4 className='text-base sm:text-lg font-bold mb-2 text-gray-400'>Socials</h4>
              <div className='flex flex-row items-center text-2xl md:text-3xl gap-1 text-primary'>
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
            <div>
              <h4 className='text-base sm:text-lg font-bold mb-1 text-gray-400'>Email</h4>
              <div className='flex flex-row items-center text-sm sm:text-base gap-2 font-medium text-blue-500'>
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
          </div>

          {/* Start of Email Form */}
          <div className='my-3'>
            <EmailForm />
          </div>
          {/* End of Email Form */}

          {/* Grid Column Divider */}
          <div className='hidden md:block absolute h-full w-[1px] bg-gray-300 top-0 right-1/2 left-1/2' />
        </div>
      </div>
    </div>
  )
}

export default Contacts