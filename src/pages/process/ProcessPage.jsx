import React, { useEffect, useRef } from 'react'
import { useFormInput } from '../../context/RegFormProvider'
import { useNavigate } from 'react-router-dom'
import Payment from './Payment'
import Steps from './Steps'

const ProcessPage = () => {
  const value = useFormInput()
  const startRef = useRef()
  const navigate = useNavigate()
  useEffect(() => {
    startRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const cancelClick = () => {
    value.setFirstName('')
    value.setMiddleName('')
    value.setLastName('')
    value.setContactNumber('')
    value.setEmail('')
    value.setLocation('Afghanistan')
    navigate('/')
  }

  return (
    <div className='py-5' ref={startRef}>
      <Steps />
      <Payment value={value} cancelClick={cancelClick} />
    </div>
  )
}

export default ProcessPage
