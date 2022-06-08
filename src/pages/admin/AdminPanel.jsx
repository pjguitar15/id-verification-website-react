import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Space, Table, Tag } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Column, ColumnGroup } = Table
const data = [
  {
    key: '1',
    firstName: 'John',
    lastName: 'Brown',
    contactNum: '09234567890',
    email: 'name@email.com',
    age: 32,
    address: 'Philippines',
    tags: ['error'],
  },
  {
    key: '2',
    firstName: 'Jim',
    lastName: 'Green',
    contactNum: '09234567890',
    email: 'name@email.com',
    address: 'Philippines',
    tags: ['error'],
  },
  {
    key: '3',
    firstName: 'Joe',
    lastName: 'Black',
    contactNum: '09234567890',
    email: 'name@email.com',
    address: 'Australia',
    tags: ['paid'],
  },
  {
    key: '4',
    firstName: 'Joe',
    lastName: 'Black',
    contactNum: '09234567890',
    email: 'name@email.com',
    address: 'Australia',
    tags: ['paid'],
  },
  {
    key: '5',
    firstName: 'Joe',
    lastName: 'Black',
    contactNum: '09234567890',
    email: 'name@email.com',
    address: 'Australia',
    tags: ['paid'],
  },
  {
    key: '6',
    firstName: 'Joe',
    lastName: 'Black',
    contactNum: '09234567890',
    email: 'name@email.com',
    address: 'Australia',
    tags: ['paid'],
  },
  {
    key: '7',
    firstName: 'Joe',
    lastName: 'Black',
    contactNum: '09234567890',
    email: 'name@email.com',
    address: 'Australia',
    tags: ['paid'],
  },
  {
    key: '8',
    firstName: 'Joe',
    lastName: 'Black',
    contactNum: '09234567890',
    email: 'name@email.com',
    address: 'Australia',
    tags: ['paid'],
  },
]

const AdminPanel = () => {
  const navigate = useNavigate()
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/admin')
    } else {
      navigate('/admin-login')
    }
  }, [])
  return (
    <div className='py-5'>
      <Container className='text-center'>
        <h1 className='display-6 titillium-400'>Dashboard</h1>
        <Table dataSource={data}>
          <ColumnGroup title='Name'>
            <Column title='First Name' dataIndex='firstName' key='firstName' />
            <Column title='Last Name' dataIndex='lastName' key='lastName' />
          </ColumnGroup>
          <Column title='Location' dataIndex='address' key='address' />
          <Column title='Contact' dataIndex='contactNum' key='contactNum' />
          <Column title='Email' dataIndex='email' key='email' />
          <Column
            title='Status'
            dataIndex='tags'
            key='tags'
            render={(tags) => (
              <>
                {tags.map((tag) => (
                  <Tag color={`${tag === 'paid' ? 'green' : 'red'}`} key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title='Action'
            key='action'
            render={(_, record) => (
              <Space size='middle'>
                <a className='text-danger'>Delete</a>
              </Space>
            )}
          />
        </Table>
      </Container>
    </div>
  )
}

export default AdminPanel
