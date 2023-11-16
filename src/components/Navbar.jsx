import React from 'react'

const NAVBAR_ITEMS = [
  {
    title: 'HOME',
    href: '/#'
  },
  {
    title: 'ABOUT',
    href: '/#'
  },
  {
    title: 'PROJECTS',
    href: '/#'
  },
  {
    title: 'SANDBOX',
    href: '/#'
  },
]

const Navbar = () => {
  return (
    <div className='absolute inset-0 w-full h-fit py-6 px-6 text-text-950'>
      <div className='flex flex-row items-center justify-between'>
        <div>
          <h2 className='font-medium text-3xl p-2 border-2 border-text-950'>AB</h2>
        </div>
        <div>
          <ul className='flex flex-row items-center gap-10'>
            {NAVBAR_ITEMS.map((item, index) => {
              return (
                <li id={index} className='group relative font-medium text-lg'>
                  <a href={item.href}>{item.title}</a>
                  <div className='absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-primary-500 transition-all duration-300' />
                </li>
              )
            })}
            <li className='group relative'>
              <button className='px-4 py-2 border-2 font-medium text-lg border-text-950 transition-all duration-300 z-50'>CONTACT ME</button>
              <div className='absolute bottom-0 w-full h-0 group-hover:h-full bg-primary-500 -z-10 transition-all duration-300' />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar