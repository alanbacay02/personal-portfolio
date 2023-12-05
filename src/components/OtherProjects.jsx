import React from 'react'
import OtherProjectsCarousel from './OtherProjectsCarousel'

const OtherProjects = () => {
  return (
    <div className='w-full py-16'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='flex flex-col items-center justify-center w-full mb-14'>
          <h2 className='font-bold min-w-fit text-4xl text-text mb-1'>Other Projects</h2>
          <p className='text-lg'>Pure HTML/CSS Pages, Small React Apps, & More</p>
        </div>

        <OtherProjectsCarousel />
      </div>
    </div>
  )
}

export default OtherProjects