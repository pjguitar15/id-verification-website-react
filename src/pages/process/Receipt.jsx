import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'

const Receipt = ({ setIsStepTwoDone }) => {
  const nextStepHandler = () => {
    setIsStepTwoDone(true)
  }
  return (
    <div>
      <Container>
        <div className='col-md-8 mx-auto'>
          <div className='d-flex justify-content-between mb-4'>
            <div>
              <h6>Order #12345</h6>
              <div className='text-muted rubik-400'>
                1 x AI-powered ID Verification
              </div>
            </div>
            <div className='text-end'>
              <h6>20 USDT</h6>
              <div className='text-muted rubik-400'>$1.00</div>
            </div>
          </div>
          <hr />
          <div className='text-center mt-5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='80'
              height='80'
              fill='green'
              className='bi bi-check-circle'
              viewBox='0 0 16 16'
            >
              <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
              <path d='M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z' />
            </svg>
            <h2 className='text-success rubik-400 mt-4'>Paid and Confirmed</h2>
          </div>
          <hr className='mt-5' />
          <Button
            onClick={nextStepHandler}
            className='titillium-400 px-4 mt-4'
            type='primary'
            shape='round'
            // icon={<FileDoneOutlined />}
            size='large'
            style={{ background: '#40B452', border: 'none' }}
          >
            Next
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Receipt
