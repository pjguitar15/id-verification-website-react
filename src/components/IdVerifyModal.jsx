import { Button, Modal } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
import Webcam from 'react-webcam'
import { Form } from 'react-bootstrap'
import { PlusOutlined } from '@ant-design/icons'
import Axios from 'axios'
import Tesseract from 'tesseract.js'

const IdVerifyModal = ({
  setFirstName,
  setLastName,
  setAlpha3,
  setCountry,
  setFlag,
  setCountryCode,
  setPassportNum,
  setBirthday,
  visible,
  setVisible,
  imgSrc,
  setImgSrc,
  setImageLoading,
  title,
  testmrz,
}) => {
  const [deviceId, setDeviceId] = useState({})
  const [devices, setDevices] = useState([])
  const [selectedDeviceId, setSelectedDeviceId] = useState('')
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const tesseractRead = () => {
    console.log('scanning')
    if (imgSrc) {
      Tesseract.recognize(imgSrc).then(({ data: { text } }) => {
        alert('recognizing...')
        const split = text.split('\n')
        console.log(split)
        const splittedText = split[0]
        // notifies user if tesseract is not able to take anything from the photo
        if (splittedText.length === 0) {
          alert(`We couldn't detect your ID. Please try again`)
        }
        const nextLine = split[1]
        console.log(split)
        // extract country
        const resultCountry = splittedText.slice(2, 5)
        const startOfLastName = splittedText.slice(5)
        const resultLastName = startOfLastName.slice(
          0,
          startOfLastName.indexOf('<')
        )
        const startOfFirstNameIndex =
          resultCountry.length + resultLastName.length + 4
        const startOfFirstName = splittedText.slice(startOfFirstNameIndex)
        const resultFirstName = startOfFirstName.slice(
          0,
          startOfFirstName.indexOf('<')
        )
        const passportNumber = nextLine.slice(
          0,
          nextLine.indexOf(resultCountry)
        )
        const startOfDateIndex = passportNumber.length + resultCountry.length
        const startOfDate = nextLine.slice(startOfDateIndex)
        const resultBirthday =
          startOfDate.slice(0, 2) +
          '-' +
          startOfDate.slice(2, 4) +
          '-' +
          startOfDate.slice(4, 6)
        const startOfExpiryIndexSearch =
          passportNumber.length + resultCountry.length + resultBirthday.length
        console.log(nextLine.slice(startOfExpiryIndexSearch))
        Axios.get(`https://restcountries.com/v3.1/alpha?codes=${resultCountry}`)
          .then((res) => {
            setFirstName(resultFirstName)
            setLastName(resultLastName)
            setAlpha3(resultCountry)
            setCountry(res.data[0].name.common)
            setFlag(res.data[0].flags.png)
            setCountryCode(res.data[0].ccn3)
            setPassportNum(passportNumber)
            setBirthday(resultBirthday)
          })
          .then((error) => {
            console.log(error)
          })
        console.log('scanning done')
      })
    }
  }

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
        const firstPartOfUrl = res.data.url.slice(
          0,
          res.data.url.indexOf('load/') + 5
        )
        const newHeightValue = 0.1 * widthHeightRef.current.clientHeight
        const cropUrl = `c_crop,h_${Math.floor(newHeightValue)},w_${
          widthHeightRef.current.clientWidth
        }`
        const lastPartOfUrl = res.data.url.slice(
          res.data.url.indexOf('load/') + 4
        )
        setImgSrc(firstPartOfUrl + cropUrl + lastPartOfUrl)
        console.log(firstPartOfUrl + cropUrl + lastPartOfUrl)
      })
      .then(() => setImageLoading(false))

    // setImgSrc(imageSrc)
  }, [webcamRef, setImgSrc])

  useEffect(() => {
    if (imgSrc) {
      tesseractRead()
    }
  }, [imgSrc])

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
                  <div
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
                  ></div>
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
