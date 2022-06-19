import React, { useState } from 'react'
import { CheckOutlined } from '@ant-design/icons'
import flag from '../../assets/philippine-flag.png'

const VerifiedId = () => {
  return (
    <div className='shadow-sm col-lg-8 mx-auto'>
      {/* header */}
      <div
        style={{
          background: '#2EA76C',
          borderTopLeftRadius: '7px',
          borderTopRightRadius: '7px',
        }}
        className='p-3 d-flex text-align-center'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='22'
          height='22'
          fill='white'
          className='bi bi-check-circle me-2'
          viewBox='0 0 16 16'
        >
          <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
          <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
        </svg>
        <h5 className='rubik-400 p-0 m-0 text-light'>VERIFIED IDENTITY</h5>
      </div>

      {/* body */}
      <div
        className='p-4'
        style={{
          borderBottomLeftRadius: '7px',
          borderBottomRightRadius: '7px',
        }}
      >
        <div className='d-flex justify-content-between'>
          <div>
            <h6 className='rubik-400 fw-bold text-dark py-1'>
              ID type: <span className='fw-bold'>Passport</span>
            </h6>
            <h6 className='rubik-400 fw-bold text-dark py-1'>
              First name:{' '}
              <span className='fw-bold'>
                {localStorage.getItem('firstName')}
              </span>
            </h6>
            <h6 className='rubik-400 fw-bold text-dark py-1'>
              Middle name:{' '}
              <span className='fw-bold'>
                {localStorage.getItem('middleName')}
              </span>
            </h6>
            <h6 className='rubik-400 fw-bold text-dark py-1'>
              Middle name:{' '}
              <span className='fw-bold'>
                {localStorage.getItem('lastName')}
              </span>
            </h6>
            <h6 className='rubik-400 fw-bold text-dark py-1'>
              Country code: <span className='fw-bold'>PHL</span>
            </h6>
            <h6 className='rubik-400 fw-bold text-dark py-1'>
              ID number: <span className='fw-bold'>PF389FYZN</span>
            </h6>
            <h6 className='rubik-400 fw-bold text-dark py-1'>
              Birthday: <span className='fw-bold'>05-15-98</span>
            </h6>
            <div className='col-md-2 col-4 my-3'>
              <img className='w-100' src={flag} alt='flag' />
            </div>
          </div>
          <div className='col-md-3 col-xl-4 col-4'>
            <img
              className='w-100 rounded shadow-sm'
              src={localStorage.getItem('selfieImg')}
              alt=''
            />
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='d-md-flex d-inline-block'>
            <div className='d-flex align-items-center'>
              <CheckOutlined />
              <h6 className='ms-1 m-0 p-0'>Data Validated</h6>
            </div>
            <div className='d-flex align-items-center ms-md-3'>
              <CheckOutlined />
              <h6 className='ms-1 m-0 p-0'>No forgery detected</h6>
            </div>
          </div>

          <div>
            <h5
              style={{ color: '#2EA76C' }}
              className='rubik-400 fw-bold text-end m-0 p-0'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='22'
                height='22'
                fill='green'
                className='bi bi-check-circle me-2'
                viewBox='0 0 16 16'
              >
                <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
                <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
              </svg>
              VERIFIED
            </h5>
            <div className='rubik-400 fw-bold text-muted text-end m-0 p-0'>
              {JSON.stringify(new Date()).slice(1, 11)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifiedId
