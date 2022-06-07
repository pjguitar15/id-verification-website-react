import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
// aos
import AOS from 'aos'
import 'aos/dist/aos.css'

const LandingSection = () => {
  const [size, setSize] = useState('large')

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className='bg-dark landing-section p-4'>
      <Container className='py-5'>
        <div className='col-lg-6 text-start'>
          <h1
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            className='titillium-700 col-10 text-light'
          >
            ADVANCE Intelligence, BEYOND Technology
          </h1>
          <p
            data-aos='fade-down'
            data-aos-offset='200'
            data-aos-delay='50'
            data-aos-duration='1000'
            className='titillium-400 text-light'
            style={{ fontSize: '16px' }}
          >
            A leading big data and AI company in Asia, assisting enterprise
            clients with digital transformation, fraud prevention, and process
            automation. We have over 1000 clients in industries such as banking,
            fintech, retail, and e-commerce.
          </p>
          <div className='mt-4'>
            <Button
              data-aos='fade-right'
              data-aos-offset='200'
              data-aos-delay='50'
              data-aos-duration='1000'
              className='titillium-400 px-4 text-light'
              shape='round'
              size={size}
              style={{ background: '#40B452', border: 'none' }}
            >
              Learn More
              <ArrowRightOutlined />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default LandingSection
