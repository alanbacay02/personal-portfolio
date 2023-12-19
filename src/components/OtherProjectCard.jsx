import React from 'react'
import PropTypes from 'prop-types'
import { HtmlSvgIcon } from '../svg-components/IconSVG';

// Creates a function component `ProjectCard` to create a card for each project
const OtherProjectCard = ({ title, languages, deployLink, projectImg }) => {
  // Spreads `languages` into `LangCompArray` if props `languages` is an array and is not empty, assigns <HtmlSvgIcon /> if else
  let LangCompArray = Array.isArray(languages) && languages.length > 0 ? [...languages] : [<HtmlSvgIcon />]

  return (
    <div className='flex flex-col w-[90%] max-w-[330px] mx-auto'>
      <a href={deployLink} target='_blank' rel='noreferrer' className='group hover:cursor-pointer'>
        <div className='h-full max-h-[215px] w-full overflow-clip shadow-md bg-secondary'>
          <img src={projectImg} alt={title} className='object-cover object-center group-hover:scale-105 transition-all duration-300' />
        </div>
      </a>
      <div className='flex flex-col w-full px-1 pt-2'>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='text-base xs:text-lg sm:text-xl md:text-2xl  font-medium'>{title}</h3>
          <div className='flex flex-row justify-evenly items-center gap-1'>
              {/* Maps over `LangCompArray` to return Svg Icon Components */}
              {LangCompArray.map((item, index) => {
                return (
                  <i key={index} className='h-[26px] sm:h-[29px] md:h-[32px]'>{item}</i>
                )
              })}
          </div>
        </div>
        <a href={deployLink} target='_blank' rel='noreferrer' className='w-fit text-sm xs:text-base sm:text-lg font-medium text-blue-500 hover:underline'>View Deployment &gt;</a>
      </div>
    </div>
  )
}
// Defines default props for `OtherProjectCard` if props are undefined or empty
OtherProjectCard.defaultProps = {
  title: 'Undefined Project',
  languages: [],
  deployLink: ''
}
// Validates propTypes for `OtherProjectCard`
OtherProjectCard.propTypes = {
  title: PropTypes.string,
  languages: PropTypes.array,
  deployLink: PropTypes.string
}

export default OtherProjectCard