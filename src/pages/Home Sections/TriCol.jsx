import React from 'react'
import { Container } from 'react-bootstrap'

const TriCol = () => {
  return (
    <div className='py-5' style={{ background: '#e6ecff' }}>
      <Container>
        <h3 className='titillium-600 text-center mb-5'>
          End-to-end indentity verification delivers results
        </h3>
        <div className='row'>
          <div className='col-lg-4 p-2 text-center'>
            <div
              className='bg-light mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm'
              style={{ height: '8rem', width: '8rem', borderRadius: '50%' }}
            >
              <h1 className='m-0'>51%</h1>
            </div>
            <h5 className='mb-4 titillium-700'>Improved fraud accuracy</h5>
            <div className='text-muted titillium-400'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              hic natus et! Reiciendis, dolor omnis assumenda, sint culpa
              exercitationem reprehenderit voluptate nesciunt nostrum eveniet
              vel ipsam ut possimus in ratione!
            </div>
          </div>{' '}
          <div className='col-lg-4 p-2 text-center'>
            <div
              className='bg-light mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm'
              style={{ height: '8rem', width: '8rem', borderRadius: '50%' }}
            >
              <h1 className='m-0'>51%</h1>
            </div>
            <h5 className='mb-4 titillium-700'>Improved fraud accuracy</h5>
            <div className='text-muted titillium-400'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              hic natus et! Reiciendis, dolor omnis assumenda, sint culpa
              exercitationem reprehenderit voluptate nesciunt nostrum eveniet
              vel ipsam ut possimus in ratione!
            </div>
          </div>{' '}
          <div className='col-lg-4 p-2 text-center'>
            <div
              className='bg-light mx-auto mb-4 d-flex align-items-center justify-content-center shadow-sm'
              style={{ height: '8rem', width: '8rem', borderRadius: '50%' }}
            >
              <h1 className='m-0'>51%</h1>
            </div>
            <h5 className='mb-4 titillium-700'>Improved fraud accuracy</h5>
            <div className='text-muted titillium-400'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              hic natus et! Reiciendis, dolor omnis assumenda, sint culpa
              exercitationem reprehenderit voluptate nesciunt nostrum eveniet
              vel ipsam ut possimus in ratione!
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TriCol
