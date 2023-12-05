import React from 'react'
import { ImPlus } from "react-icons/im";
// import SvgComponent from '../svg-components/blob1';

const INTRO_ITEMS = [
  'Addicted to Coffee',
  'Loves Playing Videogames',
  'Loves to Listen to Music',
  'Based in the Philippines'
]

const introDivLineMargin = 'w-[2.5px] ml-[12px] bg-text'

const Hero = () => {
  return (
    <div className='hero-container w-full'>
      <div className='w-full h-full max-w-[1200px] mx-auto px-4'>

        <div className='flex flex-col h-full w-full justify-center items-start'>
          {/* Start of Hero Content */}
          <div id='hero-content' className='flex flex-col justify-center'>
            <h1 className='text-8xl xl:text-[82px] font-bold mb-5'>Hey, I'm Alan.</h1>
            <h4 className='text-2xl xl:text-[24px] mb-4'> Web-Developer / Computer Engineer</h4>
            <p className='text-xl xl:text-[18px] mb-5'>I design and create websites using React.</p>
            {/* START OF SHORT INTRO */}
            <div className={`h-8 ${introDivLineMargin}`} />
            <ul className='flex flex-col'>
              {INTRO_ITEMS.map((item,index) => {
                return (
                  <>
                    <li className='flex flex-row items-center gap-4 ml-1.5 mt-1 mb-1'>
                      <p className='text-sm'><ImPlus /></p>
                      <p className='font-medium text-lg xl:text-base'>{item}</p>
                    </li>
                    {index !== INTRO_ITEMS.length - 1 ? <div className={`h-6 ${introDivLineMargin}`} /> : ''}
                  </>
                )
              })}
            </ul>
            <div className={`h-5 ${introDivLineMargin}`} />
            {/* END OF SHORT INTRO */}

            {/* START OF BUTTON GROUP */}
            <div className='flex flex-row gap-4 mt-6 text-lg xl:text-base'>
            <button className='px-6 py-2 bg-secondary text-text rounded-lg'>View Resume</button>
            <button className='px-6 py-2 bg-primary text-text rounded-lg'>Contact Me</button>
            </div>
            {/* END OF BUTTON GROUP */}

          </div>
          {/* End of Hero Content */}
        </div>

      </div>
    </div>
  )
}

export default Hero