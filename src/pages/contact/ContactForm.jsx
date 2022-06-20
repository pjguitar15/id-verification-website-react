import { Form, Button } from 'react-bootstrap'

const ContactForm = () => {
  return (
    <div className='border bg-white shadow-sm py-5 px-4'>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>First name</Form.Label>
          <Form.Control type='text' placeholder='Enter your first name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Last name</Form.Label>
          <Form.Control type='text' placeholder='Enter your last name' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>First name</Form.Label>
          <Form.Control type='email' placeholder='Enter your email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Company name</Form.Label>
          <Form.Control type='text' placeholder='Company name' />
        </Form.Group>{' '}
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Contact number</Form.Label>
          <Form.Control type='text' placeholder='Enter your contact number' />
        </Form.Group>{' '}
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm
