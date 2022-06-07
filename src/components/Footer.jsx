import React from 'react'
import { Container } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      {/* light effect */}
      <div
        className='w-100 colored-thing-on-footer'
        style={{
          height: '7px',
        }}
      ></div>
      <div className='bg-dark py-5'>
        <Container>
          <div className='row'>
            <div className='col-lg-6'>
              <h1 className='text-start titillium-700 text-light m-0'>
                <span style={{ color: '#40B452' }}>AI</span>-powered©
              </h1>
            </div>
            <div className='col-lg-6 d-flex align-items-center'>
              <div className='d-flex flex-row'>
                <a className='text-light rubik-400' href='#'>
                  © 2010-2022 AI-powered
                </a>
                <span className='text-light mx-2'>|</span>
                <a className='text-light rubik-400' href='#'>
                  All rights reserved.
                </a>
                <span className='text-light mx-2'>|</span>
                <a className='text-light rubik-400' href='#'>
                  Contact Us.
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer
