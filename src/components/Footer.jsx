import React from 'react'
import { CatCodeLogoSvg } from '../svg-components/IconSVG'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-full max-w-[1200px] h-fit mx-auto px-4 bg-text'>
        <div className='grid grid-cols-3 py-4'>
          <div className='col-span-2'>
            <a href='' className='flex flex-row items-center gap-2'>
                <div className='fill-white h-auto w-6'>
                  <CatCodeLogoSvg />
                </div>
                <h2 className='font-bold text-white'>alanbacay</h2>
            </a>
          </div>
          <div className='col-span-1'>
            <div className='flex flex-row justify-end'>
              <a href='' className='text-2xl text-white'>
                <FaLinkedin />
              </a>
              <a href='' className='text-2xl text-white'>
                <FaGithubAlt />
              </a>
            </div>
          </div>
          <div className='col-span-3 flex flex-row justify-between text-white'>
            <div>
              <h4>Email</h4>
              <a>alanjbacay@gmail.com</a>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+639064812232</p>
            </div>
          </div>
          <div className='col-span-3'>
            <div className='w-[95%] h-[1px] bg-gray-300' />
            <div className='w-fit mx-auto flex flex-row gap-3 text-white'>
              <p>alanbacay</p>
              <a>Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer