import React from 'react'
import { Container } from 'react-bootstrap'
import RegForm from './RegForm'
import formImg from '../../assets/form-img.jpg'

const RegistrationSection = ({ regFormRef }) => {
  return (
    <div className='py-5 registration-section' ref={regFormRef}>
      <Container>
        <div className='row'>
          <div className='col-lg-6 py-5'>
            <h1 className='titillium-400 display-5 text-light col-lg-9'>
              The Leading Compliance Service.
            </h1>
            <hr
              className='col-lg-10 mx-start my-4'
              style={{ color: 'white', height: '6px' }}
            />
            <div
              className='titillium-400 text-light'
              style={{ fontSize: '26px' }}
            >
              Fulfill your Due Diligence
            </div>
            <div style={{ height: '16rem' }} className='mt-4 col-lg-10'>
              <img
                src={formImg}
                className='w-100 h-100'
                style={{ objectFit: 'cover' }}
                alt='form-img'
              />
            </div>
          </div>
          <div className='col-lg-6'>
            {/* Form here */}

            <RegForm />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default RegistrationSection
