import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import laptop from '../../assets/laptop.png'

const PlatformDesc = () => {
  const [size, setSize] = useState('large')
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
          <h1 className='titillium-700'>Brand Name Real Identity Platform</h1>
          <p className='titillium-400'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            exercitationem maxime placeat totam ab ad dolorum molestias
            consequatur voluptates. Sit magni quae amet at tenetur repellendus
            vel, consectetur eos quis?
          </p>
          <Button
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
