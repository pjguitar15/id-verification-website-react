import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import laptop from '../../assets/laptop.png'
// aos
// import AOS from 'aos'
// import 'aos/dist/aos.css'

const PlatformDesc = () => {
  const [size, setSize] = useState('large')

  // useEffect(() => {
  //   AOS.init({ duration: 2000 })
  // }, [])

  return (
    <div className='p-4'>
      <Container className='py-5' style={{ position: 'relative' }}>
        <div className='col-lg-5'>
          <div
            className='d-block d-lg-none mx-auto mb-3'
            style={{
              height: '12rem',
              width: '19rem',
            }}
          >
            <img
              src={laptop}
              alt='laptop'
              className='w-100 h-100'
              style={{
                objectFit: 'cover',
              }}
            />
          </div>
          <h1
            // data-aos='fade-down'
            className='titillium-700'
          >
            AI-powered Real Identity Platform
          </h1>
          <p
            // data-aos='fade-down'
            style={{ fontSize: '15px', color: '#636670' }}
          >
            Build trust with your customers using a flexible, end-to-end
            identity verification platform. Powered by Atlas™ AI, the AI-powered
            Real Identity Platform allows you to orchestrate award-winning
            document and biometric verifications, trusted data sources, and
            fraud detection signals.
          </p>
          <Button
            // data-aos='fade-right'
            className='text-light mt-2'
            style={{ background: '#40B452', border: 'none' }}
            size={size}
          >
            Get In Touch
          </Button>
        </div>
        <div
          className='d-none d-lg-block'
          style={{
            height: '12rem',
            width: '19rem',
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        >
          <img
            src={laptop}
            alt='laptop'
            className='w-100 h-100'
            style={{
              objectFit: 'cover',
              zIndex: '0',
            }}
          />
        </div>
      </Container>
    </div>
  )
}

export default PlatformDesc
