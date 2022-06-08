import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
// aos
// import AOS from 'aos'
// import 'aos/dist/aos.css'

// assets
import customerService from '../../../assets/customer-service.jpg'
import faceRecognition from '../../../assets/face-recognition-with-label.jpg'
import teamwork from '../../../assets/teamwork.jpg'

// components
import AIFeature from './AIFeature'
import AIFeatureReversed from './AIFeatureReversed'

const WhatMakesAiDifferent = () => {
  const firstContent = {
    title: 'Deep Domain Expertise',
    content: `AI-powered uses the power of machine learning and AI-driven
  automation to automate identity verification in a quick and
  efficient manner, allowing for more customers to be on-boarded while
  ensuring the highest accuracy in the industry.`,
    img: faceRecognition,
  }

  const secondContent = {
    title: 'Service Excellence',
    content: `Our dedicated service team provides high profes sionalism for customers, with a prompt response within 48 hours.`,
    img: customerService,
  }

  const lastContent = {
    title: 'Commitment to Localization',
    content: `Our specialized teams for each region are committed to providing service within your reach and providing additional assistance as needed.`,
    img: teamwork,
  }
  // useEffect(() => {
  //   AOS.init()
  // }, [])
  return (
    <div className='py-5'>
      <Container>
        <h1 className='text-center titillium-700'>
          What Makes AI-powered Different?
        </h1>
        <div
        // data-aos='fade-down' data-aos-delay='50' data-aos-duration='1000'
        >
          <AIFeature
            content={firstContent.content}
            title={firstContent.title}
            img={firstContent.img}
          />
        </div>
        {/* only this play this on mobile */}
        <div
          // data-aos='fade-down'
          // data-aos-delay='50'
          // data-aos-duration='1000'
          className='d-block d-lg-none'
        >
          <AIFeature
            content={secondContent.content}
            title={secondContent.title}
            img={secondContent.img}
          />
        </div>
        {/* only display this on large screen */}
        <div
          // data-aos='fade-down'
          // data-aos-delay='50'
          // data-aos-duration='1000'
          className='d-none d-lg-block'
        >
          <AIFeatureReversed
            content={secondContent.content}
            title={secondContent.title}
            img={secondContent.img}
          />
        </div>
        <div
        // data-aos='fade-down' data-aos-delay='50' data-aos-duration='1000'
        >
          <AIFeature
            content={lastContent.content}
            title={lastContent.title}
            img={lastContent.img}
          />
        </div>
      </Container>
    </div>
  )
}

export default WhatMakesAiDifferent
