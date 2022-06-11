import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import StepsRound from './StepsRound'

const Steps = ({
  isStepOneDone,
  isStepTwoDone,
  isStepThreeDone,
  isLastStepDone,
}) => {
  const [stepOne, setStepOne] = useState(true)
  const [stepTwo, setStepTwo] = useState(false)
  const [stepThree, setStepThree] = useState(false)
  const [stepFour, setStepFour] = useState(false)
  useEffect(() => {
    console.log('isStepOneRendered')
    if (isStepOneDone) {
      setStepOne(false)
      setStepTwo(true)
    }
  }, [isStepOneDone])

  useEffect(() => {
    console.log('isStepOneRendered')
    if (isStepTwoDone) {
      setStepTwo(false)
      setStepThree(true)
    }
  }, [isStepTwoDone])

  useEffect(() => {
    console.log('isStepOneRendered')
    if (isStepThreeDone) {
      setStepThree(false)
      setStepFour(true)
    }
  }, [isStepThreeDone])
  return (
    <div className='mb-5'>
      <Container>
        <div className='d-flex align-items-center'>
          <StepsRound isFocused={stepOne} step={'1'} label={'Pay'} />
          <StepsRound isFocused={stepTwo} step={'2'} label={'Receipt'} />
          <StepsRound isFocused={stepThree} step={'3'} label={'Verify'} />
          <StepsRound
            isFocused={stepFour}
            step={'4'}
            isLast={true}
            label={'Verification Results'}
          />
        </div>
      </Container>
    </div>
  )
}

export default Steps
