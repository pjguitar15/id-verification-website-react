import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import UploadComponent from '../../components/UploadComponent'
import AntdSpinner from '../../components/AntdSpinner'
import SelfieModal from '../../components/SelfieModal'
import { PlusOutlined, CheckOutlined } from '@ant-design/icons'
import Axios from 'axios'

const IdVerification = ({ blurred, nextStepHandler }) => {
  const [imageUrl, setImageUrl] = useState('')
  const [imageLoading, setImageLoading] = useState(false)
  const [imgSrc, setImgSrc] = useState(null)
  const [visible, setVisible] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [scanMessage, setScanMessage] = useState('')

  const [deviceId, setDeviceId] = useState({})
  const [devices, setDevices] = useState([])
  const [selectedDeviceId, setSelectedDeviceId] = useState('')
  //   screenshot states

  const loadImgRef = useRef()
  const webcamRef = useRef(null)

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    setImageLoading(true)
    // how to use axios. this is inside uploadImage function
    const formData = new FormData()
    formData.append('file', imageSrc) // selectedImage is a state
    formData.append('upload_preset', 'aipowered')

    const cloudName = 'philcob'
    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    )
      .then((res) => setImgSrc(res.data.url))
      .then(() => setImageLoading(false))

    setImgSrc(imageSrc)
  }, [webcamRef, setImgSrc])

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput')),
    [setDevices]
  )

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices)
  }, [handleDevices])

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: 'user',
  }

  useEffect(() => {
    if (devices.length > 0) {
      setSelectedDeviceId(devices[0].deviceId)
    }
  }, [devices])

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
        setScanMessage('Processing done. ID Verification completed!')
      }, 10000)
      setTimeout(() => {
        setScanMessage('Process complete. Proceed to payment.')
        setIsProcessing(false)
      }, 13000)
    }
  }, [imgSrc])

  return (
    <div>
      <SelfieModal
        title='ID Verification'
        imageLoading={imageLoading}
        setImageLoading={setImageLoading}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        visible={visible}
        setVisible={setVisible}
      />
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
        <p className='my-4 fw-bold' ref={loadImgRef}>
          File size must be between 10KB and 5120KB in .jpg/.jpeg/.png format.
        </p>
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
            Button is disabled. Please complete the ID Verification process
            first.
          </div>
        ) : (
          ''
        )}
        {/* Image scanning here */}
        {isProcessing ? (
          <div className='d-flex'>
            {scanMessage !== 'Processing done. ID Verification completed!' ? (
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
      </div>
      <div className='small text-muted rubik-400 mt-3'>
        Please complete the ID verification process first.
      </div>
      <Button
        disabled={scanMessage !== 'Process complete. Proceed to payment.'}
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
