import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'

const Payment = ({ value, cancelClick }) => {
  const [localStorageItems, setLocalStorageItems] = useState({})
  useEffect(() => {
    const firstName = localStorage.getItem('firstName')
    const middleName = localStorage.getItem('middleName')
    const lastName = localStorage.getItem('lastName')
    const contactNumber = localStorage.getItem('contactNumber')
    const email = localStorage.getItem('email')
    const location = localStorage.getItem('location')
    setLocalStorageItems({
      firstName,
      middleName,
      lastName,
      contactNumber,
      email,
      location,
    })
  }, [])
  return (
    <Container>
      <div className='col-lg-8 mx-auto'>
        <h4 className='px-3 py-3 text-white neon'>
          <span className='me-2'>
            <svg
              fill='white'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              width='32px'
              height='32px'
            >
              <path d='M 12 1 C 5.935 1 1 5.935 1 12 C 1 18.065 5.935 23 12 23 C 18.065 23 23 18.065 23 12 C 23 5.935 18.065 1 12 1 z M 12 3 C 16.963 3 21 7.038 21 12 C 21 16.963 16.963 21 12 21 C 7.038 21 3 16.963 3 12 C 3 7.038 7.038 3 12 3 z M 7 7 L 7 9 L 11 9 L 11 10.048828 C 8.7935403 10.157378 6 10.631324 6 12 C 6 13.368676 8.7935403 13.842622 11 13.951172 L 11 18 L 13 18 L 13 13.951172 C 15.20646 13.842622 18 13.368676 18 12 C 18 10.631324 15.20646 10.157378 13 10.048828 L 13 9 L 17 9 L 17 7 L 7 7 z M 11 11.027344 L 11 12 L 13 12 L 13 11.027344 C 15.42179 11.151768 16.880168 11.700988 17.003906 11.978516 C 16.863906 12.334516 15.021 13 12 13 C 8.978 13 7.1360937 12.335484 6.9960938 12.021484 C 7.1198324 11.706835 8.5777007 11.152269 11 11.027344 z' />
            </svg>
          </span>
          Tether payment
        </h4>
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
            {localStorageItems.firstName} {localStorageItems.middleName}{' '}
            {localStorageItems.lastName}
          </h6>
        </div>
        <div className='d-flex justify-content-between  py-2 px-4'>
          <h6 className='p-0 m-0'>Contact Number:</h6>
          <h6 className='p-0 m-0'>{localStorageItems.contactNumber}</h6>
        </div>
        <div
          className='d-flex justify-content-between  py-2 px-4'
          style={{ background: '#f1f1f1' }}
        >
          <h6 className='p-0 m-0'>Email:</h6>
          <h6 className='p-0 m-0'>{localStorageItems.email}</h6>
        </div>
        <div className='d-flex justify-content-between  py-2 px-4'>
          <h6 className='p-0 m-0'>Location:</h6>
          <h6 className='p-0 m-0'>{localStorageItems.location}</h6>
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
            This address only supports USDT transfers via the TRC20 protocol. Do
            not send transfers from smart contracts, TRX coins or any other
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
            The funds will be credited as soon as we get 1 confirmation from the
            TRON network.
          </p>
          <p>
            <span className='text-danger'>Attention! </span>
            Please note that the address the system gave you for this payment is
            unique and can only be used once. Each payment needs to be initiated
            anew.
          </p>
          <p>Crypto deposits are monitored according to our AML program.</p>
        </div>
      </div>
    </Container>
  )
}

export default Payment
