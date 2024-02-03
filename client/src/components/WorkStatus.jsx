import React, { useEffect, useState } from 'react'
import { FaCheckCircle, FaMinusCircle, FaTimesCircle } from "react-icons/fa";

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


  return (
    <>
      {/* Render if availability is 'looking' */}
      { availability === 'looking' && (
        <div className='bg-gray-200 dark:bg-darkSecondary flex flex-row gap-1 items-center rounded-full font-medium text-green-700 dark:text-green-500 w-fit text-xs mb-2 px-2 py-0.5'>
          <FaCheckCircle />
          <p>Looking for Remote Work</p>
        </div>
      )}
      {/* Render if availability is 'open' */}
      { availability === 'open' && (
        <div className='bg-gray-200 dark:bg-darkSecondary flex flex-row gap-1 items-center rounded-full font-medium text-orange-500 dark:text-orange-400 w-fit text-xs mb-2 px-2 py-0.5'>
          <FaMinusCircle />
          <p>Open to Opportunities</p>
        </div>
      )}
      {/* Render if availability is 'closed' */}
      { availability === 'closed' && (
        <div className='bg-gray-200 dark:bg-darkSecondary flex flex-row gap-1 items-center rounded-full font-medium text-red-600 dark:text-red-400 w-fit text-xs mb-2 px-2 py-0.5'>
          <FaTimesCircle />
          <p>Not Seeking Opportunities</p>
        </div>
      )}
    </>
  )
}

export default WorkStatus