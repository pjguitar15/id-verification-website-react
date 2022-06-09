import React from 'react'
import { Container } from 'react-bootstrap'
import StepsRound from './StepsRound'

const Steps = () => {
  return (
    <div className='mb-5'>
      <Container>
        <div className='d-flex align-items-center'>
          <StepsRound isFocused={true} step={'1'} label={'Pay'} />
          <StepsRound isFocused={false} step={'2'} label={'Receipt'} />
          <StepsRound isFocused={false} step={'3'} label={'Verify'} />
          <StepsRound
            isFocused={false}
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
