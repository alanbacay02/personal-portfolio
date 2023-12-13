import React, { useEffect, useRef } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { BoostrapSvgIcon, CssSvgIcon, HtmlSvgIcon, JavaScriptSvgIcon, ReactSvgIcon, TailwindSvgIcon } from '../svg-components/IconSVG';
import { register } from 'swiper/element/bundle'
import OtherProjectCard from './OtherProjectCard';

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
    languageIcons: [<HtmlSvgIcon />, <CssSvgIcon />, <BoostrapSvgIcon />],
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
        648: {
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

    // Select the card container element
    const cardContainer = document.querySelector('.card-container')

    // Set up an Intersection Observer to track changes in visibility
    const observer = new IntersectionObserver( entries => {
      // Iterate through each entry observer by the Intersection Observer
      entries.forEach(entry => {
        // Check if the observer element is intersecting the observer
        if (entry.isIntersecting) {
          // Add 'in-view' class to the card container when it's in view
          cardContainer.classList.add('in-view')
        } else {
          // Remove 'in-view' class to the card container when it's out of view
          cardContainer.classList.remove('in-view')
        }
      })
    }, {
      // Set the threshold for intersection to trigger at 50% visibility
      threshold: 0.5
    })
    
    // Start observing the card container element
    observer.observe(cardContainer)

    return () => {
      // Return a cleanup function to disconnect the observer when needed
      observer.disconnect()
    }
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
    <div className='flex flex-row max-w-[450px] sm:max-w-none mx-auto'>
      <div className='hidden lg:flex items-center justify-center text-6xl overflow-clip text-gray-400'>
        <button
          onClick={() => {handlePrevClick()}}
          className='-mx-3 py-3 group'
        >
          <p className='group-hover:scale-110 group-active:scale-90 transition-all duration-200'><BsChevronCompactLeft /></p>
        </button>
      </div>
      <div className='w-full overflow-hidden card-container'>
        <swiper-container ref={swiperRef} init='false'>
          {PROJECT_CARD_INFO.map((item, index) => {
            return (
              <swiper-slide key={index}>
                <OtherProjectCard
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
      <div className='hidden lg:flex items-center justify-center text-6xl overflow-clip text-gray-400'>
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