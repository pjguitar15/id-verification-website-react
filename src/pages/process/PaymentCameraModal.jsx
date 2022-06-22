import { Button, Modal } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import { Form } from 'react-bootstrap'
import Axios from 'axios'

const IdVerifyModal = ({ visible, setVisible, imgSrc, setImgSrc, title }) => {
  const [devices, setDevices] = useState([])
  const [selectedDeviceId, setSelectedDeviceId] = useState('')
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  const webcamRef = useRef(null)
  const widthHeightRef = useRef()

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot()
    // how to use axios. this is inside uploadImage function
    const formData = new FormData()
    formData.append('file', imageSrc) // selectedImage is a state
    formData.append('upload_preset', 'ai-powered')

    const cloudName = 'https-ai-powered-io'
    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    )
      .then((res) => {
        localStorage.setItem('paymentImg', res.data.url)
        setImgSrc(res.data.url)
      })
      .then(() => {
        setVisible(false)
      })

    // setImgSrc(imageSrc)
  }, [webcamRef, setImgSrc])

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
      setSelectedDeviceId(devices[1].deviceId)
    }
  }, [devices])

  return (
    <>
      <Modal
        title={title}
        centered
        visible={visible}
        // onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
        width={800}
      >
        {windowDimension.winWidth > 990 ? (
          <>
            {/* devices selector */}
            <div className='small text-muted mb-1'>Please select a device</div>
            <div className='col-lg-5'>
              <Form.Select
                className='mb-3'
                onChange={(e) => setSelectedDeviceId(e.target.value)}
              >
                {devices.map((device, key) => (
                  <option value={device.deviceId} key={key}>
                    {device.label}
                  </option>
                ))}
              </Form.Select>
            </div>
          </>
        ) : (
          ''
        )}
        {imgSrc ? (
          <div className='col-12'>
            <img
              className='w-100 h-100'
              style={{ objectFit: 'cover' }}
              src={imgSrc}
              alt='captured'
            />
          </div>
        ) : (
          devices
            .filter((item) => item.deviceId === selectedDeviceId)
            .map((item, index) => (
              <div key={index}>
                <div ref={widthHeightRef} style={{ position: 'relative' }}>
                  {/* <div
                    className='bg-dark'
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      height: '45%',
                      width: '100%',
                      opacity: '0.7',
                    }}
                  ></div>
                  <div
                    className='bg-dark'
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      left: '0',
                      height: '45%',
                      width: '100%',
                      opacity: '0.7',
                    }}
                  ></div> */}
                  <Webcam
                    ref={webcamRef}
                    audio={false}
                    height={'auto'}
                    screenshotFormat='image/jpeg'
                    width={'100%'}
                    videoConstraints={{ deviceId: item.deviceId }}
                  />
                </div>
                <div className='mt-2'>
                  <Button onClick={capture}>Capture photo</Button>
                </div>
              </div>
            ))
        )}
      </Modal>
    </>
  )
}

export default IdVerifyModal
