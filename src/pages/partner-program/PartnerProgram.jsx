import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import WhatsInIt from './WhatsInIt'

const PartnerProgram = () => {
  return (
    <>
      <div className='dark-purple-blue-gradient' style={{ padding: '220px 0' }}>
        <Container>
          <div className='row'>
            <h1 className='titillium-700 text-white display-3 col-md-6'>
              Partner Program
            </h1>
            <div className='col-md-6'>
              <h4 className='rubik-400 col-md-9 mb-5 text-white'>
                Expand your product offerings with the world's leading solutions
                for identity verification, eKYC and AML compliance.
              </h4>
              <div>
                <Button
                  type='white'
                  shape='round'
                  className='me-2'
                  size='large'
                >
                  Become a Partner
                </Button>
                <Button
                  type='white'
                  shape='round'
                  className='me-2'
                  size='large'
                >
                  Meet our partners
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <WhatsInIt />
    </>
  )
}

export default PartnerProgram
