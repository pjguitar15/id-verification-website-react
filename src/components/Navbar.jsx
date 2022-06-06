import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Button } from 'antd'
import { FileDoneOutlined } from '@ant-design/icons'

const Navbar = () => {
  const [size, setSize] = useState('large')
  return (
    <div className='shadow-sm py-3 '>
      <Container>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='brand'>
            <h4 style={{ color: '#40B452' }} className='m-0 titillium-600'>
              BRAND LOGO
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
