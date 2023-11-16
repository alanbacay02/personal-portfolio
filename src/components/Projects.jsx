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
    description: 'A simple landing page for a travel agency website. This is my first fully fledged project created in React where I learned how to make modular components and dynamically rendered content.',
    technologies: 'React, Tailwindcss, SwiperJS',
    imgSrc: HighLanderImg,
    imgAlt: 'Highlander_Website',
    pageLink: 'https://alanbacay02.github.io/mock-travel-website/',
    githubLink: 'https://github.com/alanbacay02/mock-travel-website'
  },
]

const Projects = () => {
  return (
    <div className="w-full py-14">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center">
          <h1 className='font-bold text-3xl text-text mb-11'>My Projects</h1>
          
          <div className="flex flex-col justify-center gap-10">
            {PROJECT_CARDS.map((item, index) => {
              return (
                <div className='flex flex-col sm:flex-row gap-6 w-fit items-center'>
                  <a href={item.pageLink} target='_blank' rel='noreferrer' className='hover:cursor-pointer'>
                    {/* Start of Motion Div */}
                    <motion.div className="bg-secondary-100 pt-7 px-7 rounded-xl overflow-clip">
                      <motion.img
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        className='h-auto w-96 rounded-t-lg'
                        whileHover={{rotate: 3, scale: 1.08}}
                      />
                    </motion.div>
                    {/* End of Motion Div */}
                  </a>
                  <div className="flex flex-col px-1 sm:px-0 w-[450px]">
                    <div className="flex flex-row items-center mb-3">
                      <h2 className='min-w-fit text-2xl font-medium text-text'>{item.title}</h2>
                      <div className='h-0.5 w-full bg-secondary-300 mt-1 mx-3' />
                      <div className="text-3xl flex flex-row gap-2 mt-1 text-secondary-300">
                        <a href={item.githubLink} target='_blank' rel='noreferrer' className='hover:cursor-pointer hover:text-secondary-500'><FaGithubSquare /></a>
                        <a href={item.pageLink} target='_blank' rel='noreferrer' className='hover:cursor-pointer hover:text-secondary-500'><IoLinkOutline /></a>
                      </div>
                    </div>
                    <p className='font-medium text-xl mb-3 text-primary-600'>{item.technologies}</p>
                    <p className='text-lg font-medium text-secondary-800'>{item.description}</p>
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