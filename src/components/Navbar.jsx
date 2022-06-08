import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import { CaretUpOutlined } from '@ant-design/icons'
// logo
import logo from '../assets/AI-powered-logo-navbar.png'
// navigate
import { useNavigate } from 'react-router-dom'

const Navbar = ({ regFormRef }) => {
  const [size, setSize] = useState('large')
  const [isOutOfLanding, setIsOutOfLanding] = useState(false)
  const top = useRef()
  const navigate = useNavigate()

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
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])

  const scrollListener = () => {
    if (window.scrollY >= 250) {
      setIsOutOfLanding(true)
    } else {
      setIsOutOfLanding(false)
    }
  }

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  window.addEventListener('scroll', scrollListener)
  return (
    <div className='shadow-sm py-3' ref={top}>
      <Button
        onClick={() => scrollToSection(top)}
        size={size}
        shape='round'
        className='text-light titillium-400 px-4 border-0'
        style={{
          background: '#40B452',
          position: 'fixed',
          bottom: '3rem',
          right: windowDimension.winWidth < 990 ? '50%' : '3rem',
          transform: windowDimension.winWidth < 990 ? 'translate(50%, 0)' : '',
          zIndex: '4',
        }}
      >
        <span className='me-2 pb-4'>
          <CaretUpOutlined />
        </span>
        Back to Top
      </Button>
      <Container>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='brand' onClick={() => navigate('/')}>
            <div className='col-7 col-md-5 col-lg-4 col-xl-3'>
              <img src={logo} className='w-100 h-100' alt='logo' />
            </div>
          </div>
          <Button
            onClick={() => scrollToSection(regFormRef)}
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
