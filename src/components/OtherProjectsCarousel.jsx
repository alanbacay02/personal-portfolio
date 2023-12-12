import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { BoostrapSvgIcon, CssSvgIcon, HtmlSvgIcon, JavaScriptSvgIcon, ReactSvgIcon, TailwindSvgIcon } from '../svg-components/IconSVG';
import { register } from 'swiper/element/bundle'

// Function to import all images from specified directory using Webpack's `require.context`
const importAllImages = (r) => {
  let images = {} // Creates an empty object to store imported images
  // Iterate through all the matched module requests within the directory
  r.keys().forEach((item) => {
    // For each image path, remove './' from the beginning and assign image module to the object
    images[item.replace('./', '')] = r(item) 
  })
  return images // Return the object containing imported images
}

// Import all images with a '.png' extension from the '../project-carousel-assets' using the importAllImages function
const carouselProjectImages = importAllImages(require.context('../project-carousel-assets', false, /\.png$/))

// Creates an array of objects containing project data
const PROJECT_CARD_INFO = [
  {
    projectTitle: 'Pomodoro Timer',
    languageIcons: [<ReactSvgIcon />, <JavaScriptSvgIcon />, <TailwindSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/25-5-clock/',
    projectImg: carouselProjectImages['pomodoroTimer.png']
  },
  {
    projectTitle: 'Drum Machine',
    languageIcons: [<ReactSvgIcon />, <JavaScriptSvgIcon />, <TailwindSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/drum-machine/',
    projectImg: carouselProjectImages['drumMachine.png']
  },
  {
    projectTitle: 'Mock Data Website',
    languageIcons: [<ReactSvgIcon />, <JavaScriptSvgIcon />, <TailwindSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/mock-data-website/',
    projectImg: carouselProjectImages['reactMockDataWebsite.png']
  },
  {
    projectTitle: 'The Bean Express',
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/fcc-web-project-4/',
    projectImg: carouselProjectImages['theBeanExpress.png']
  },
  {
    projectTitle: 'First HTML Portfolio',
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/fcc-alan-portfolio/',
    projectImg: carouselProjectImages['firstPortfolio.png']
  },
  {
    projectTitle: 'Quote Generator',
    languageIcons: [<ReactSvgIcon />, <JavaScriptSvgIcon />, <TailwindSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/random-quote-machine/',
    projectImg: carouselProjectImages['quoteGenerator.png']
  }
  ,
  {
    projectTitle: 'Famous Person',
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/fcc-web-project-2/',
    projectImg: carouselProjectImages['famousPerson.png']
  }
  ,
  {
    projectTitle: 'Markdown Previewer',
    languageIcons: [<ReactSvgIcon />, <JavaScriptSvgIcon />, <TailwindSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/markdown-previewer/',
    projectImg: carouselProjectImages['markdownPreviewer.png']
  },
  {
    projectTitle: 'React Calculator',
    languageIcons: [<ReactSvgIcon />, <JavaScriptSvgIcon />, <TailwindSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/javascript-calculator/',
    projectImg: carouselProjectImages['reactCalculator.png']
  },
  {
    projectTitle: 'University Landing Page',
    languageIcons: [<HtmlSvgIcon />, <BoostrapSvgIcon />, <CssSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/mainwebpage/',
    projectImg: carouselProjectImages['bootstrapUniPage.png']
  },
  {
    projectTitle: 'Survey Form',
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/fcc-web-project-1/',
    projectImg: carouselProjectImages['htmlSurvey.png']
  },
  {
    projectTitle: 'Documentation Page',
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />],
    projectDeployLink: 'https://alanbacay02.github.io/fcc-web-project-3/',
    projectImg: carouselProjectImages['htmlDocumentation.png']
  }
]

// Creates a function component `ProjectCard` to create a card for each project
const ProjectCard = ({ title, languages, deployLink, projectImg }) => {
  // Spreads `languages` into `LangCompArray` if props `languages` is an array and is not empty, assigns <HtmlSvgIcon /> if else
  let LangCompArray = Array.isArray(languages) && languages.length > 0 ? [...languages] : [<HtmlSvgIcon />]

  return (
    <div className='flex flex-col w-fit mx-auto'>
      <a href={deployLink} target='_blank' rel='noreferrer' className='group hover:cursor-pointer'>
        <div className='h-[215.2px] max-h-[215px] w-[330px] max-w-[330px] overflow-clip bg-secondary'>
          <img src={projectImg} alt={title} className='object-cover object-center group-hover:scale-105 transition-all duration-300' />
        </div>
      </a>
      <div className='flex flex-col w-full px-1 pt-2'>
        <div className='flex flex-row items-center justify-between'>
          <h3 className='text-lg font-medium'>{title}</h3>
          <div className='flex flex-row justify-evenly items-center gap-1'>
              {/* Maps over `LangCompArray` to return Svg Icon Components */}
              {LangCompArray.map((item, index) => {
                return (
                  <i key={index} className='h-[32px]'>{item}</i>
                )
              })}
          </div>
        </div>
        <a href={deployLink} target='_blank' rel='noreferrer' className='w-fit font-medium text-blue-500 hover:underline'>View Deployment &gt;</a>
      </div>
    </div>
  )
}
// Defines default props for `ProjectCard` if props are undefined or empty
ProjectCard.defaultProps = {
  title: 'Undefined Project',
  languages: [],
  deployLink: ''
}
// Validates propTypes for `ProjectCard`
ProjectCard.propTypes = {
  title: PropTypes.string,
  languages: PropTypes.array,
  deployLink: PropTypes.string
}

const OtherProjectsCarousel = () => {
  // Creates a reference to the Swiper instance to interact with its methods and properties
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
        1156: {
          slidesPerView: 3,
          slidesPerGroup: 3
        }
      },
      loop: true
    }
    // Assigns `params` as parameters for `swiperContainer`
    Object.assign(swiperContainer, params)
    // initializes swiper
    swiperContainer.initialize()
  },[])

  // Creates a function `handlePrevClick` to handle previous button clicks
  const handlePrevClick = () => {
    // Gets current type of `swiperRef` and assigns it to `currentSwiper`
    const currentSwiper = swiperRef.current
    // Calls the `slidePrev()` function in `currentSwiper` to move to the previous slide
    currentSwiper.swiper.slidePrev()
  }

  // Creates a function `handleNextClick` to handle next button clicks
  const handleNextClick = () => {
    // Gets current type of `swiperRef` and assigns it to `currentSwiper`
    const currentSwiper = swiperRef.current
    // Calls the `slideNext()` function in `currentSwiper` to move to the next slide
    currentSwiper.swiper.slideNext()
  }

  return (
    <div className='flex flex-row'>
      <div className='flex items-center justify-center text-6xl overflow-clip text-gray-400'>
        <button
          onClick={() => {handlePrevClick()}}
          className='-mx-3 py-3 group'
        >
          <p className='group-hover:scale-110 group-active:scale-90 transition-all duration-200'><BsChevronCompactLeft /></p>
        </button>
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
                  projectImg={item.projectImg}
                />
              </swiper-slide>
            )
          })}
        </swiper-container>
      </div>
      <div className='flex items-center justify-center text-6xl overflow-clip text-gray-400'>
        <button
          onClick={() => {handleNextClick()}}
          className='-mx-3 py-3 group'
        >
          <p className='group-hover:scale-110 group-active:scale-90 transition-all duration-200'><BsChevronCompactRight /></p>
        </button>
      </div>
    </div>
  )
}

export default OtherProjectsCarousel