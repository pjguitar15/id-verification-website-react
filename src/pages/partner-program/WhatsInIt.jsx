import React from 'react'
import award from '../../assets/award.jpg'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import { PhoneOutlined, SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const WhatsInIt = () => {
  const navigate = useNavigate()
  return (
    <div style={{ padding: '150px 0' }}>
      <Container>
        <h1 className='display-4 titillium-700 text-center'>
          What's in it for you?
        </h1>
        <div className='row py-5'>
          <div
            className='col-md-6 d-block d-md-none mb-3'
            style={{ height: '29rem' }}
          >
            <img
              src={award}
              className='w-100 h-100'
              style={{ objectFit: 'cover' }}
              alt='award'
            />
          </div>
          <div className='col-md-6'>
            <p
              className='rubik-400 text-muted col-md-11'
              style={{ fontSize: '18px', lineHeight: '40px' }}
            >
              With identity theft and account takeover on the rise, it’s
              increasingly difficult for businesses to trust that someone is who
              they claim to be online. Ai-powered’s identity verification and
              authentication solutions leverage the power of biometrics,
              informed AI and the latest technologies to quickly verify the
              digital identities of new customers and existing users. And after
              onboarding, Ai-powered’s anti-money laundering (AML) solutions
              ensure companies can continue to trust their users and keep
              criminals off their platforms.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              className='antd-button-fix'
              type='primary'
              size='large'
              shape='round'
            >
              <PhoneOutlined />
              Contact Us
            </Button>
          </div>
          <div
            className='col-md-6 d-none d-md-block'
            style={{ height: '29rem' }}
          >
            <img
              src={award}
              className='w-100 h-100'
              style={{ objectFit: 'cover' }}
              alt='award'
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default WhatsInIt
