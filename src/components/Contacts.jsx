import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import EmailForm from './EmailForm'

const Contacts = () => {

  return (
    <div className='w-full py-16'>
      <div className='w-full max-w-[1200px] mx-auto px-6'>
        <div className='grid md:grid-cols-2'>
          <div className='flex flex-col text-text'>
            <h2 className='text-5xl font-bold mb-4'>Contact Me</h2>
            <p className='text-lg max-w-[500px] mb-6'>Feel free to reach out to me through my socials, or send an email through the form.</p>
            <div className='mb-4'>
              <h4 className='text-xl font-bold mb-2 text-gray-400'>Socials</h4>
              <div className='flex flex-row items-center text-3xl gap-2 text-primary'>
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
              <h4 className='text-xl font-bold mb-1 text-gray-400'>Email</h4>
              <div className='flex flex-row items-center text-lg gap-2 font-medium text-blue-500'>
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
          <div className=''>
            <EmailForm />
          </div>
          {/* End of Email Form */}
        </div>
      </div>
    </div>
  )
}

export default Contacts