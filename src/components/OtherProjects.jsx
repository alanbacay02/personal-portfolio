import React from 'react'
import OtherProjectsCarousel from './OtherProjectsCarousel'

const OtherProjects = () => {
  return (
    <div className='w-full py-14 sm:py-20'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='flex flex-col items-center justify-center w-full mb-14'>
          <h2 className='font-bold min-w-fit text-2xl sm:text-3xl md:text-4xl text-text mb-1'>Other Projects</h2>
          <p className='text-base sm:text-lg text-center max-w-[85%]'>Pure HTML/CSS Pages, Small React Apps, & More</p>
        </div>

        <OtherProjectsCarousel />
      </div>
    </div>
  )
}

export default OtherProjects