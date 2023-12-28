import React from 'react'
import { ImPlus } from "react-icons/im";
import TempHeroSvg from '../svg-components/TempHeroSvg';

const INTRO_ITEMS = [
  'Addicted to Coffee',
  'Loves Playing Videogames',
  'Loves to Listen to Music',
  'Based in the Philippines'
]

const introDivLineMargin = 'w-[2px] sm:w-[2.5px] ml-[5px] sm:ml-[6px] bg-secondary'

const Hero = () => {
  return (
    <div className='hero-container w-full'>
      <div className='w-full h-full max-w-[1200px] mx-auto px-4'>
        <div className='grid sm:grid-cols-2 h-full items-center gap-14 sm:gap-0'>
          <div className='flex flex-col h-full w-full justify-center items-start'>
            {/* Start of Hero Content */}
            <div id='hero-content' className='flex flex-col justify-center'>
              <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-2'>Hey, I'm Alan.</h1>
              <h4 className='text-base md:text-lg mb-3'> Web-Developer / Computer Engineer</h4>
              <p className='paragraph mb-4'>I design and create websites using React.</p>
              {/* START OF SHORT INTRO */}
              <div className={`h-5 sm:h-8 ${introDivLineMargin}`} />
              <ul className='flex flex-col'>
                {INTRO_ITEMS.map((item,index) => {
                  return (
                    <>
                      <li className='flex flex-row items-center gap-4 ml-0 mt-1 mb-1'>
                        <p className='text-sm'><ImPlus /></p>
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
                <button className='button-style bg-secondary text-text rounded-lg'>View Resume</button>
                <button className='button-style bg-primary rounded-lg text-white'>Contact Me</button>
              </div>
              {/* END OF BUTTON GROUP */}

            </div>
            {/* End of Hero Content */}
          </div>
          <div>
            <TempHeroSvg />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero