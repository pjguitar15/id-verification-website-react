import React from 'react'
import { Modal } from 'antd'
import { useNavigate } from 'react-router-dom'

const ThankYouModal = ({
  isModalVisible,
  setIsModalVisible,
  setIsLastStepDone,
}) => {
  const navigate = useNavigate()
  return (
    <div>
      <Modal
        title='Verification Success'
        visible={isModalVisible}
        onOk={() => {
          navigate('/')
          setIsModalVisible(false)
          setIsLastStepDone(true)
          window.location.reload()
        }}
        onCancel={() => setIsModalVisible(false)}
      >
        <div className='d-flex'>
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
          <p>Thank you for your using Ai-powered ID Verification!</p>
        </div>
      </Modal>
    </div>
  )
}

export default ThankYouModal
