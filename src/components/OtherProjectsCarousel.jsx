import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { CssSvgIcon, HtmlSvgIcon, JavaScriptSvgIcon } from '../svg-components/IconSVG';
import { register } from 'swiper/element/bundle'

const PROJECT_CARD_INFO = [
  {
    projectTitle: 'Project 1',
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />],
    projectDeployLink: '/#'
  },
  {
    projectTitle: 'Project 2',
    languageIcons: [<HtmlSvgIcon />, <JavaScriptSvgIcon />],
    projectDeployLink: '/#'
  },
  {
    projectTitle: 'Project 3',
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />],
    projectDeployLink: '/#'
  },
  {
    projectTitle: 'Project 4',
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />],
    projectDeployLink: '/#'
  },
  {
    projectTitle: 'Project 5',
    languageIcons: [<HtmlSvgIcon />, <JavaScriptSvgIcon />],
    projectDeployLink: '/#'
  },
  {
    projectTitle: 'Project 6',
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />],
    projectDeployLink: '/#'
  }
]

const ProjectCard = ({ title, languages, deployLink }) => {
  let LangCompArray = Array.isArray(languages) && languages.length > 0 ? [...languages] : [<HtmlSvgIcon />]

  return (
    <div className='flex flex-col w-fit mx-auto'>
      <div className='h-[200px] w-[330px] bg-secondary'>
        {/* Insert Image here */}
      </div>
      <div className='flex flex-col w-full px-1 pt-2'>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='text-lg font-medium'>{title}</h3>
          <div className='flex flex-row justify-evenly items-center'>
              {LangCompArray.map((item, index) => {
                return (
                  <i key={index} className='h-[32px]'>{item}</i>
                )
              })}
          </div>
        </div>
        <a href={deployLink} className='w-fit font-medium text-blue-500 hover:underline'>View Deployment &gt;</a>
      </div>
    </div>
  )
}
ProjectCard.defaultProps = {
  title: 'Undefined Project',
  languages: [],
  deployLink: ''
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  languages: PropTypes.array,
  deployLink: PropTypes.string
}

const OtherProjectsCarousel = () => {
  const swiperRef = useRef(null)

  useEffect(() => {
    // Register Swiper web component
    register()
    // Assigns current propert of `swiperRef` to `swiperContainer`
    const swiperContainer = swiperRef.current
    const params = {
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        1280: {
          slidesPerView: 3,
          slidesPerGroup: 3
        }
      },
      loop: true
    }

    Object.assign(swiperContainer, params)
    // initialize swiper
    swiperContainer.initialize()
  },[])

  const handlePrevClick = () => {
    const swiperInstance = swiperRef.current
    swiperInstance.swiper.slidePrev()
  }

  const handleNextClick = () => {
    const swiperInstance = swiperRef.current
    swiperInstance.swiper.slideNext()
  }

  return (
    <div className='flex flex-row'>
      <div className='flex items-center justify-center text-6xl text-gray-400'>
        <button onClick={() => {handlePrevClick()}}><BsChevronLeft /></button>
      </div>
      <div className='w-full overflow-hidden'>
        <swiper-container ref={swiperRef} init='false'>
          {PROJECT_CARD_INFO.map((item, index) => {
            return (
              <swiper-slide key={index}>
                <ProjectCard
                  title={item.projectTitle}
                  languages={item.languageIcons}
                  deployLink={item.projectDeployLink}
                />
              </swiper-slide>
            )
          })}
        </swiper-container>
      </div>
      <div className='flex items-center justify-center text-6xl text-gray-400'>
        <button onClick={() => {handleNextClick()}}><BsChevronRight /></button>
      </div>
    </div>
  )
}

export default OtherProjectsCarousel