import { Button, Modal } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
import AntdSpinner from '../components/AntdSpinner'
import Webcam from 'react-webcam'
import * as faceapi from 'face-api.js'
// import Clarifai from 'clarifai'
import Axios from 'axios'

import { Form } from 'react-bootstrap'
import SelfieInstructions from '../pages/process/SelfieInstructions'

const SelfieModal = ({
  visible,
  setVisible,
  imgSrc,
  setImgSrc,
  imageLoading,
  setImageLoading,
}) => {
  const [initializing, setInitializing] = useState(false)
  const [devices, setDevices] = React.useState([])
  const [selectedDeviceId, setSelectedDeviceId] = useState('')
  const [detectionScore, setDetectionScore] = useState([])
  const [videoHeight, setVideoHeight] = useState(200)
  const [videoWidth, setVideoWidth] = useState(200)
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

  useEffect(() => {
    if (visible) {
      const loadModels = async () => {
        const MODEL_URL = process.env.PUBLIC_URL + '/models'
        setInitializing(true)
        Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
          faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
        ]).then(() => {
          if (visible) {
            console.log('INITIALIZED')
            navigator.getUserMedia(
              {
                video: {},
              },
              (stream) => (webcamRef.current.srcObject = stream),
              (err) => console.log(err)
            )
          } else {
            navigator.getUserMedia(
              {
                video: {},
              },
              (stream) => {
                webcamRef.current.srcObject = null
                console.log('src object is now null')
              },
              (err) => console.log(err)
            )
          }
        })
      }
      loadModels()
    }
  }, [visible])

  const handleVideoOnPlay = () => {
    if (visible) {
      setInterval(async () => {
        if (initializing) {
          setInitializing(false)
        }
        canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
          webcamRef.current
        )
        const displaySize = {
          width: videoWidth,
          height: videoHeight,
        }
        faceapi.matchDimensions(canvasRef.current, displaySize)
        const detections = await faceapi
          .detectAllFaces(
            webcamRef.current,
            new faceapi.TinyFaceDetectorOptions()
          )
          .withFaceLandmarks()

        const resizedDetections = faceapi.resizeResults(detections, displaySize)
        canvasRef.current
          .getContext('2d')
          .clearRect(
            0,
            0,
            webcamRef.current.clientWidth,
            webcamRef.current.clientHeight
          )
        faceapi.draw.drawDetections(canvasRef.current, resizedDetections)
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections)
        setDetectionScore(detections)
      }, 100)
    }
  }

  useEffect(() => {
    if (visible) {
      if (
        detectionScore.length > 0 &&
        detectionScore[0].detection._score > 0.95
      ) {
        console.log('person exist and image clear!')
        setVisible(false)
        console.log('IMAGE CAPTURED')
        capture()
      } else {
        console.log('image not clear')
      }
    }
  }, [detectionScore, initializing])

  useEffect(() => {
    if (visible) {
      setVideoWidth(webcamRef.current.clientWidth)
      setVideoHeight(webcamRef.current.clientHeight)
      console.log('width: ' + videoWidth)
      console.log('height: ' + videoHeight)
    }
  }, [visible])

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  //   screenshot states
  const webcamRef = useRef(null)
  const canvasRef = useRef()

  const capture = React.useCallback(() => {
    // const imageSrc = webcamRef.current.getScreenshot()
    setImageLoading(true)
    var ctx = canvasRef.current.getContext('2d')
    var img = new Image()
    ctx.drawImage(
      webcamRef.current,
      0,
      0,
      webcamRef.current.clientWidth,
      webcamRef.current.clientHeight
    )
    img.src = canvasRef.current.toDataURL('image/png')
    img.width = webcamRef.current.clientWidth
    img.height = webcamRef.current.clientHeight

    // img.width = 750
    // img.height = 400

    console.log('img width: ' + img.width)
    console.log('img height: ' + img.height)

    // how to use axios. this is inside uploadImage function
    const formData = new FormData()
    formData.append('file', img.src) // selectedImage is a state
    formData.append('upload_preset', 'aipowered')

    const cloudName = 'philcob'
    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    )
      .then((res) => setImgSrc(res.data.url))
      .then(() => setImageLoading(false)) // res.data.url takes the image url
  }, [webcamRef, imgSrc])

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

  return (
    <>
      <Modal
        title='Selfie Verification'
        centered
        visible={visible}
        // onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        footer={null}
        width={800}
      >
        {initializing ? (
          <div className='d-flex'>
            <AntdSpinner />
            <h6 className='ms-2'>Selfie Verification is loading...</h6>
          </div>
        ) : windowDimension.winWidth > 990 ? (
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
                  Image will automatically capture when image is clear and face
                  is visible.
                </p>
                <div className='rubik-400'>
                  Face Visibility (should be 0.95 or higher):{' '}
                  {detectionScore.length > 0
                    ? detectionScore[0].detection._score.toFixed(2)
                    : 'Loading...'}
                </div>
                <div className='rubik-400'>
                  Status:{' '}
                  {detectionScore.length > 0 &&
                  detectionScore[0].detection._score < 90
                    ? 'Face is visible but not clear. Lighting should not be too bright/dark...'
                    : ''}
                </div>
                <div style={{ position: 'relative' }}>
                  <video
                    ref={webcamRef}
                    autoPlay
                    muted
                    height='auto'
                    width='100%'
                    onPlay={visible ? handleVideoOnPlay : ''}
                  ></video>
                  <div
                  // style={{ position: 'absolute', top: '0', left: '0' }}
                  >
                    <canvas
                      height={videoHeight}
                      width={videoWidth}
                      ref={canvasRef}
                    ></canvas>
                  </div>
                </div>

                {/* <div className='mt-2'>
                  <Button onClick={capture}>Capture photo</Button>
                </div> */}
              </div>
            ))
        )}
      </Modal>
    </>
  )
}

export default SelfieModal
