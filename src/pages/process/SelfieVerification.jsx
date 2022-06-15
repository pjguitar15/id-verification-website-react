import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'antd'
import SelfieModal from '../../components/SelfieModal'
import { PlusOutlined, CheckOutlined } from '@ant-design/icons'
import AntdSpinner from '../../components/AntdSpinner'
import SelfieInstructions from './SelfieInstructions'

const SelfieVerification = ({ blurred, continueButtonHandler }) => {
  const [imageLoading, setImageLoading] = useState(false)
  const [visible, setVisible] = useState(false)
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
        imageLoading={imageLoading}
        setImageLoading={setImageLoading}
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
        <SelfieInstructions />
        <p className='mt-4 mb-2 fw-bold' ref={loadImgRef}>
          File size must be between 10KB and 5120KB in .jpg/.jpeg/.png format.
        </p>
      </div>
      {imageLoading ? <AntdSpinner /> : ''}

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
