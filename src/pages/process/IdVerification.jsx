import React, { useState } from 'react'
import { Button } from 'antd'
import UploadComponent from '../../components/UploadComponent'

const IdVerification = ({ blurred, nextStepHandler }) => {
  const [imageUrl, setImageUrl] = useState('')

  return (
    <div>
      <h5 className='mb-3'>Verify your ID</h5>
      <hr />
      <h6>Example</h6>
      <div className='col-md-3'>
        <img
          className='w-100 h-100 rounded'
          style={{ objectFit: 'cover', filter: !blurred ? 'blur(8px)' : '' }}
          src='https://media.istockphoto.com/vectors/driver-license-with-male-photo-identification-or-id-card-template-vector-id1073597286'
          alt=''
        />
      </div>
      {/* description */}
      <div className='rubik-400 mt-4'>
        <p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='green'
            className='bi bi-check2 me-2'
            viewBox='0 0 16 16'
          >
            <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
          </svg>
          No black and white images
        </p>
        <p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='green'
            className='bi bi-check2 me-2'
            viewBox='0 0 16 16'
          >
            <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
          </svg>
          Don't use blurry images to upload
        </p>
        <p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='red'
            className='bi bi-x me-2'
            viewBox='0 0 16 16'
          >
            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
          </svg>
          Please choose a well-lit place to take photos
        </p>
        <p className='my-4 fw-bold'>
          File size must be between 10KB and 5120KB in .jpg/.jpeg/.png format.
        </p>
        <UploadComponent imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </div>
      <div className='small text-muted rubik-400 mt-3'>
        Please complete the ID verification process first.
      </div>
      <Button
        disabled={!imageUrl}
        onClick={nextStepHandler}
        className='titillium-400 px-4'
        type='primary'
        shape='round'
        // icon={<FileDoneOutlined />}
        size='large'
      >
        Complete Verification
      </Button>
    </div>
  )
}

export default IdVerification
