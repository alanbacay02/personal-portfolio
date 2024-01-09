import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { HtmlSvgIcon } from '../svg-components/IconSVG';
import { Reveal } from './Reveal'
import { motion, useAnimation, useInView } from 'framer-motion'

const parentVariants = {
  visible: {
    delay: 0.5, // Add a short delay before triggering this transition
    transition: { 
      when: "beforeChildren", // Trigger children animations after transition
      staggerChildren: 0.1, // Step interval for staggering
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 55 },
  visible: { opacity: 1, y: 0 }
}

// Creates a function component `ProjectCard` to create a card for each project
const OtherProjectCard = ({ title, languages, deployLink, projectImg }) => {
  // Spreads `languages` into `LangCompArray` if props `languages` is an array and is not empty, assigns <HtmlSvgIcon /> if else
  let LangCompArray = Array.isArray(languages) && languages.length > 0 ? [...languages] : [<HtmlSvgIcon />]
  const svgParentRef = useRef()

  // Checks if referenced element is in viewport using `useInView()`
  const isInView = useInView(svgParentRef, { once: true })

  // Initializing controls for main animation using `useAnimation()` hook
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])



  return (
    <div className='flex flex-col w-[90%] max-w-[330px] mx-auto text-text dark:text-darkText'>
      <a href={deployLink} target='_blank' rel='noreferrer' className='group hover:cursor-pointer'>
        <div className='h-full max-h-[215px] w-full overflow-clip shadow-md'>
          <Reveal>
            <img src={projectImg} alt={title} className='object-cover object-center group-hover:scale-105 transition-all duration-300' />
          </Reveal>
        </div>
      </a>
      <div className='flex flex-col w-full px-1 pt-2'>
        <div className='flex flex-row items-center justify-between'>
          <Reveal>
            <h3 className='text-sm sm:text-base font-medium'>{title}</h3>
          </Reveal>
          <motion.div
            ref={svgParentRef}
            variants={parentVariants}
            initial='hidden'
            animate={mainControls}
            className='flex flex-row justify-evenly items-center gap-1'
          >
              {/* Maps over `LangCompArray` to return Svg Icon Components */}
              {LangCompArray.map((item, index) => {
                return (
                  <motion.i
                    key={index}
                    variants={childVariants}
                    className='h-[26px] sm:h-[29px] md:h-[32px]'>
                      {item}
                  </motion.i>
                )
              })}
          </motion.div>
        </div>
        <Reveal>
          <a href={deployLink} target='_blank' rel='noreferrer' className='w-fit text-xs sm:text-sm font-medium text-blue-500 dark:text-sky-500 hover:underline'>View Deployment &gt;</a>
        </Reveal>
      </div>
    </div>
  )
}
// Defines default props for `OtherProjectCard` if props are undefined or empty
OtherProjectCard.defaultProps = {
  title: 'Undefined Project',
  languages: [],
  deployLink: ''
}
// Validates propTypes for `OtherProjectCard`
OtherProjectCard.propTypes = {
  title: PropTypes.string,
  languages: PropTypes.array,
  deployLink: PropTypes.string
}

export default OtherProjectCard