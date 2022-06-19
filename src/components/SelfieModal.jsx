import { Button, Modal } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import { Form } from 'react-bootstrap'
import { PlusOutlined } from '@ant-design/icons'
import Axios from 'axios'

const SelfieModal = ({
  visible,
  setVisible,
  imgSrc,
  setImgSrc,
  setImageLoading,
  imageLoading,
  title,
}) => {
  const [deviceId, setDeviceId] = React.useState({})
  const [devices, setDevices] = React.useState([])
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
      .then((res) => {
        localStorage.setItem('selfieImg', res.data.url)
        setImgSrc(res.data.url)
      })
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
                <Webcam
                  ref={webcamRef}
                  audio={false}
                  height={'auto'}
                  screenshotFormat='image/jpeg'
                  width={'100%'}
                  videoConstraints={{ deviceId: item.deviceId }}
                />
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

export default SelfieModal
