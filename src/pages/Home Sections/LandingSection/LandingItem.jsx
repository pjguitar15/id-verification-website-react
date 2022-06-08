import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import { keyframes } from 'styled-components'

const LandingItem = ({ title, content, img, learnMoreRef }) => {
  const [size, setSize] = useState('large')
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div
      className='landing-section d-flex align-items-center'
      style={{
        height: '50vh',
        background: `linear-gradient(to right, rgba(3, 94, 0, 0.7), rgba(0, 0, 0, 0)),
      url(${img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container>
        <div className='col-lg-6 text-start'>
          <div>
            <h1
              data-aos='fade-down'
              className='titillium-700 col-10 text-light'
            >
              {/* ADVANCE Intelligence, BEYOND Technology */}
              {title}
            </h1>
            <p
              data-aos='fade-down'
              className='titillium-400 text-light'
              style={{ fontSize: '16px' }}
            >
              {/* A leading big data and AI company in Asia, assisting enterprise
          clients with digital transformation, fraud prevention, and process
          automation. We have over 1000 clients in industries such as banking,
          fintech, retail, and e-commerce. */}
              {content}
            </p>
            <div className='mt-4'>
              <Button
                onClick={() => scrollToSection(learnMoreRef)}
                data-aos='fade-right'
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
        </div>
      </Container>
    </div>
  )
}

export default LandingItem
