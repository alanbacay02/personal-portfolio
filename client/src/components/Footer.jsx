import React, { useState } from 'react'
import { CatCodeLogoSvg } from '../svg-components/IconSVG'
import PrivacyPolicyModal from './PrivacyPolicyModal'

const Footer = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  return (
    <div className='w-full bg-black dark:bg-gray-900 text-darkText'>
      <div className='w-full max-w-[1200px] h-fit mx-auto px-4'>
        <div className='grid sm:grid-cols-2 items-end py-4'>
          {/* Logo and Social Div */}
          <div className='flex flex-row items-center gap-4'>
            {/* Logo and Name */}
            <a href='/#' className='w-fit flex flex-row items-center gap-2'>
              <div className='h-auto w-6 fill-darkText'>
                <CatCodeLogoSvg />
              </div>
              <h2 className='font-bold text-lg'>alanbacay</h2>
            </a>
          </div>
          {/* Contact Info */}
          <div className='flex flex-col xs:flex-row justify-start sm:justify-end mt-4 sm:mt-0 gap-4 xs:gap-10'>
            <div>
              <h4 className='font-bold text-xs text-gray-400 dark:text-gray-300'>Email</h4>
              <a
                href='mailto:alanjbacay@gmail.com'
                className='text-sm hover:underline'
                target='_blank'
                rel='noreferrer'
              >
                alanjbacay@gmail.com
              </a>
            </div>
            <div>
              <h4 className='font-bold text-xs text-gray-400 dark:text-gray-300'>Phone</h4>
              <a
                href='tel:+639491520850'
                target='_blank'
                rel='noreferrer'
                className='text-sm hover:underline'
              >
                (+63) 949 152 0850
              </a>
            </div>
          </div>
          {/* Foot Note */}
          <div className='col-span-full flex flex-col items-end mt-5'>
            <div className='w-full h-[0.5px] bg-gray-600' />
            <div className='w-fit flex flex-row gap-2 text-xs mt-1 text-gray-400'>
              <p>©alanbacay</p>
              <p>•</p>
              <button
                onClick={() => {setShowPrivacyModal(!showPrivacyModal)}} className='underline hover:text-darkText'
              >
                Privacy Policy
              </button>
            </div>
            { showPrivacyModal && <PrivacyPolicyModal showPrivacyModal={showPrivacyModal} setShowPrivacyModal={setShowPrivacyModal} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer