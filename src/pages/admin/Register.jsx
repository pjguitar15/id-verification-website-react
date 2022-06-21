import React, { useState, useEffect } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Alert } from 'antd'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { app } from '../../firebase/firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from '../../firebase/firebaseConfig'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore'

const Register = () => {
  const [errorMsg, setErrorMsg] = useState('')
  const navigate = useNavigate()
  const onFinish = (values) => {
    const authentication = getAuth(app)
    if (values.password !== values.confirmPassword) {
      setErrorMsg('Passwords do not match!')
    } else {
      // if matched
      createUserWithEmailAndPassword(
        authentication,
        values.email,
        values.password
      )
        .then((response) => {
          alert(
            'Your admin account has been created successfully! Please login now.'
          )
          navigate('/admin-login')
        })
        .then(async () => {
          const collectionRef = collection(db, 'admin-accounts')
          await addDoc(collectionRef, {
            email: values.email,
            position:
              values.email === 'aipoweredhelpdesk@gmail.com'
                ? 'main admin'
                : 'admin',
            timestamp: serverTimestamp(),
          })
        })
        .catch((err) => {
          const errorMessage = err.message
          setErrorMsg(errorMessage)
        })
    }
    console.log(values.email)
    console.log(values.password)
    console.log(values.confirmPassword)
  }
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/admin')
    } else {
      navigate('/admin-register')
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
          <h4 className='mb-4'>Create an Admin Account</h4>
          <Form.Item
            type='email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className='site-form-item-icon' />}
              placeholder='Email'
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
          <Form.Item
            name='confirmPassword'
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
              Sign up
            </Button>
          </Form.Item>
          {errorMsg ? <Alert message={errorMsg} type='error' /> : ''}
        </Form>
      </Container>
    </div>
  )
}

export default Register
