import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
// aos
// import AOS from 'aos'
// import 'aos/dist/aos.css'

const TriCol = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 2000 })
  // }, [])
  return (
    <div className='py-5' style={{ background: '#e6ecff' }}>
      <Container>
        <h3
          // data-aos='fade-down'
          className='titillium-600 text-center mb-5'
        >
          End-to-end indentity verification delivers results
        </h3>
        <div className='row'>
          <div
            // data-aos='fade-right'
            className='col-lg-4 p-2 text-center'
          >
            <div
              className='bg-light mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm'
              style={{ height: '8rem', width: '8rem', borderRadius: '50%' }}
            >
              <h1 className='m-0 titillium-700'>54%</h1>
            </div>
            <h5 className='mb-4 titillium-700'>Improved fraud accuracy</h5>
            <div className='text-muted rubik-400'>
              The Real Identity Platform improves document fraud accuracy by 54%
              year-over-year.
            </div>
          </div>{' '}
          <div
            // data-aos='fade-up'
            className='col-lg-4 p-2 text-center'
          >
            <div
              className='bg-light mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm'
              style={{ height: '8rem', width: '8rem', borderRadius: '50%' }}
            >
              <h1 className='m-0 titillium-700'>90%</h1>
            </div>
            <h5 className='mb-4 titillium-700'>First-time pass rate</h5>
            <div className='text-muted rubik-400'>
              Smart Capture SDK offers proven performance with 90% first-time
              pass rates.
            </div>
          </div>{' '}
          <div
            // data-aos='fade-left'
            className='col-lg-4 p-2 text-center'
          >
            <div
              className='bg-light mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm'
              style={{ height: '8rem', width: '8rem', borderRadius: '50%' }}
            >
              <h1 className='m-0 titillium-700'>10s</h1>
            </div>
            <h5 className='mb-4 titillium-700'>Fast identity verification</h5>
            <div className='text-muted rubik-400'>
              Atlas AI delivers fully-automated identity verification with 95%
              completed in under 10 seconds.
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TriCol
