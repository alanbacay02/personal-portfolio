import React, { useState } from 'react'
import PrivacyPolicyModal from './PrivacyPolicyModal'
import axios from 'axios'
import { EmailFailure, EmailSuccess } from './EmailConfirmationPopout'
import { AnimatePresence } from 'framer-motion'

// Tailwind Styles
const formLabelStyle = 'text-sm font-medium px-2 mb-2 text-gray-400 dark:text-gray-300'
const inputFieldStyle = 'text-sm border border-secondary dark:border-none rounded-md bg-background dark:bg-darkSecondary py-1 px-2 text-sm sm:text-base text-text dark:text-darkText focus:outline-none focus:shadow-xl'

const EmailForm = () => {
  // State use to track `privacyPolicyModal` shown state
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  // State used to track changes to name field
  const [name, setName] = useState('')
  // State used to track changes to email address field
  const [emailAddress, setEmailAddress] = useState('')
  // State used to track changes to policy checkbox
  const [isChecked, setIsChecked] = useState(false)
  // State used to track changes to message field
  const [message, setMessage] = useState('')
  // State used to track if Email is sent successfully
  const [emailSent, setEmailSent] = useState(null)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      // Make a POST request to Express server endpoint
      const response = await axios.post('https://personal-portfolio-server-theta.vercel.app/submitForm', {
        name: name,
        email: emailAddress,
        message: message,
      });

      // Handle successful response
      console.log('Form submitted successfully!', response.data);
      setEmailSent('success') // Sets value of `emailSent` state to 'success'
    } catch (error) {
      // Handle error if the request fails
      console.error('Error submitting form:', error);
      setEmailSent('failure') // Sets value of `emailSent` state to 'fail'
    }
  }

  const handleFormClear = () => { // Function to clear email form when called
    setName('') // Clears `name` state
    setEmailAddress('') // Clears `emailAddress` state
    setIsChecked(false) // Sets `isChecked` state to false
    setMessage('') // Clears `message` state
  }

  const removeConfirmationMessage = () => {
    setEmailSent(null)  // Sets `emailSent` to null when function is called
  }

  return (
    <div className='relative  w-full max-w-[400px] md:max-w-[550px]'>
      <form onSubmit={handleFormSubmit} className='flex flex-col justify-center'>
        {/* NAME FIELD */}
        <div className='flex flex-col mb-4'>
          <label
            htmlFor='name_field'
            className={formLabelStyle}>
              Name (Optional)
          </label>
          <input
            id='name_field'
            type='text'
            placeholder='Your name here'
            className={inputFieldStyle}
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
        </div>
        {/* EMAIL FIELD */}
        <div className='flex flex-col mb-4'>
          <label
            htmlFor='email_field'
            className={formLabelStyle}>
              Email
          </label>
          <input
            id='email_field'
            type='email'
            placeholder='Your email here'
            className={inputFieldStyle}
            value={emailAddress}
            onChange={(e) => {setEmailAddress(e.target.value)}}
            required
          />
        </div>
        {/* TEXT FIELD */}
        <div className='flex flex-col mb-5'>
          <label htmlFor='message_field' className={formLabelStyle}>Message</label>
          <textarea
            name='message_field'
            rows={10}
            placeholder='Enter message here...'
            className={`resize-none ${inputFieldStyle}`}
            value={message}
            onChange={(e) => {setMessage(e.target.value)}}
            required
          />
        </div>
        {/* AGREEMENT FIELD */}
        <div className='flex flex-row gap-2 items-center ml-2.5 mb-3'>
          <label htmlFor='form_agreement' className='sr-only'>I have read and agree to the Privacy Policy.</label>
          <input
            id='form_agreement'
            type='checkbox'
            className='text-lg w-3 h-3 hover:cursor-pointer'
            checked={isChecked}
            onChange={() => {setIsChecked(!isChecked)}}
            required
          />
          <p className='text-sm'>I have read and agree to the <span onClick={() => {setShowPrivacyModal(!showPrivacyModal)}} className='hover:cursor-pointer hover:underline text-accent dark:text-darkPrimary'>Privacy Policy</span>.</p>
        </div>
        {/* SUBMIT BUTTON */}
        <div className='ml-2'>
          <label htmlFor='submit_button' className='sr-only'>Send Email</label>
          <input
            id='submit_button'
            type='submit'
            // className='font-medium text-lg text-white rounded-lg py-2 px-5 bg-primary hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300'
            className='font-medium text-lg text-gray-300 dark:text-gray-600 rounded-lg py-2 px-5 bg-gray-400 dark:bg-gray-800 transition-colors duration-300'
            value='Send Email'
            disabled
          />
        </div>
      </form>
      {/* Mounts `PrivacyPolicyModal` when `showPrivacyModal` is set to true */}
      { showPrivacyModal &&
        <PrivacyPolicyModal
          showPrivacyModal={showPrivacyModal}
          setShowPrivacyModal={setShowPrivacyModal}
        />
      }

      {/* `AnimatePrescence` animates children Motion components when mounting or unmounting */}
      <AnimatePresence>
        {/* Mounts component if `emailSent` is set to success */}
        {emailSent === 'success' &&
          <EmailSuccess
            removeConfirmationMessage={removeConfirmationMessage}
            handleFormClear={handleFormClear}
          />
        }
        {/* Mounts component if `emailSent` is set to 'failure' */}
        {emailSent === 'failure' && 
          <EmailFailure
            removeConfirmationMessage={removeConfirmationMessage}
          />
        }
      </AnimatePresence>
    </div>
  )
}

export default EmailForm