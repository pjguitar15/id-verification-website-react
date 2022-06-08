import React, { useEffect, useRef } from 'react'
import { Button } from 'antd'
import { Container } from 'react-bootstrap'
import { useFormInput } from '../context/RegFormProvider'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
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
      <Container>
        <div className='col-lg-8'>
          <h4 className='px-3 py-3 text-white neon'>Tether payment</h4>
          <h4 className='text-success'>20USDT</h4>
          <p className='titillium-600 text-muted' style={{ fontSize: '16px' }}>
            Time left to pay
          </p>
          <hr />
          <h6 className='mb-3'>Details</h6>
          <div
            className='d-flex justify-content-between py-2 px-4'
            style={{ background: '#f1f1f1' }}
          >
            <h6 className='p-0 m-0'>Full name:</h6>
            <h6 className='p-0 m-0'>
              {value.firstName} {value.middleName} {value.lastName}
            </h6>
          </div>
          <div className='d-flex justify-content-between  py-2 px-4'>
            <h6 className='p-0 m-0'>Contact Number:</h6>
            <h6 className='p-0 m-0'>{value.contactNumber}</h6>
          </div>
          <div
            className='d-flex justify-content-between  py-2 px-4'
            style={{ background: '#f1f1f1' }}
          >
            <h6 className='p-0 m-0'>Email:</h6>
            <h6 className='p-0 m-0'>{value.email}</h6>
          </div>
          <div className='d-flex justify-content-between  py-2 px-4'>
            <h6 className='p-0 m-0'>Location:</h6>
            <h6 className='p-0 m-0'>{value.location}</h6>
          </div>
          <hr />
          {/* attention message */}
          <Button
            onClick={() => alert('test')}
            className='titillium-400 px-4 mt-2'
            type='primary'
            shape='round'
            // icon={<FileDoneOutlined />}
            size='large'
            style={{ background: '#40B452', border: 'none' }}
          >
            Pay 20 USDT
          </Button>

          <Button
            onClick={cancelClick}
            className='titillium-400 ms-2 px-4 mt-2'
            type='primary'
            shape='round'
            // icon={<FileDoneOutlined />}
            size='large'
            style={{ background: '#cf4a4a', border: 'none' }}
          >
            Cancel
          </Button>
          <div className='mt-4'>
            <p>
              <span className='text-danger'>Attention! </span>
              This address only supports USDT transfers via the TRC20 protocol.
              Do not send transfers from smart contracts, TRX coins or any other
              crypto to it. Such deposits will not be credited.
            </p>
            <p>
              Send the <span className='fw-bold'>exact amount of 20USDT </span>
              to the address shown on this page <span>in one transaction.</span>
            </p>
            <p>
              Send exactly the amount shown in one transaction, otherwise your
              deposit may fail. Payments in multiple transactions are not
              supported.
            </p>
            <p>
              The funds will be credited as soon as we get 1 confirmation from
              the TRON network.
            </p>
            <p>
              <span className='text-danger'>Attention! </span>
              Please note that the address the system gave you for this payment
              is unique and can only be used once. Each payment needs to be
              initiated anew.
            </p>
            <p>Crypto deposits are monitored according to our AML program.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Payment
