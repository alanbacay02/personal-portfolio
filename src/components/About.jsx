import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaCode, FaLink } from "react-icons/fa6";
import { LuLightbulb } from "react-icons/lu";

const PARAGRAPH_CONTENT = [
  'I\'m a Computer Engineering graduate from Mariano Marcos State University, passionate about crafting responsive, modular components with React. Proficient in HTML, CSS, and JavaScript, I specialize in creating dynamic, impactful websites using tools like React, TailwindCSS, and Bootstrap 5.',
  'My design journey extends to Figma for UI/UX and crafting assets through Photoshop and Gimp. When not coding, I unwind with video games and a good cup of coffee. I\'m committed to continuous learning and welcome new opportunities that align with my skills and passion.',
  'Open to exciting positions—let\'s connect if you see a potential fit!'
]

const USED_SKILLS = ['React', 'Html', 'CSS', 'Javascript', 'Tailwind', 'Figma', 'Photoshop', 'Gimp', 'GitHub']
const LEARNED_SKILLS = ['Redux', 'Python', 'Java', 'AWS', 'C', 'SASS', 'MATLAB']

const About = () => {
  return (
    <div className='w-full pb-16'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='flex flex-col items-center justify-center w-full mb-14'>
          <h2 className='font-bold min-w-fit text-4xl text-text mb-1'>About Me</h2>
          <p className='text-lg'>An Introduction to Myself</p>
        </div>
        <div className='grid grid-cols-3 space-x-7'>
          {/* Beginning of Skills Container */}
          <div className='col-span-1 flex flex-col px-2 py-7 bg-stone-200/50'>
            <div className='mb-7'>
              <div className='flex flex-row items-center mx-3 mb-3 gap-2'>
                <div className='p-1 bg-primary rounded-sm text-white text-lg'>
                  <FaCode />
                </div>
                <h3 className='font-bold text-xl'>What I Use</h3>
              </div>
              <div className='flex flex-wrap'>
                {USED_SKILLS.map((item, index) => {
                  return (
                    <p key={index} className='px-4 py-2 m-2 font-medium bg-secondary rounded-2xl'>{item}</p>
                  )
                })}
              </div>
            </div>
            <div>
              <div className='flex flex-row items-center mx-3 mb-3 gap-2'>
                <div className='p-1 bg-primary rounded-sm text-white text-lg'>
                  <LuLightbulb />
                </div>
                <h3 className='font-bold text-xl'>What I Have Learned</h3>
              </div>
              <div className='flex flex-wrap'>
                {LEARNED_SKILLS.map((item, index) => {
                  return (
                    <p key={index} className='px-4 py-2 m-2 font-medium bg-secondary rounded-2xl'>{item}</p>
                  )
                })}
              </div>
            </div>

          </div>
          {/* End of Skills Container */}
          <div className='col-span-2 text-lg mt-6'>
            {PARAGRAPH_CONTENT.map((item, index) => {
              return (
                <p className='mb-5'>
                  {item}
                </p>
              )
            })}
            <div className='flex flex-row gap-3 mt-7 items-end'>
              <div className='flex flex-row gap-2 text-3xl text-gray-400'>
                <a href='https://www.linkedin.com/in/alan-neale-bacay-ii-60aa48258/' target='_blank' rel='noreferrer' className='hover:text-primary transition-colors duration-300'><FaLinkedin /></a>
                <a href='https://github.com/alanbacay02' target='_blank' rel='noreferrer' className='hover:text-primary transition-colors duration-300'><FaGithubSquare /></a>
              </div>
              <div className='w-fit text-lg text-primary  hover:cursor-pointer hover:underline hover:underline-offset-2 transtion-all duration-300'>
                <a href='mailto:alanjbacay@gmail.com' className='flex flex-row items-center gap-1'>
                  <p>Let's Connect!</p>
                  <i><FaLink /></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About