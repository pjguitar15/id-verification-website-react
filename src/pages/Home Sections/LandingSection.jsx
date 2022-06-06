import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

const LandingSection = () => {
  const [size, setSize] = useState('large')

  return (
    <div className='bg-dark landing-section p-4'>
      <Container className='py-5'>
        <div className='col-lg-6 text-start'>
          <h1 className='titillium-700 col-10 text-light'>
            ADVANCE Intelligence, BEYOND Technology
          </h1>
          <p className='titillium-400 text-light'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            minus omnis porro odio ex deserunt, dolorum nam quis dolore
            laudantium quos maxime adipisci explicabo illum quisquam, ea
            voluptatibus fugit repellat.
          </p>
          <div className='mt-4'>
            <Button
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
