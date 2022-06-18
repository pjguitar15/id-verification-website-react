import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import CountrySelect from '../../components/CountrySelect'
import { useFormInput } from '../../context/RegFormProvider'
import { useNavigate } from 'react-router-dom'

const RegForm = () => {
  const [size, setSize] = useState('large')
  const value = useFormInput()
  const navigate = useNavigate()

  const submitForm = (e) => {
    e.preventDefault()
    localStorage.setItem('firstName', value.firstName)
    localStorage.setItem('middleName', value.middleName)
    localStorage.setItem('lastName', value.lastName)
    localStorage.setItem('contactNumber', value.contactNumber)
    localStorage.setItem('email', value.email)
    localStorage.setItem('location', value.location)
    navigate('/purchase-verification')
  }
  return (
    <div className='bg-light p-4 p-lg-5 rounded shadow-sm'>
      <h2 className='titillium-600'>Register</h2>
      <Form onSubmit={submitForm}>
        <Form.Group className='my-3'>
          <Form.Text>First name</Form.Text>
          <Form.Control
            required
            type='text'
            value={value.firstName}
            onChange={(e) => value.setFirstName(e.target.value)}
            placeholder='Enter first name'
          />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Text>Middle name</Form.Text>
          <Form.Control
            required
            type='text'
            value={value.middleName}
            onChange={(e) => value.setMiddleName(e.target.value)}
            placeholder='Enter middle name'
          />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Text>Last name</Form.Text>
          <Form.Control
            required
            type='text'
            value={value.lastName}
            onChange={(e) => value.setLastName(e.target.value)}
            placeholder='Enter last name'
          />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Text>Contact Number</Form.Text>
          <Form.Control
            required
            type='text'
            value={value.contactNumber}
            onChange={(e) => value.setContactNumber(e.target.value)}
            placeholder='Enter contact number'
          />
        </Form.Group>
        <Form.Group className='my-3'>
          <Form.Text>Email</Form.Text>
          <Form.Control
            required
            value={value.email}
            onChange={(e) => value.setEmail(e.target.value)}
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <CountrySelect setLocation={value.setLocation} />
        <Button
          type='submit'
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
