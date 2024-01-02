import React, { useState } from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { ImPlus } from "react-icons/im";
import Img from '../assets/hero_test_blue.png'
import pdf from '../pdf-assets/Bacay_II_Alan_Neale_Resume.pdf'
import ContactModal from './ContactModal';

const INTRO_ITEMS = [
  'Turns Coffee into Code',
  'Enjoys Playing Videogames',
  'Focuses with Music',
  'Based in the Philippines'
]

const introDivLineMargin = 'w-[2px] sm:w-[2.5px] ml-[7.5px] bg-secondary dark:bg-gray-700'

const Hero = () => {
  const [showContactModal, setShowContactModal] = useState(false)

  return (
    <div className='hero-container w-full text-text dark:text-darkText'>
      <div className='w-full h-full max-w-[1200px] mx-auto px-4'>
        <div className='grid sm:grid-cols-2 h-full items-center gap-14 sm:gap-0'>
          <div className='flex flex-col h-full w-full justify-center items-start'>
            {/* Start of Hero Content */}
            <div id='hero-content' className='flex flex-col justify-center'>
              <div className='bg-gray-200 dark:bg-darkSecondary flex flex-row gap-1 items-center rounded-full font-medium text-green-700 dark:text-green-500 w-fit text-xs mb-2 px-2 py-0.5'>
                <FaCheckCircle />
                <p>Open to Remote Work</p>
              </div>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>Hey, I'm Alan.</h1>
              <h4 className='text-base md:text-lg mb-3'> Web-Developer / Computer Engineer</h4>
              <p className='paragraph mb-4'>I enjoy designing and creating impactful websites using React.</p>
              {/* START OF SHORT INTRO */}
              <div className={`h-5 sm:h-8 ${introDivLineMargin}`} />
              <ul className='flex flex-col'>
                {INTRO_ITEMS.map((item,index) => {
                  return (
                    <>
                      <li className='flex flex-row items-center gap-4 ml-0 mt-1 mb-1'>
                        <p className='text-sm dark:text-darkText'><ImPlus /></p>
                        <p className='font-medium text-sm'>{item}</p>
                      </li>
                      {index !== INTRO_ITEMS.length - 1 ? <div className={`h-4 ${introDivLineMargin}`} /> : ''}
                    </>
                  )
                })}
              </ul>
              <div className={`h-3 sm:h-5 ${introDivLineMargin}`} />
              {/* END OF SHORT INTRO */}

              {/* START OF BUTTON GROUP */}
              <div className='flex flex-row gap-2 md:gap-4 mt-4 font-medium'>
                <a
                  className='button-style bg-secondary dark:bg-darkSecondary text-text dark:text-darkText rounded-lg'
                  href={pdf}
                  target='_blank'
                  rel='noreferrer'
                >View Resume</a>
                <button
                  className='button-style bg-primary dark:bg-darkPrimary rounded-lg text-white dark:text-black'
                  onClick={() => {setShowContactModal(!showContactModal)}}
                >
                  Contact Me
                </button>
              </div>
              {/* END OF BUTTON GROUP */}

            </div>
            {/* End of Hero Content */}
          </div>
          <div className='flex items-center justify-center h-full w-full'>
            <img src={Img} alt='hero_img' className='h-auto w-[90%] max-w-[400px] md:max-w-none object-cover object-center' />
          </div>
        </div>
      </div>

      { showContactModal && <ContactModal showContactModal={showContactModal} setShowContactModal={setShowContactModal} />}
    </div>
  )
}

export default Hero