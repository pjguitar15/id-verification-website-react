import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ContactForm from './ContactForm'
import { CheckCircleOutlined } from '@ant-design/icons'

const Contact = () => {
  return (
    <div>
      <div
        style={{
          height: '7px',
        }}
        className='colored-thing-on-footer'
      ></div>
      <div className='bg-light' style={{ padding: '80px 0' }}>
        <Container>
          <div className='row py-5'>
            <div className='col-md-6'>
              <h1 className='m-0 p-0'>Talk to a Specialist</h1>
              <hr className='my-4' />
              <h5 className='my-5'>
                Fight fraud and financial crime with Ai-powered's unified,
                end-to-end identity verification, eKYC and AML platform.
              </h5>
              <div>
                <h4 className='rubik-400'>We are here to help you:</h4>
                <div className='d-flex my-3'>
                  <div className='me-3'>
                    <CheckCircleOutlined />
                  </div>
                  <p className='m-0 p-0 rubik-400'>
                    Accurately establish, maintain and reassert trust from
                    account opening to ongoing transaction monitoring.
                  </p>
                </div>
                <div className='d-flex my-3'>
                  <div className='me-3'>
                    <CheckCircleOutlined />
                  </div>
                  <p className='m-0 p-0 rubik-400'>
                    Onboard good customers faster and meet regulatory compliance
                    including KYC, AML and GDPR.
                  </p>
                </div>{' '}
                <div className='d-flex my-3'>
                  <div className='me-3'>
                    <CheckCircleOutlined />
                  </div>
                  <p className='m-0 p-0 rubik-400'>
                    Verify identities and monitor transactions across 200
                    countries and territories.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <ContactForm />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Contact
