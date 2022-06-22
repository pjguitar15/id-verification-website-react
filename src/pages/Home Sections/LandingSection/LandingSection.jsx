import React, { useEffect } from 'react'
import { Carousel } from 'antd'
// aos
import AOS from 'aos'
import 'aos/dist/aos.css'
// landing item component
import LandingItem from './LandingItem'
// images
import faceRecognition from '../../../assets/face-recognition.jpg'
import faceRecognition2 from '../../../assets/face-recognition-2.jpg'

const LandingSection = ({ learnMoreRef }) => {
  const carouselItems = [
    {
      title: 'Welcome to AI-powered',
      content:
        'AI-powered is the place to make your desires come alive. Established in 2022, we have been specializing in connecting people who share similar interests.',
      img: faceRecognition,
    },
    {
      title: 'ADVANCE Intelligence, BEYOND Technology',
      content:
        'With 49 thousand global new members a day, we are sure you will find someone for you. We are more than a dating site, we are built on communities that cater to every desire possible.',
      img: faceRecognition2,
    },
  ]

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <div className='bg-dark'>
      <Carousel autoplay>
        <LandingItem
          learnMoreRef={learnMoreRef}
          title={carouselItems[0].title}
          content={carouselItems[0].content}
          img={carouselItems[0].img}
        />
        <div>
          <LandingItem
            learnMoreRef={learnMoreRef}
            title={carouselItems[1].title}
            content={carouselItems[1].content}
            img={carouselItems[1].img}
          />
        </div>
      </Carousel>
    </div>
  )
}

export default LandingSection
