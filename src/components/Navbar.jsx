import React, { useState, useEffect, useRef } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import { CaretUpOutlined, FileDoneOutlined } from '@ant-design/icons'
// logo
import logo from '../assets/AI-powered-logo-navbar.png'
// navigate
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Navbar = ({ regFormRef, startRef }) => {
  const [size, setSize] = useState('large')
  const [isOutOfLanding, setIsOutOfLanding] = useState(false)
  const top = useRef()
  const navigate = useNavigate()
  const location = useLocation()

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
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(
        () => elementRef.current.scrollIntoView({ behavior: 'smooth' }),
        800
      )
    } else {
      elementRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  window.addEventListener('scroll', scrollListener)

  useEffect(() => {
    startRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [location])

  // logout handler
  const logoutHandler = () => {
    // destroy token
    sessionStorage.removeItem('Auth Token')
    navigate('/admin-login')
  }
  return (
    <div ref={startRef}>
      <div className='shadow-sm py-3' ref={top}>
        {location.pathname === '/' ? (
          <Button
            onClick={() => scrollToSection(top)}
            size={size}
            shape='round'
            className={`text-light titillium-400 px-4 border-0`}
            style={{
              background: '#40B452',
              position: 'fixed',
              bottom: '3rem',
              right: windowDimension.winWidth < 990 ? '50%' : '3rem',
              transform:
                windowDimension.winWidth < 990 ? 'translate(50%, 0)' : '',
              zIndex: '4',
            }}
          >
            <span className='me-2 pb-4'>
              <CaretUpOutlined />
            </span>
            Back to Top
          </Button>
        ) : (
          ''
        )}

        <Container>
          <div className='d-flex justify-content-between align-items-center'>
            <div
              onClick={() => navigate('/')}
              className='col-5 col-md-3 col-lg-2 col-xl-2'
            >
              <img src={logo} className='w-100 brand h-100' alt='logo' />
            </div>
            {location.pathname !== '/purchase-verification' &&
            location.pathname !== '/admin' &&
            location.pathname !== '/admin-login' ? (
              <div className='row col-lg-9 col-xl-7'>
                {windowDimension.winWidth > 991 ? (
                  <>
                    <div className='col-md-2 text-center d-flex justify-content-center align-items-center ms-auto'>
                      <Link className='text-success titillium-700' to='/'>
                        HOME
                      </Link>
                    </div>
                    <div className='col-md-3 text-center d-flex justify-content-center align-items-center'>
                      <Link
                        className='text-success titillium-700'
                        to='/partner-program'
                      >
                        PARTNER PROGRAM
                      </Link>
                    </div>
                    <div className='col-md-2 text-center d-flex justify-content-center align-items-center'>
                      <Link
                        className='text-success titillium-700'
                        to='/contact'
                      >
                        CONTACT
                      </Link>
                    </div>{' '}
                  </>
                ) : (
                  ''
                )}
                <Button
                  onClick={() => scrollToSection(regFormRef)}
                  className='titillium-400 col-12 mx-auto mx-md-1 col-lg-2 px-4'
                  type='primary'
                  shape='round'
                  size={size}
                  style={{ background: '#40B452', border: 'none' }}
                >
                  Register
                </Button>
                {/* </div> */}
              </div>
            ) : (
              ''
            )}

            {location.pathname === '/admin' ? (
              <Button
                onClick={logoutHandler}
                className='titillium-400 px-4'
                type='primary'
                shape='round'
                // icon={<FileDoneOutlined />}
                size={size}
                style={{ background: '#40B452', border: 'none' }}
              >
                Logout
              </Button>
            ) : (
              ''
            )}
          </div>
        </Container>
        {windowDimension.winWidth <= 991 ? (
          <Container className='p-0'>
            <div className='row me-auto'>
              <div className='col-4 mt-3 text-center d-flex justify-content-center align-items-center'>
                <Link className='text-success titillium-700' to='/'>
                  HOME
                </Link>
              </div>
              <div className='col-5 mt-3 text-center d-flex justify-content-center align-items-center'>
                <Link
                  className='text-success titillium-700'
                  to='/partner-program'
                >
                  PARTNER PROGRAM
                </Link>
              </div>
              <div className='col-3 mt-3 text-center d-flex justify-content-center align-items-center'>
                <Link className='text-success titillium-700' to='/contact'>
                  CONTACT
                </Link>
              </div>{' '}
            </div>
          </Container>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Navbar
