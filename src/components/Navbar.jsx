import React, { useState, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import { FileDoneOutlined, CaretUpOutlined } from '@ant-design/icons'
// navigate
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [size, setSize] = useState('large')
  const [isOutOfLanding, setIsOutOfLanding] = useState(false)
  const navigate = useNavigate()
  const top = useRef()

  const scrollListener = () => {
    if (window.scrollY >= 250) {
      setIsOutOfLanding(true)
    } else {
      setIsOutOfLanding(false)
    }
  }

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', scrollListener)
  return (
    <div className='shadow-sm py-3' ref={top}>
      <div
        style={{
          position: 'fixed',
          bottom: '3rem',
          right: '3rem',
          zIndex: '4',
        }}
      >
        <Button
          onClick={() => scrollToSection(top)}
          size={size}
          shape='round'
          className='text-light titillium-400 px-4 border-0'
          style={{ background: '#40B452' }}
        >
          <span className='me-2 pb-4'>
            <CaretUpOutlined />
          </span>
          Back to Top
        </Button>
      </div>
      <Container>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='brand'>
            <h4
              onClick={() => navigate('/')}
              style={{ color: '#40B452', cursor: 'pointer' }}
              className='m-0 titillium-600'
            >
              AI-powered©
            </h4>
          </div>
          <Button
            className='titillium-400 px-4'
            type='primary'
            shape='round'
            // icon={<FileDoneOutlined />}
            size={size}
            style={{ background: '#40B452', border: 'none' }}
          >
            Register
          </Button>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
