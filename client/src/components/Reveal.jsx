import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation, useInView } from 'framer-motion'

export const Reveal = ({ children }) => {
  // Creates a reference to an element using `useRef()`
  const revealRef = useRef()

  // Checks if referenced element is in viewport using `useInView()`
  const isInView = useInView(revealRef, { once: true })

  // Initializing controls for main animation using `useAnimation()` hook
  const mainControls = useAnimation()

  // Initializing controls for slide animation using `useAnimation()` hook
  const slideControls = useAnimation()

  // Using `useEffect()` hook to trigger animations when reference animation is in viewport
  useEffect(() => {

    // Checks if element is in view
    if (isInView) {
      // Starts main animation when element is in view
      mainControls.start('visible')
      // Starts slide animation when element is in view
      slideControls.start('visible')
    }
    // Dependency array with variables that trigger the effect when changed
  }, [isInView, mainControls, slideControls])

  return (
    <div ref={revealRef} className='relative w-fit h-fit overflow-y-clip'>
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
  children: PropTypes.element.isRequired // validates that children is a jsx element
}

export const RevealNoSlider = ({ children }) => {
  // Creates a reference to an element using `useRef()`
  const noSlideRevealRef = useRef()

  // Checks if referenced element is in viewport using `useInView()`
  const isInView = useInView(noSlideRevealRef, { once: true })

  // Initializing controls for main animation using `useAnimation()` hook
  const mainControls = useAnimation()

  // Using `useEffect()` hook to trigger animations when reference animation is in viewport
  useEffect(() => {
    // Checks if element is in view
    if (isInView) {
      // Starts main animation when element is in view
      mainControls.start('visible')
    }
    // Dependency array with variables that trigger the effect when changed
  }, [isInView, mainControls])

  return (
    <div ref={noSlideRevealRef} className='w-fit h-fit overflow-hidden'>
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
    </div>
  )
}
// Validates propTypes for RevealNoSLider component
RevealNoSlider.propTypes = {
  children: PropTypes.element.isRequired // validates that children is a jsx element
}