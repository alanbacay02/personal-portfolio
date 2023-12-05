import React from 'react'
import { IoLinkOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import HighLanderImg from '../assets/HighlanderImg.png'
import OrionImg from '../assets/OrionImg.png'
import { motion } from 'framer-motion'

const PROJECT_CARDS = [
  {
    title: 'Orion Landing Page',
    description: 'A mock landing page for a Cloud Hosting company. For this website, I wanted to experiment designing sleek and minimalistic components that gives a modern feel, such as how technology is modernizing at a fast pace.',
    technologies: 'React, Tailwindcss, Framer Motion, SlickJS',
    imgSrc: OrionImg,
    imgAlt: 'Orion_Website',
    pageLink: 'https://alanbacay02.github.io/rocket/',
    githubLink: 'https://github.com/alanbacay02/rocket'
  },
  {
    title: 'Highlander Landing Page',
    description: 'A simple landing page for a travel agency website. This is my first fully fledged front-end project created in React where I learned how to make modular components and dynamically rendered content, while learning how to leverage powerful packages for React.',
    technologies: 'React, Tailwindcss, SwiperJS',
    imgSrc: HighLanderImg,
    imgAlt: 'Highlander_Website',
    pageLink: 'https://alanbacay02.github.io/mock-travel-website/',
    githubLink: 'https://github.com/alanbacay02/mock-travel-website'
  },
]

const Projects = () => {
  return (
    <div className="w-full py-16">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className='flex flex-col items-center justify-center w-full mb-14'>
          <h1 className='font-bold min-w-fit text-3xl text-text mb-1'>My Projects</h1>
          <p className='text-lg'>Featured Projects</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full mx-auto">
          {/* <div className='flex flex-row items-center w-full mb-11'>
            <div className='h-0.5 w-[10%] bg-secondary mt-1 mx-3'/>
            <h1 className='font-bold min-w-fit text-3xl text-text'>My Projects</h1>
            <div className='h-0.5 w-full bg-secondary mt-1 mx-3'/>
          </div> */}
          <div className="grid grid-cols-2 w-full gap-16">
            {PROJECT_CARDS.map((item, index) => {
              return (
                <div className='flex flex-col gap-6 w-fit items-center'>
                    {/* Start of Motion Div */}
                    <motion.div className="bg-gray-200 pt-7 px-7 rounded-xl overflow-clip">
                      <a href={item.pageLink} target='_blank' rel='noreferrer' className='hover:cursor-pointer'>
                        <motion.img
                          src={item.imgSrc}
                          alt={item.imgAlt}
                          className='h-auto w-full rounded-t-lg'
                          initial={{translateY: 6}}
                          whileHover={{rotate: 3, scale: 1.05}}
                        />
                      </a>
                    </motion.div>
                    {/* End of Motion Div */}
                  <div className="flex flex-col px-2 w-auto">
                    <div className="flex flex-row items-center mb-3">
                      <h2 className='w-full xs:min-w-fit text-lg sm:text-xl md:text-2xl font-medium text-text'>{item.title}</h2>
                      <div className='h-0.5 w-[30%] xs:w-full bg-secondary mt-1 mx-3' />
                      <div className="text-2xl md:text-3xl flex flex-row gap-2 mt-1 text-gray-400">
                        <a href={item.githubLink} target='_blank' rel='noreferrer' className='hover:cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300'><FaGithubSquare /></a>
                        <a href={item.pageLink} target='_blank' rel='noreferrer' className='hover:cursor-pointer hover:text-primary hover:scale-110 transition-all duration-300'><IoLinkOutline /></a>
                      </div>
                    </div>
                    <p className='text-base sm:text-lg md:text-xl font-medium mb-3 text-sky-600'>{item.technologies}</p>
                    <p className='text-base sm:text-lg text-secondary-800'>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects