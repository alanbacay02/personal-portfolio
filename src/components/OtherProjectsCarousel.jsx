import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const OtherProjectsCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className='embla overflow-hidden w-fit h-fit' ref={emblaRef}>
      <div className='embla__container flex'>
        <div className='embla__project__slide'>
          slide 1
        </div>
      </div>
    </div>
  )
}

export default OtherProjectsCarousel