import React from 'react'
import { CatCodeLogoSvg } from '../svg-components/IconSVG'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-text'>
      <div className='w-full max-w-[1200px] h-fit mx-auto px-4'>
        <div className='grid sm:grid-cols-2 items-end py-4'>
          {/* Logo and Social Div */}
          <div className='flex flex-row sm:flex-col items-center sm:items-start justify-between'>
            {/* Logo and Name */}
            <a href='' className='w-fit flex flex-row items-center gap-2 sm:mb-4 sm:mt-1'>
              <div className='fill-white h-auto w-6'>
                <CatCodeLogoSvg />
              </div>
              <h2 className='font-bold text-lg text-white'>alanbacay</h2>
            </a>
            {/* Social Media Icons */}
            <div className='flex flex-row gap-2'>
              <a href='' className='text-2xl hover:text-primary transition-all duration-300 text-white'>
                <FaLinkedin />
              </a>
              <a href='' className='text-2xl hover:text-primary transition-all duration-300 text-white'>
                <FaGithubAlt />
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div className='flex flex-col sm:flex-row justify-between sm:justify-evenly text-white'>
            <div>
              <h4 className='font-bold text-xs text-gray-400'>Email</h4>
              <a href='mailto:alanjbacay@gmail.com' className='text-sm hover:underline'>alanjbacay@gmail.com</a>
            </div>
            <div>
              <h4 className='font-bold text-xs text-gray-400'>Phone</h4>
              <p className='text-sm'>(+63)9064812232</p>
            </div>
          </div>
          {/* Foot Note */}
          <div className='col-span-full mt-5'>
            <div className='w-[95%] h-[1px] bg-gray-600' />
            <div className='w-fit mx-auto flex flex-row gap-2 text-xs mt-1 text-gray-400'>
              <p>©alanbacay</p>
              <p>•</p>
              <a href='' className='underline hover:text-white'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer