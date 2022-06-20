import React, { useState, useEffect } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Alert } from 'antd'
import { Container } from 'react-bootstrap'
import { app } from '../../firebase/firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()
  const onFinish = (values) => {
    const authentication = getAuth(app)
    signInWithEmailAndPassword(authentication, values.username, values.password)
      .then((response) => {
        navigate('/admin')
        sessionStorage.setItem(
          'Auth Token',
          response._tokenResponse.refreshToken
        )
        setIsError(false)
      })
      .catch((err) => {
        const errorCode = err.code
        const errorMessage = err.message
        console.log(errorCode)
        console.log(errorMessage)
        setIsError(true)
      })
  }
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/admin')
    } else {
      navigate('/admin-login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='bg-light py-5'>
      <Container>
        <Form
          name='normal_login'
          className='login-form col-lg-6 mx-auto border p-5 shadow-sm bg-white'
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h4 className='mb-4'>Admin Login</h4>
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Username'
            />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className='site-form-item-icon' />}
              type='password'
              placeholder='Password'
            />
          </Form.Item>

          <Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              className='login-form-button border-0'
            >
              Log in
            </Button>
          </Form.Item>
          {isError ? (
            <Alert message='Invalid username/password' type='error' />
          ) : (
            ''
          )}
        </Form>
      </Container>
    </div>
  )
}

export default Login
