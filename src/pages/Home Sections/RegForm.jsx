import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'antd'
import CountrySelect from '../../components/CountrySelect'

const RegForm = () => {
  const [size, setSize] = useState('large')
  return (
    <div className='bg-light p-5 rounded shadow-sm'>
      <h2 className='titillium-600'>Register</h2>
      <Form>
        <Form.Group className='my-3'>
          <Form.Text>First name</Form.Text>
          <Form.Control placeholder='Enter first name' />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Text>Middle name</Form.Text>
          <Form.Control placeholder='Enter middle name' />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Text>Last name</Form.Text>
          <Form.Control placeholder='Enter last name' />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Text>Contact Number</Form.Text>
          <Form.Control placeholder='Enter contact number' />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Text>Email</Form.Text>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>
        <CountrySelect />
        <Button
          className='titillium-400 px-4 text-light mt-3'
          shape='round'
          size={size}
          style={{ background: '#40B452', border: 'none' }}
        >
          Submit Form
        </Button>
      </Form>
    </div>
  )
}

export default RegForm
