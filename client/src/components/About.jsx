import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaCode, FaLink } from "react-icons/fa6";
import { LuLightbulb } from "react-icons/lu";
import { Reveal } from './Reveal';

const PARAGRAPH_CONTENT = [
  'I\'m a Computer Engineering graduate from Mariano Marcos State University, deeply passionate about crafting responsive, modular components with React. My proficiency extends beyond front-end development, as I have an understanding of back-end technologies, including REST APIs, NodeJS, ExpressJS, and MongoDB.',
  'Along with my extensive knowledge of HTML, CSS, and JavaScript, I specialize in creating dynamic, impactful websites that seamlessly integrate front-end components with server-side functionalities.',
  'My design journey extends to Figma for UI/UX and crafting assets through Photoshop and Gimp. When not coding, I unwind with video games and a good cup of coffee. I\'m committed to continuous learning and welcome new opportunities that align with my skills and passion.',
  'Open to exciting positions - let\'s connect if you see a potential fit!'
]

const USED_SKILLS = ['React', 'Html', 'CSS', 'Javascript', 'Tailwind', 'NodeJS', 'ExpressJS', 'MongoDB', 'REST APIs', 'Figma', 'Photoshop', 'Gimp', 'GitHub']
const LEARNED_SKILLS = ['Redux', 'Python', 'Java', 'MATLAB', 'C', 'SASS', 'AWS']

const About = () => {
  return (
    <div id='about' className='w-full py-11 sm:pb-14'>
      <div className='w-full max-w-[1200px] mx-auto px-4 text-text dark:text-darkText'>
        <div className='flex flex-col items-center justify-center w-full mb-10'>
          <Reveal>
            <h2 className='header'>About Me</h2>
          </Reveal>
          <Reveal>
            <p className='sub-header'>An Introduction to Myself</p>
          </Reveal>
        </div>
        <div className='grid md:grid-cols-3 gap-14 md:gap-7 items-center'>
          {/* Beginning of Skills Container*/} 
          <div className='sm:min-w-[250px] h-full row-start-2 md:row-start-1 flex flex-col p-3 bg-stone-200/50 dark:bg-gray-900'>
            <Reveal>
              <div id='skill-container-1' className='mb-7'>
                <div className='flex flex-row items-center mb-3 gap-2'>
                  <div className='p-1 bg-primary dark:bg-primary rounded-sm text-darkText text-sm'>
                    <FaCode />
                  </div>
                  <h3 className='font-bold text-sm'>What I Use</h3>
                </div>
                <div className='flex flex-wrap text-sm'>
                  {USED_SKILLS.map((item, index) => {
                    return (
                      <p key={index} className='px-3 py-1 my-2 mr-2 font-medium bg-secondary dark:bg-darkSecondary rounded-2xl'>{item}</p>
                    )
                  })}
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div id='skill-container-2'>
                <div className='flex flex-row items-center mb-3 gap-2'>
                  <div className='p-1 bg-primary rounded-sm text-darkText text-sm'>
                    <LuLightbulb />
                  </div>
                  <h3 className='font-bold text-sm'>What I Have Learned</h3>
                </div>
                <div className='flex flex-wrap text-sm'>
                  {LEARNED_SKILLS.map((item, index) => {
                    return (
                      <p key={index} className='px-3 py-1 my-2 mr-2  font-medium bg-secondary dark:bg-darkSecondary rounded-2xl'>{item}</p>
                    )
                  })}
                </div>
              </div>
            </Reveal>
          </div>
          {/* End of Skills Container */}

          {/* About Me Paragraph */}
          <div className='md:col-span-2 paragraph'>
            {PARAGRAPH_CONTENT.map((item, index) => {
              return (
                <Reveal key={index}>
                  <p className='paragraph mb-5'>
                    {item}
                  </p>
                </Reveal>
              )
            })}
            <div className='flex flex-row gap-3 mt-7 items-end'>
              <div className='flex flex-row gap-1 text-3xl text-gray-400 dark:text-gray-300'>
                <Reveal>
                  <a href='https://www.linkedin.com/in/alanbacay/' target='_blank' rel='noreferrer' className='hover:text-primary transition-colors duration-300'><FaLinkedin /></a>
                </Reveal>
                <Reveal>
                  <a href='https://github.com/alanbacay02' target='_blank' rel='noreferrer' className='hover:text-primary transition-colors duration-300'><FaGithubSquare /></a>
                </Reveal>
              </div>
              <div className='w-fit text-base font-medium text-primary dark:text-darkPrimary  hover:cursor-pointer hover:underline hover:underline-offset-2 transtion-all duration-300'>
                <Reveal>
                  <a href='mailto:alanjbacay@gmail.com' className='flex flex-row items-center gap-1'>
                    <p>Let's Connect!</p>
                    <i><FaLink /></i>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
          {/* End of About Me Paragraph */}
        </div>
      </div>
    </div>
  )
}

export default About