import React, { useState } from 'react'
import { ImPlus } from "react-icons/im";
import Img from '../assets/hero_test_blue.png'
import pdf from '../pdf-assets/Bacay_II_Alan_Neale_Resume.pdf'
import ContactModal from './ContactModal';
import { RevealNoSlider, Reveal } from './Reveal';
import WorkStatus from './WorkStatus';

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
              <Reveal>
                <WorkStatus status={'closed'} />
              </Reveal>
              <Reveal>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>Hey, I'm Alan.</h1>
              </Reveal>
              <Reveal>
                <h4 className='text-base md:text-lg mb-3'> Web-Developer / Computer Engineer</h4>
              </Reveal>
              <Reveal>
                <p className='paragraph mb-4'>I enjoy designing and creating impactful websites using React.</p>
              </Reveal>
              {/* START OF SHORT INTRO */}
              <div className={`h-5 sm:h-8 ${introDivLineMargin}`} />
              <ul className='flex flex-col'>
                {INTRO_ITEMS.map((item,index) => {
                  return (
                    <div key={index}>
                      <Reveal>
                        <li className='flex flex-row items-center gap-4 ml-0 mt-1 mb-1'>
                          <p className='text-sm dark:text-darkText'><ImPlus /></p>
                          <p className='font-medium text-sm'>{item}</p>
                        </li>
                      </Reveal>
                      {index !== INTRO_ITEMS.length - 1 ? <div className={`h-4 ${introDivLineMargin}`} /> : ''}
                    </div>
                  )
                })}
              </ul>
              <div className={`h-3 sm:h-5 ${introDivLineMargin}`} />
              {/* END OF SHORT INTRO */}

              {/* START OF BUTTON GROUP */}
              <div className='flex flex-row gap-2 md:gap-4 mt-4 font-medium'>
                <Reveal>
                  <a
                    className='button-style inline-block bg-secondary dark:bg-darkSecondary text-text dark:text-darkText rounded-lg hover:bg-gray-400 hover:dark:bg-cyan-900 transition-colors duration-300'
                    href={pdf}
                    target='_blank'
                    rel='noreferrer'
                  >
                    View Resume
                  </a>
                </Reveal>
                <Reveal>
                  <button
                    className='button-style bg-primary dark:bg-darkPrimary rounded-lg text-white dark:text-black hover:bg-blue-600 hover:dark:bg-blue-500 transition-colors duration-300'
                    onClick={() => {setShowContactModal(!showContactModal)}}
                  >
                    Contact Me
                  </button>
                </Reveal>
              </div>
              {/* END OF BUTTON GROUP */}

            </div>
            {/* End of Hero Content */}
          </div>
          <RevealNoSlider>
          <div className='flex items-center justify-center h-full w-full'>
            <img src={Img} loading='lazy' alt='hero_img' className='h-auto w-[90%] max-w-[400px] md:max-w-none object-cover object-center pointer-events-none' />
          </div>
          </RevealNoSlider>
        </div>
      </div>

      { showContactModal && <ContactModal showContactModal={showContactModal} setShowContactModal={setShowContactModal} />}
    </div>
  )
}

export default Hero