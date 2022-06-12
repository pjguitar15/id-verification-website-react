import React, { useEffect, useRef, useState } from 'react'
import { useFormInput } from '../../context/RegFormProvider'
import { useNavigate } from 'react-router-dom'
import Payment from './Payment'
import Steps from './Steps'
import Receipt from './Receipt'
import Verify from './Verify'
import VerificationResults from './VerificationResults'

const ProcessPage = () => {
  const [isStepOneDone, setIsStepOneDone] = useState(false)
  const [isStepTwoDone, setIsStepTwoDone] = useState(false)
  const [isStepThreeDone, setIsStepThreeDone] = useState(false)
  const [isLastStepDone, setIsLastStepDone] = useState(false)
  const value = useFormInput()
  const startRef = useRef()
  const navigate = useNavigate()

  const cancelClick = () => {
    value.setFirstName('')
    value.setMiddleName('')
    value.setLastName('')
    value.setContactNumber('')
    value.setEmail('')
    value.setLocation('Afghanistan')
    navigate('/')
  }

  useEffect(() => {
    startRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [isStepOneDone, isStepTwoDone, isStepThreeDone])

  return (
    <div className='py-5' ref={startRef}>
      <Steps
        isStepOneDone={isStepOneDone}
        isStepTwoDone={isStepTwoDone}
        isStepThreeDone={isStepThreeDone}
        isLastStepDone={isLastStepDone}
      />
      {!isStepOneDone ? <Verify setIsStepOneDone={setIsStepOneDone} /> : ''}
      {!isStepTwoDone && isStepOneDone ? (
        <Payment
          setIsStepTwoDone={setIsStepTwoDone}
          value={value}
          cancelClick={cancelClick}
        />
      ) : (
        ''
      )}
      {!isStepThreeDone && isStepTwoDone ? (
        <Receipt setIsStepThreeDone={setIsStepThreeDone} t />
      ) : (
        ''
      )}

      {!isLastStepDone && isStepThreeDone ? (
        <VerificationResults setIsLastStepDone={setIsLastStepDone} />
      ) : (
        ''
      )}
    </div>
  )
}

export default ProcessPage
