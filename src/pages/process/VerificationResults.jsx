import React from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const VerificationResults = ({ setIsLastStepDone }) => {
  const navigate = useNavigate()
  const nextStepHandler = () => {
    setIsLastStepDone(true)
    navigate('/')
  }
  return (
    <div>
      <Container>
        <h2>Verification Results</h2>
        <Button
          onClick={nextStepHandler}
          className='titillium-400 px-4 mt-2'
          type='primary'
          shape='round'
          // icon={<FileDoneOutlined />}
          size='large'
        >
          Finish
        </Button>
      </Container>
    </div>
  )
}

export default VerificationResults
