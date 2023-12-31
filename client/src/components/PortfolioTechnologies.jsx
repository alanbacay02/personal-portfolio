import React, { useEffect, useState } from 'react'
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
      repeatDelay: 4
    }
  }
}

const PortfolioTechnologies = () => {
  const [svgIconIsHovered, setSvgIconIsHovered] = useState(false)

  useEffect(() => {
    // Set up an Intersection Observer to track changes in visibility
    const observer = new IntersectionObserver( entries => {
      // Iterate through each entry observer by the Intersection Observer
      entries.forEach(entry => {
        // Check if the observer element is intersecting the observer
        if (entry.isIntersecting) {
          // Add 'in-view' class to the card container when it's in view
          setSvgIconIsHovered(false)
        }
      })
    }, {
      // Set the threshold for intersection to trigger at 50% visibility
      threshold: 0.5
    })

    // Selects element with `svg-icons-container` id
    const svgContainer = document.querySelector('#svg-icons-container')

    // Start observing the svg icons container
    observer.observe(svgContainer)

    return () => {
      observer.disconnect() // Cleans up observer on component unmounting
    }
  }, [])

  const hideElement = () => {
    setSvgIconIsHovered(true)
  }

  return (
    <div className='w-full py-12 bg-gray-200 dark:bg-slate-900 text-text dark:text-darkText my-6'>
      <div className='w-full max-w-[1200px] mx-auto px-4'>
        <div className='grid md:grid-cols-2 items-center'>
          <div className='mb-5 md:m-0 flex flex-col text-center md:text-left'>
            <h1 className='font-bold text-xl sm:text-2xl mb-2'>This website was built with these technologies.</h1>
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
          </div>
          <div className='relative'>
            <div id='svg-icons-container' className='flex flex-row items-center justify-evenly gap-2  '>
              {TECH_STACK_SVG.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`group hover:cursor-pointer relative overflow-y-clip pb-5 w-auto h-20 ${item.tailwindStyle}`}
                    // Calls this functon when mouse hovers over element
                    onMouseOver={hideElement}
                    // Calls this function when mouse/tap selects element
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
              className='absolute -bottom-6 left-0 right-0 w-fit mx-auto font-medium text-xs'
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