import React from 'react'
import OtherProjectsCarousel from './OtherProjectsCarousel'
import { Reveal } from './Reveal'

const OtherProjects = () => {
  return (
    <div className='w-full py-11 sm:py-14 text-text dark:text-darkText'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='flex flex-col items-center justify-center w-full mb-10'>
          <Reveal>
            <h2 className='header'>Other Projects</h2>
          </Reveal>
          <Reveal>
            <p className='sub-header max-w-[85%]'>Pure HTML/CSS Pages, Small React Apps, & More</p>
          </Reveal>
        </div>

        <OtherProjectsCarousel />
      </div>
    </div>
  )
}

export default OtherProjects