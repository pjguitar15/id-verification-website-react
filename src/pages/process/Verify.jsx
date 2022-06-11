import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import IdVerification from './IdVerification'
import SelfieVerification from './SelfieVerification'

const Verify = ({ setIsStepThreeDone }) => {
  const [blurred, setBlurred] = useState(false)
  const [isSelfieDone, setIsSelfieDone] = useState(false)
  const startRef = useRef()
  const nextStepHandler = () => {
    setIsStepThreeDone(true)
  }
  useEffect(() => {
    setTimeout(() => setBlurred(true), 1000)
  }, [])

  const continueButtonHandler = () => {
    setIsSelfieDone(true)
    startRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div ref={startRef}>
      <Container>
        <h2>Identity Verification</h2>
        {!isSelfieDone ? (
          <SelfieVerification
            continueButtonHandler={continueButtonHandler}
            blurred={blurred}
          />
        ) : (
          <IdVerification nextStepHandler={nextStepHandler} blurred={blurred} />
        )}

        {/* <Button
          onClick={nextStepHandler}
          className='titillium-400 px-4 mt-4'
          type='primary'
          shape='round'
          // icon={<FileDoneOutlined />}
          size='large'
          style={{ background: '#40B452', border: 'none' }}
        >
          Verify
        </Button> */}
      </Container>
    </div>
  )
}

export default Verify
