import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";

const ProjectCard = () => {
  return (
    <div className='flex flex-col max-w-fit'>
      <div className='h-[200px] w-[350px] bg-secondary'>
        {/* Insert Image here */}
      </div>
      <div className='flex flex-col px-1 pt-2'>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='text-lg font-medium'>Project 1</h3>
          <div className='flex flex-row justify-evenly items-center text-2xl'>
            <FaHtml5 className='fill-orange-400' />
            <FaCss3Alt className='fill-blue-400' />
            <IoLogoJavascript className='fill-yellow-400' />
          </div>
        </div>
        <a href='/#' className='w-fit font-medium text-blue-500 hover:underline'>View Deployment &gt;</a>
      </div>
    </div>
  )
}

const OtherProjectsCarousel = () => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className='embla overflow-hidden' ref={emblaRef}>
      <div className='embla__container flex'>
        <div className='embla__project__slide'>
          <ProjectCard />
        </div>
      </div>
    </div>
  )
}

export default OtherProjectsCarousel