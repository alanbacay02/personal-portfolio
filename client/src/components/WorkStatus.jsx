import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaDoorOpen, FaDoorClosed } from "react-icons/fa";

const WorkStatus = ({ status }) => {
  const [availability, setAvailability] = useState('closed')

  useEffect(() => {
    if (!status) {
      console.error('Wrong argument supplied. WorkStatus.jsx expects any of the following arguments { \'looking\', \'open\', \'closed\' }.')
      setAvailability('closed')
      return
    }

    switch(status) {
      case 'looking':
      setAvailability('looking')
      break
      case 'open':
        setAvailability('open')
        break
      case 'closed':
        setAvailability('closed')
        break
      default:
        console.error('Wrong argument supplied. WorkStatus.jsx expects any of the following parameters { \'looking\', \'open\', \'closed\' }.')
        setAvailability(availability)
    }
  }, [status, availability, setAvailability])


  /**
   * TODO:
   * Refactor JSX to adhere with DRY
   * Replace FaCheckCircle with FaMagnifyingGlass. This icon is missing in package.
   */
  return (
    <>
      {/* Render if availability is 'looking' */}
      { availability === 'looking' && (
        <div className='bg-gray-200 dark:bg-darkSecondary flex flex-row gap-1 items-center rounded-full font-medium text-green-700 dark:text-green-500 w-fit text-[0.775rem] mb-2 px-2 py-0.5 shadow-md shadow-gray-400/70 dark:shadow-green-500/30'>
          <FaCheckCircle />
          <p>Looking for Opportunities</p>
        </div>
      )}
      {/* Render if availability is 'open' */}
      { availability === 'open' && (
        <div className='bg-gray-200 dark:bg-darkSecondary text-blue-500 dark:text-blue-500/80 flex flex-row gap-1 items-center rounded-full font-medium w-fit text-[0.775rem] mb-2 px-2 py-0.5 shadow-md shadow-gray-400/70 dark:shadow-blue-600/30'>
          <FaDoorOpen />
          <p>Open to Opportunities</p>
        </div>
      )}
      {/* Render if availability is 'closed' */}
      { availability === 'closed' && (
        <div className='bg-gray-200 dark:bg-darkSecondary flex flex-row gap-1 items-center rounded-full font-medium text-red-500 dark:text-red-400 w-fit text-[0.775rem] mb-2 px-2 py-0.5 shadow-md shadow-gray-400/70 dark:shadow-red-400/30'>
          <FaDoorClosed />
          <p>Not Seeking Opportunities</p>
        </div>
      )}
    </>
  )
}

export default WorkStatus