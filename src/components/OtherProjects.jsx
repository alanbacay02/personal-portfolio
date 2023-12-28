import React from 'react'
import OtherProjectsCarousel from './OtherProjectsCarousel'

const OtherProjects = () => {
  return (
    <div className='w-full py-11 sm:py-14'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='flex flex-col items-center justify-center w-full mb-10'>
          <h2 className='header'>Other Projects</h2>
          <p className='sub-header max-w-[85%]'>Pure HTML/CSS Pages, Small React Apps, & More</p>
        </div>

        <OtherProjectsCarousel />
      </div>
    </div>
  )
}

export default OtherProjects