import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'antd'
import AntdSpinner from '../../components/AntdSpinner'
import { PlusOutlined, CheckOutlined } from '@ant-design/icons'
import IdVerifyModal from '../../components/IdVerifyModal'
import idImage from '../../assets/id.jpg'
import testmrz from '../../assets/testmrz.jpg'

const IdVerification = ({ blurred, nextStepHandler }) => {
  const [imageLoading, setImageLoading] = useState(false)
  const [imgSrc, setImgSrc] = useState('')
  const [visible, setVisible] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [scanMessage, setScanMessage] = useState('')

  // read text from passport
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [alpha3, setAlpha3] = useState('')
  const [country, setCountry] = useState('')
  const [flag, setFlag] = useState('')
  const [countryCode, setCountryCode] = useState('')
  const [passportNum, setPassportNum] = useState('')
  const [birthday, setBirthday] = useState('')

  const [devices, setDevices] = useState([])
  const [selectedDeviceId, setSelectedDeviceId] = useState('')
  //   screenshot states

  const loadImgRef = useRef()

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === 'videoinput')),
    [setDevices]
  )

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices)
  }, [handleDevices])

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
      <IdVerifyModal
        testmrz={testmrz}
        title='ID Verification'
        imageLoading={imageLoading}
        setImageLoading={setImageLoading}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        visible={visible}
        setVisible={setVisible}
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        alpha3={alpha3}
        setAlpha3={setAlpha3}
        country={country}
        setCountry={setCountry}
        flag={flag}
        setFlag={setFlag}
        countryCode={countryCode}
        setCountryCode={setCountryCode}
        passportNum={passportNum}
        setPassportNum={setPassportNum}
        birthday={birthday}
        setBirthday={setBirthday}
      />
      <h5 className='mb-3'>Verify your ID</h5>
      <hr />
      <h6>Example</h6>
      <div className='col-md-3'>
        <img
          className='w-100 h-100 rounded'
          style={{ objectFit: 'cover', filter: !blurred ? 'blur(8px)' : '' }}
          src={idImage}
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
          Take a picture of your passport's mrz code at the bottom of your bio
          page
        </p>{' '}
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
        {/* ID verification results here for testing */}
        {/* 
          firstName +
          ', ' +
          lastName +
          ', ' + 
          ', ' +
          country +
          ', ' +
          flag +
          ', ' +
          countryCode +
          ', ' +
          passportNum +
          ', ' +
          birthday */}
        {/* <div>First name: {firstName}</div>
        <div>Last name: {lastName}</div>
        <div>Country: {country}</div>
        <div>Flag: {flag}</div>
        <div>Country code: {alpha3}</div>
        <div>Passport Number: {passportNum}</div>
        <div>Birthday: {birthday}</div> */}
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
