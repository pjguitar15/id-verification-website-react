import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import VerifiedId from './VerifiedId'
import ThankYouModal from '../../components/ThankYouModal'

const VerificationResults = ({ setIsLastStepDone }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const nextStepHandler = () => {
    setIsModalVisible(true)
  }
  return (
    <div>
      <ThankYouModal
        setIsLastStepDone={setIsLastStepDone}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
      <Container>
        <h2 className='rubik-400 text-center'>You're all set!</h2>
        <p className='text-center text-muted'>
          You have completed your identity verification with Ai-powered！
        </p>
        <p className='text-center text-muted'>
          Now that you're verified, the state can now processing your
          information. They may contact you via email to advise you of next
          steps.
        </p>
        <VerifiedId />
        <Button
          onClick={nextStepHandler}
          className='titillium-400 px-4 mt-4'
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
