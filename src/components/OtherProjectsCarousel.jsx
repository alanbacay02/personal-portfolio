import React from 'react'
import PropTypes from 'prop-types'
import useEmblaCarousel from 'embla-carousel-react'
import { CssSvgIcon, HtmlSvgIcon, JavaScriptSvgIcon } from '../svg-components/IconSVG';

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
    <div className='flex flex-col w-full max-w-[350px]'>
      <div className='h-[200px] w-auto bg-secondary'>
        {/* Insert Image here */}
      </div>
      <div className='flex flex-col px-1 pt-2'>
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
  const [emblaRef] = useEmblaCarousel({loop: true, align: 'start', slidesToScroll: 3})

  return (
    <div className='embla overflow-hidden' ref={emblaRef}>
      <div className='embla__container flex'>
        {PROJECT_CARD_INFO.map((item, index) => {
          return (
            <div key={index} className='embla__project__slide'>
              <ProjectCard
                title={item.projectTitle}
                languages={item.languageIcons}
                deployLink={item.projectDeployLink}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OtherProjectsCarousel