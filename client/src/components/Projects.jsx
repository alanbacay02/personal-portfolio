import React from 'react'
import { IoLinkOutline } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import HighLanderImg from '../assets/HighlanderImg.png'
import OrionImg from '../assets/OrionImg.png'
import { motion } from 'framer-motion'
import { Reveal } from './Reveal';

const PROJECT_CARDS = [
  {
    title: 'Orion Landing Page',
    description: 'A mock landing page for a Cloud Hosting company. For this website, I wanted to experiment designing sleek and minimalistic components that gives a modern feel, such as how technology is modernizing at a fast pace.',
    technologies: 'React, Tailwindcss, Framer Motion, Embla Carousel',
    imgSrc: OrionImg,
    imgAlt: 'Orion_Website',
    pageLink: 'https://alanbacay02.github.io/rocket/',
    githubLink: 'https://github.com/alanbacay02/rocket'
  },
  {
    title: 'Highlander Landing Page',
    description: 'A simple landing page for a travel agency website. This is my first fully fledged front-end project created in React where I learned how to make modular components and dynamically rendered content, while learning how to leverage powerful packages for React.',
    technologies: 'React, Tailwindcss, SlickJS',
    imgSrc: HighLanderImg,
    imgAlt: 'Highlander_Website',
    pageLink: 'https://alanbacay02.github.io/mock-travel-website/',
    githubLink: 'https://github.com/alanbacay02/mock-travel-website'
  },
]

const Projects = () => {
  return (
    <div id='projects' className="w-full py-11 sm:py-14 text-text dark:text-darkText">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className='flex flex-col items-center justify-center w-full mb-10'>
          <Reveal>
            <h2 className='font-bold min-w-fit text-lg sm:text-xl md:text-2xl mb-1'>My Projects</h2>
          </Reveal>
          <Reveal>
            <p className='md:text-lg'>Featured Projects</p>
          </Reveal>
        </div>
        <div className="flex flex-col items-center justify-center w-full mx-auto">
          <div className="grid md:grid-cols-2 w-full gap-16">
            {PROJECT_CARDS.map((item, index) => {
              return (
                <div key={index} className='flex flex-col gap-6 w-fit items-center max-w-[550px] mx-auto'>
                    {/* Start of Motion Div */}
                    <Reveal>
                      <motion.div className="bg-gray-200 dark:bg-darkSecondary pt-3 px-3 xs:pt-7 xs:px-7 rounded-xl overflow-clip">
                        <a href={item.pageLink} target='_blank' rel='noreferrer' className='hover:cursor-pointer'>
                          <motion.div
                            initial={{ translateY: 6 }}
                            whileHover={{ rotate: 3, scale: 1.05 }}
                          >
                            <img
                              src={item.imgSrc}
                              alt={item.imgAlt}
                              className='h-auto w-full rounded-t-lg pointer-events-none'
                            />
                          </motion.div>
                        </a>
                      </motion.div>
                    </Reveal>
                    {/* End of Motion Div */}
                  <div className="flex flex-col px-2 w-auto">
                    <div className="flex flex-row items-center mb-3">
                      <Reveal>
                        <h2 className='text-lg sm:text-xl font-medium'>{item.title}</h2>
                      </Reveal>
                      <div className='flex-grow h-0.5 bg-secondary mt-1 mx-3' />
                      <div className="text-3xl flex flex-row gap-2 mt-1 text-gray-400 dark:text-gray-300">
                        <a href={item.githubLink} target='_blank' rel='noreferrer' className='hover:cursor-pointer hover:text-primary dark:hover:text-darkPrimary hover:scale-110 transition-all duration-300'><FaGithubSquare /></a>
                        <a href={item.pageLink} target='_blank' rel='noreferrer' className='hover:cursor-pointer hover:text-primary dark:hover:text-darkPrimary hover:scale-110 transition-all duration-300'><IoLinkOutline /></a>
                      </div>
                    </div>
                    <Reveal>
                      <p className='text-sm sm:text-base font-medium mb-3 text-sky-600 dark:text-sky-400'>{item.technologies}</p>
                    </Reveal>
                    <Reveal>
                      <p className='paragraph'>{item.description}</p>
                    </Reveal>
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