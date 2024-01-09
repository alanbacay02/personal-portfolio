import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { motion, useAnimation, useInView } from 'framer-motion'

export const RevealText = ({ children }) => {
  const revealRef = useRef()

  const isInView = useInView(revealRef, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={revealRef} className='relative w-fit h-fit box-border overflow-hidden'>
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
RevealText.propTypes = {
  children: PropTypes.element.isRequired // validates thats children is a jsx element
}

export const RevealImage = ({ children }) => {
  const revealRef = useRef()

  const isInView = useInView(revealRef, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={revealRef} className='relative w-fit h-fit box-border overflow-hidden'>
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
RevealText.propTypes = {
  children: PropTypes.element.isRequired // validates thats children is a jsx element
}