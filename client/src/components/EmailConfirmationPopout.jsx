import React, { useEffect, useRef } from 'react'
import { IoIosCloseCircleOutline, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from 'framer-motion'

export const EmailSuccess = ({ removeConfirmationMessage, handleFormClear }) => {
  const messageSuccessRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeConfirmationMessage() // Function Callback to remove this component after 7s
    }, 7000)

    const handleMouseDown = (e) => {
      if(!messageSuccessRef.current.contains(e.target)) {
        clearTimeout(timer) // Remove timer if user clicks outside ref
        // removeConfirmationMessage() // Callback if user clicks outside ref
      }
    }

    // Adds event listener to project to track 'mousedown' events
    document.addEventListener('mousedown', handleMouseDown)

    // Cleanup function for timer and event listener on component umount
    return () => {
      clearTimeout(timer)
      handleFormClear() // Calls the `handleFormClear` function on component unmount
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [removeConfirmationMessage, handleFormClear])

  return (
    <motion.div
      className='absolute top-0 left-0 w-full h-full flex items-center justify-center'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div
        ref={messageSuccessRef}
        className='w-fit h-fit rounded-lg bg-white dark:bg-slate-800 shadow-lg z-10'
      >
        <div className='flex flex-row items-center gap-1 py-2 px-3 text-green-600 dark:text-green-500 text-sm sm:text-base font-medium'>
          <IoMdCheckmarkCircleOutline />
          <h3>Email Sent!</h3>
        </div>
      </div>

      {/* Div that blurs background */}
      <div className='absolute w-full h-full bg-background/60 dark:bg-darkBackground/60 -z-0' />
    </motion.div>
  )
}

export const EmailFailure = ({ removeConfirmationMessage }) => {
  const messageFailureRef = useRef()

  useEffect(() => {
    const timer = setTimeout(() => {
      removeConfirmationMessage() // Function Callback to remove this component after 7s
    }, 7000)

    const handleMouseDown = (e) => {
      if (!messageFailureRef.current.contains(e.target)) {
        clearTimeout(timer) // Remove timer if user clicks outside ref
        removeConfirmationMessage() // Callback if user clicks outside ref
      }
    }
    // Adds event listener to project to track 'mousedown' events
    document.addEventListener('mousedown', handleMouseDown)

    // Cleanup function for timer and event listener
    return () => {
      clearTimeout(timer) // Removes timer on component unmount
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [removeConfirmationMessage])

  return (
    <motion.div
      className='absolute top-0 left-0 w-full h-full flex items-center justify-center'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div ref={messageFailureRef} className='w-fit h-fit rounded-lg bg-white dark:bg-slate-800 shadow-lg z-10'>
        <div className='flex flex-col items-center py-2 px-3 gap-1 text-base'>
          <div className='flex flex-row items-center gap-1 text-red-600 dark:text-red-500 font-medium'>
            <IoIosCloseCircleOutline />
            <h3>Email Failed to Send</h3>
          </div>
          <p className='text-sm text-gray-500 dark:text-gray-400'>Please try again later</p>
        </div>
      </div>

      {/* Div that blurs background */}
      <div className='absolute w-full h-full bg-background/60 dark:bg-darkBackground/60 -z-0' />
    </motion.div>
  )
}