import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { db } from '../../firebase/firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const ContactForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [message, setMessage] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault()
    const collectionRef = collection(db, 'inquiries')
    await addDoc(collectionRef, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      companyName: companyName,
      contactNumber: contactNumber,
      message: message,
      timestamp: serverTimestamp(),
    })

    setFirstName('')
    setLastName('')
    setEmail('')
    setCompanyName('')
    setContactNumber('')
    setMessage('')

    alert('Thank you so much! Your inquiry has been submitted successfully!')
  }
  return (
    <div className='border bg-white shadow-sm py-5 px-4'>
      <Form onSubmit={submitHandler}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type='text'
            placeholder='Enter your first name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            value={lastName}
            required
            onChange={(e) => setLastName(e.target.value)}
            type='text'
            placeholder='Enter your last name'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Enter your email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Company name</Form.Label>
          <Form.Control
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            type='text'
            placeholder='Company name'
          />
        </Form.Group>{' '}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Contact number</Form.Label>
          <Form.Control
            required
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            type='text'
            placeholder='Enter your contact number'
          />
        </Form.Group>{' '}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Message</Form.Label>
          <Form.Control
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            as='textarea'
            rows='6'
            placeholder='Enter your message'
          />
        </Form.Group>{' '}
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
