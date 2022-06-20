import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import WhatsInIt from './WhatsInIt'
import footerLogo from '../../assets/footer-logo.png'
import { useNavigate } from 'react-router-dom'

const PartnerProgram = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className='dark-purple-blue-gradient' style={{ padding: '150px 0' }}>
        <Container>
          <div className='col-4 col-lg-3 col-xl-2'>
            <img className='w-100' src={footerLogo} alt='' />
          </div>
          <h1 className='titillium-700 text-white display-3 col-md-9 col-lg-6'>
            Partner Program
          </h1>
          <hr className='col-xl-6 text-white py-1' />
          <h4 className='rubik-400 col-md-9 mb-5 text-white'>
            Expand your product offerings with the world's leading solutions for
            identity verification, eKYC and AML compliance.
          </h4>
          <div>
            <Button
              onClick={() => navigate('/contact')}
              type='white'
              shape='round'
              className='me-2'
              size='large'
            >
              Become a Partner
            </Button>
            {/* <Button type='white' shape='round' className='me-2' size='large'>
              Meet our partners
            </Button> */}
          </div>
        </Container>
      </div>
      <WhatsInIt />
    </>
  )
}

export default PartnerProgram
