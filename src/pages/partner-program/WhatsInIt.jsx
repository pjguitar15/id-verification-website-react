import React from 'react'
import award from '../../assets/award.jpg'
import { Container } from 'react-bootstrap'

const WhatsInIt = () => {
  return (
    <div style={{ padding: '200px 0' }}>
      <Container>
        <h1 className='display-3 titillium-700 text-center'>
          What's in it for you?
        </h1>
        <div className='row py-5'>
          <div className='col-md-6'>
            <p
              className='rubik-400 text-muted col-md-10'
              style={{ fontSize: '18px', lineHeight: '40px' }}
            >
              With identity theft and account takeover on the rise, it’s
              increasingly difficult for businesses to trust that someone is who
              they claim to be online. Jumio’s identity verification and
              authentication solutions leverage the power of biometrics,
              informed AI and the latest technologies to quickly verify the
              digital identities of new customers and existing users. And after
              onboarding, Jumio’s anti-money laundering (AML) solutions ensure
              companies can continue to trust their users and keep criminals off
              their platforms.
            </p>
          </div>
          <div className='col-md-6'>
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
