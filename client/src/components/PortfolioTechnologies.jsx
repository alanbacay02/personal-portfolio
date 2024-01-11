import React, { useEffect, useRef, useState } from 'react'
import { ExpressSvg, NodeSVG, ReactSvgIcon, TailwindSvgIcon } from '../svg-components/IconSVG'
import {motion, useAnimation, useInView} from 'framer-motion'
import { Reveal } from './Reveal'

const TECH_STACK_SVG = [
  {
    svgComponent: <ReactSvgIcon />,
    tailwindStyle: '',
    iconLabel: 'ReactJS'
  },
  {
    svgComponent: <TailwindSvgIcon />,
    tailwindStyle: '',
    iconLabel: 'Tailwind'
  },
  {
    svgComponent: <NodeSVG />,
    tailwindStyle: 'dark:fill-darkText',
    iconLabel: 'NodeJS'
  },
  {
    svgComponent: <ExpressSvg />,
    tailwindStyle: 'dark:fill-darkText',
    iconLabel: 'Express'
  }
]

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
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0 }
}


// Creates framer motion variant `bounceVariant` for bounce animations
const bounceVariants = {
  start: {
    y: 0
  },
  bounce: {
    y: [0, -6, 2, 0],
    transition: {
      repeat: Infinity,
      repeatDelay: 4
    }
  }
}

const PortfolioTechnologies = () => {
  const [svgIconIsHovered, setSvgIconIsHovered] = useState(false)
  const iconParentRef = useRef()

  // Checks if referenced element is in viewport using `useInView()`
  const isInView = useInView(iconParentRef, { once: true })
  const repeatedInView = useInView(iconParentRef, { once: false})

  // Initializing controls for main animation using `useAnimation()` hook
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }

    if (repeatedInView) {
      setSvgIconIsHovered(false)
    }

  }, [isInView, repeatedInView])

  const hideElement = () => {
    setSvgIconIsHovered(true)
  }

  return (
    <div className='w-full py-12 bg-gray-200 dark:bg-slate-900 text-text dark:text-darkText my-6'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='grid md:grid-cols-2 items-center'>
          <div className='mb-5 md:m-0 flex flex-col items-center md:items-start text-center md:text-left'>
            <Reveal>
              <h1 className='font-bold text-xl sm:text-2xl mb-2'>This website was built with these technologies.</h1>
            </Reveal>
            <Reveal>
              <div className='w-full flex flex-col xs:flex-row items-center justify-center md:justify-start text-sm text-gray-500 dark:text-gray-400'>
                <p className='mb-1 xs:m-0'>
                  Hosted with{' '}
                  <a
                    href='https://vercel.com/home'
                    target='_blank'
                    rel='noreferrer'
                    className='text-text dark:text-darkText hover:underline'
                  >
                    Vercel
                  </a>
                  .
                </p>
                <p className='pl-1'>
                  View on{' '}
                  <a
                    href='https://github.com/alanbacay02/personal-portfolio'
                    target='blank'
                    rel='noreferrer'
                    className='text-text dark:text-darkText hover:underline'
                  >
                    Github
                  </a>
                  .
                </p>
              </div>
            </Reveal>
          </div>
          <div className='relative'>
            <motion.div
              ref={iconParentRef}
              variants={parentVariants}
              initial='hidden'
              animate={mainControls}
              id='svg-icons-container'
              className='flex flex-row items-center justify-evenly gap-2'
            >
              {TECH_STACK_SVG.map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    variants={childVariants}
                    className={`group hover:cursor-pointer relative overflow-y-clip pb-5 w-auto h-20 ${item.tailwindStyle}`}
                    // Calls this functon when mouse hovers over element
                    onMouseOver={hideElement}
                    // Calls this function when mouse/tap selects element
                    onMouseDown={hideElement}
                  >
                    {item.svgComponent}
                    <p
                      className='absolute -bottom-5 left-0 right-0 w-fit mx-auto font-medium text-sm text-text dark:text-darkText group-hover:bottom-0 group-focus:bottom-0 transition-all duration-300'
                    >
                      {item.iconLabel}
                    </p>
                  </motion.div>
                )
              })}
            </motion.div>
            <motion.div
              variants={bounceVariants}
              initial='start'
              animate={svgIconIsHovered ? {opacity: 0} : 'bounce'}
              className='absolute -bottom-6 left-0 right-0 w-fit mx-auto font-medium text-sm'
            >
              <p className='hidden md:block'>Hover to View Names</p>
              <p className='md:hidden'>Tap to View Names</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioTechnologies