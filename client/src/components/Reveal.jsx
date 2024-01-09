import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation, useInView } from 'framer-motion'

export const Reveal = ({ children }) => {
  const revealRef = useRef()

  const isInView = useInView(revealRef, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={revealRef} className='relative w-fit h-fit overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' }
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn'}}
        className='absolute top-1 bottom-1 left-0 right-0 bg-primary dark:bg-darkPrimary z-20'
      />
    </div>
  )
}
// Validates propTypes for Reveal component
Reveal.propTypes = {
  children: PropTypes.element.isRequired // validates thats children is a jsx element
}

export const RevealNoSlider = ({ children }) => {
  const revealRef = useRef()

  const isInView = useInView(revealRef, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={revealRef} className='relative w-fit h-fit inline-block box-border overflow-hidden'>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      {/* <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' }
        }}
        initial='hidden'
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn'}}
        className='absolute top-1 bottom-1 left-0 right-0 bg-primary dark:bg-darkPrimary z-20'
      /> */}
    </div>
  )
}
// Validates propTypes for Reveal component
RevealNoSlider.propTypes = {
  children: PropTypes.element.isRequired // validates thats children is a jsx element
}