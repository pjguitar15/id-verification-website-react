import React from 'react'
import { Container } from 'react-bootstrap'
// logo
import logo from '../assets/footer-logo.png'

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
              <div className='col-9 col-sm-7 mx-auto mx-lg-0 mb-4 mb-md-0 col-lg-5'>
                <img className='w-100 h-100' src={logo} alt='logo' />
              </div>
            </div>
            <div className='col-lg-6 d-flex align-items-center'>
              <div className='d-flex mx-auto mx-lg-0 flex-row'>
                <div className='text-light rubik-400'>
                  © 2010-2022 AI-powered
                </div>
                <span className='text-light mx-2'>|</span>
                <div className='text-light rubik-400' href='#'>
                  All rights reserved.
                </div>
                <span className='text-light mx-2'>|</span>
                <div className='text-light rubik-400'>
                  Contact Us.
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Footer
