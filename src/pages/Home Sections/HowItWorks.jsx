import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'

const HowItWorks = () => {
  return (
    <div className='py-5 text-light' style={{ background: '#292929' }}>
      <Container>
        <h1 className='text-center titillium-400 display-4 text-light'>
          Fulfill real world identity verification to meet KYC compliance in 3
          easy steps
        </h1>
        <p
          className='text-center col-lg-9 mx-auto my-5 rubik-400'
          style={{ fontSize: '18px' }}
        >
          In today's digital world, identity matters. Are your customers who
          they say they are? Can you know for sure? Fight fraud and onboard real
          customers, faster with BRANDNAME's AI-powered identity verification
          and authentication solutions.
        </p>
        <h1 className='text-center titillium-400 display-4 text-light pb-5'>
          How It Works
        </h1>
        <div className='row'>
          <div className='col-lg-3 p-2 text-center'>
            <div>
              <img
                src='https://www.jumio.com/app/uploads/2020/04/id-aquire.png'
                alt=''
              />
            </div>
            <div className='p-4 text-start my-2'>
              <h4 className='text-light'>ID Proofing</h4>
              <p className='rubik-400' style={{ fontSize: '16px' }}>
                Customer is asked to scan their ID document
              </p>
            </div>
          </div>
          <div className='col-lg-3 p-2 text-center'>
            <div>
              <img
                src='https://www.jumio.com/app/uploads/2020/04/id-extract-5.png'
                alt=''
              />
            </div>
            <div className='p-4 text-start my-2'>
              <h4 className='text-light'>ID Proofing</h4>
              <p className='rubik-400' style={{ fontSize: '16px' }}>
                Customer is asked to scan their ID document
              </p>
            </div>
          </div>
          <div className='col-lg-3 p-2 text-center'>
            <div>
              <img
                src='https://www.jumio.com/app/uploads/2021/02/similarityCheck-new-3.png'
                alt=''
              />
            </div>
            <div className='p-4 text-start my-2'>
              <h4 className='text-light'>ID Proofing</h4>
              <p className='rubik-400' style={{ fontSize: '16px' }}>
                Customer is asked to scan their ID document
              </p>
            </div>
          </div>{' '}
          <div className='col-lg-3 p-2 text-center'>
            <div>
              <img
                src='https://www.jumio.com/app/uploads/2020/12/identity-certified-liveness-check-new.png'
                alt=''
              />
            </div>
            <div className='p-4 text-start my-2'>
              <h4 className='text-light'>ID Proofing</h4>
              <p className='rubik-400' style={{ fontSize: '16px' }}>
                Customer is asked to scan their ID document
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HowItWorks
