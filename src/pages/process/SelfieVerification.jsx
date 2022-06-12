import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'antd'
import SelfieModal from '../../components/SefieModal'
import { LoadingOutlined, PlusOutlined, CheckOutlined } from '@ant-design/icons'
import AntdSpinner from '../../components/AntdSpinner'

const SelfieVerification = ({ blurred, continueButtonHandler }) => {
  const [visible, setVisible] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [scanMessage, setScanMessage] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [imgSrc, setImgSrc] = useState(null)
  const loadImgRef = useRef()
  useEffect(() => {
    setVisible(false)
    loadImgRef.current.scrollIntoView({ behavior: 'smooth' })
    if (imgSrc) {
      setIsProcessing(true)
      setScanMessage('Scanning image...')
      setTimeout(() => {
        setScanMessage('Please wait for a moment...')
      }, 5000)
      setTimeout(() => {
        setScanMessage('Processing done. Selfie Verification completed!')
      }, 10000)
      setTimeout(() => {
        setScanMessage('Process complete. Proceed to ID verification.')
        setIsProcessing(false)
      }, 13000)
    }
  }, [imgSrc])
  return (
    <div>
      <SelfieModal
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        visible={visible}
        setVisible={setVisible}
      />
      <h5 className='mb-3'>Take a selfie</h5>
      <hr />
      <h6>Example</h6>
      <div className='col-md-3'>
        <img
          className='w-100 h-100 rounded'
          style={{ objectFit: 'cover', filter: !blurred ? 'blur(8px)' : '' }}
          src='https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?k=20&m=1288538088&s=612x612&w=0&h=tQPfhDfWqApLGZN_rIv6_eV464qOAH9SqXsJYAJveYY='
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
          Take a selfie of yourself with a neutral expression
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
          Make sure your whole face is visible, centered, and your eyes are open
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
          Do not crop your ID or use screenshots of your ID
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
          Do not hide or alter parts of your face (No hats/beauty
          images/filters/headgear)
        </p>
        <p className='mt-4 mb-2 fw-bold' ref={loadImgRef}>
          File size must be between 10KB and 5120KB in .jpg/.jpeg/.png format.
        </p>
      </div>
      {/* Insert selfie modal button here */}
      {imgSrc ? (
        <div className='col-8 mb-3'>
          <img
            className='w-100 h-100'
            style={{ objectFit: 'cover' }}
            src={imgSrc}
            alt='captured'
          />
        </div>
      ) : (
        <button onClick={() => setVisible(true)} className='selfie-button'>
          <PlusOutlined className='m-0' />
        </button>
      )}

      {!imgSrc ? (
        <div className='small text-muted rubik-400 mt-3'>
          Button is disabled. Please complete the selfie process first.
        </div>
      ) : (
        ''
      )}
      {/* Image scanning here */}
      {isProcessing ? (
        <div className='d-flex'>
          {scanMessage !== 'Processing done. Selfie Verification completed!' ? (
            <AntdSpinner />
          ) : (
            <div className='text-success'>
              <CheckOutlined />
            </div>
          )}
          <h6 className='ms-2'>{scanMessage}</h6>
        </div>
      ) : (
        ''
      )}

      <Button
        disabled={
          scanMessage !== 'Process complete. Proceed to ID verification.'
        }
        onClick={continueButtonHandler}
        className='titillium-400 px-4 mt-2'
        type='primary'
        shape='round'
        // icon={<FileDoneOutlined />}
        size='large'
      >
        Continue
      </Button>
    </div>
  )
}

export default SelfieVerification
