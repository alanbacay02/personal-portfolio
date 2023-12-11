import React from 'react'

const formLabelStyle = 'font-medium px-2 mb-2 text-gray-400'
const inputFieldStyle = 'border border-secondary rounded-md bg-background py-1 px-2 focus:outline-secondary focus:shadow-xl'

const EmailForm = () => {
  return (
    <div className='w-full'>
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
        <div className='flex flex-row gap-2 items-center ml-2 mb-2'>
          <input
            id='form_agreement'
            type='checkbox'
            required
          />
          <label
            htmlFor='form_agreement'
          >I have read and agree to the <a href='/#' className='text-accent underline'>Privacy Policy</a>.</label>
        </div>
        {/* SUBMIT BUTTON */}
        <div className='ml-2'>
          <label htmlFor='submit_button' className='sr-only'>Send Email</label>
          <input
            id='submit_button'
            type='submit'
            className='font-medium text-lg text-white rounded-lg py-1 px-5 bg-primary hover:cursor-pointer hover:bg-blue-600 transition-colors duration-300'
            value='Send Email'
          />
        </div>
      </form>
    </div>
  )
}

export default EmailForm