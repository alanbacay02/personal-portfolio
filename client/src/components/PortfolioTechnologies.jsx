import React, { useState } from 'react'
import { ExpressSvg, NodeSVG, ReactSvgIcon, TailwindSvgIcon } from '../svg-components/IconSVG'
import {motion} from 'framer-motion'

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

// Creates framer motion variant `bounceVariant` for bounce animations
const bounceVariants = {
  start: {
    y: 0
  },
  bounce: {
    y: [0, -6, 2, 0],
    transition: {
      repeat: Infinity,
      repeatDelay: 5
    }
  }
}

const PortfolioTechnologies = () => {
  const [svgIconIsHovered, setSvgIconIsHovered] = useState(false)

  const hideElement = () => {
    setSvgIconIsHovered(true)
  }

  return (
    <div className='w-full py-12 bg-gray-200 dark:bg-slate-900 text-text dark:text-darkText'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='grid md:grid-cols-2 items-center'>
          <div className='mb-5 md:m-0 flex flex-col text-center md:text-left'>
            <h1 className='font-bold text-xl sm:text-2xl mb-2'>This website was built with these technologies.</h1>
            <div className='w-full flex flex-row items-center justify-center md:justify-start text-sm text-gray-500 dark:text-gray-400'>
              <p>
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
          </div>
          <div className='relative'>
            <div className='flex flex-row items-center justify-evenly gap-4'>
              {TECH_STACK_SVG.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`group hover:cursor-pointer relative overflow-clip pb-5 w-auto h-20 ${item.tailwindStyle}`}
                    onMouseOver={hideElement}
                    onMouseDown={hideElement}
                  >
                    {item.svgComponent}
                    <p
                      className='absolute -bottom-5 left-0 right-0 w-fit mx-auto font-medium text-xs text-text dark:text-darkText group-hover:bottom-0 group-focus:bottom-0 transition-all duration-300'
                    >
                      {item.iconLabel}
                    </p>
                  </div>
                )
              })}
            </div>
            <motion.div
              variants={bounceVariants}
              initial='start'
              animate={svgIconIsHovered ? {opacity: 0} : 'bounce'}
              className='absolute -bottom-6 left-0 right-0 w-fit mx-auto text-xs'
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