import React, { useState } from 'react'
import PrivacyPolicyModal from './PrivacyPolicyModal'

const formLabelStyle = 'text-base sm:text-lg font-medium px-2 mb-2 text-gray-400'
const inputFieldStyle = 'border border-secondary rounded-md bg-background py-1 px-2 text-sm sm:text-base focus:outline-secondary focus:shadow-xl'

const EmailForm = () => {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  return (
    <div className='w-full max-w-[400px] md:max-w-[550px]'>
      <form className='flex flex-col justify-center'>
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
            required
          />
        </div>
        {/* AGREEMENT FIELD */}
        <div className='flex flex-row gap-2 items-center ml-2.5 mb-3'>
          <label htmlFor='form_agreement' className='sr-only'>I have read and agree to the Privacy Policy.</label>
          <input
            id='form_agreement'
            type='checkbox'
            className='text-lg w-4 h-4'
            required
          />
          <p className='text-sm sm:text-base'>I have read and agree to the <span onClick={() => {setShowPrivacyModal(!showPrivacyModal)}} className='hover:cursor-pointer hover:underline text-accent'>Privacy Policy</span>.</p>
        </div>
        {/* SUBMIT BUTTON */}
        <div className='ml-2'>
          <label htmlFor='submit_button' className='sr-only'>Send Email</label>
          <input
            id='submit_button'
            type='submit'
            // className='font-medium text-lg text-white rounded-lg py-2 px-5 bg-primary hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300'
            className='font-medium text-sm sm:text-base rounded-lg px-3 sm:px-4 md:px-6 py-2 bg-blue-200 text-gray-400'
            value='Send Email'
            disabled
          />
        </div>
      </form>
      <PrivacyPolicyModal showPrivacyModal={showPrivacyModal} setShowPrivacyModal={setShowPrivacyModal} />
    </div>
  )
}

export default EmailForm