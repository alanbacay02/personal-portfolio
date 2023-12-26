import React from 'react'
import { CatCodeLogoSvg } from '../svg-components/IconSVG'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-text'>
      <div className='w-full max-w-[1200px] h-fit mx-auto px-4'>
        <div className='grid sm:grid-cols-2 items-end py-4'>
          {/* Logo and Social Div */}
          <div className='flex flex-row items-center gap-4'>
            {/* Logo and Name */}
            <a href='/#' className='w-fit flex flex-row items-center gap-2'>
              <div className='fill-white h-auto w-6'>
                <CatCodeLogoSvg />
              </div>
              <h2 className='font-bold text-lg text-white'>alanbacay</h2>
            </a>
          </div>
          {/* Contact Info */}
          <div className='flex flex-col xs:flex-row justify-start sm:justify-end mt-4 sm:mt-0 gap-4 xs:gap-10 text-white'>
            <div>
              <h4 className='font-bold text-xs text-gray-400'>Email</h4>
              <p className='text-sm hover:underline'>
                <a href='mailto:alanjbacay@gmail.com'>
                  alanjbacay@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h4 className='font-bold text-xs text-gray-400'>Phone</h4>
              <p className='text-sm'>(+63)9064812232</p>
            </div>
          </div>
          {/* Foot Note */}
          <div className='col-span-full flex flex-col items-end mt-5'>
            <div className='w-full h-[0.5px] bg-gray-600' />
            <div className='w-fit flex flex-row gap-2 text-xs mt-1 text-gray-400'>
              <p>©alanbacay</p>
              <p>•</p>
              <a href='/#' className='underline hover:text-white'>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer