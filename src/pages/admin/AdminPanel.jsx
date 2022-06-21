import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Button, Space, Table, Tag, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { db } from '../../firebase/firebaseConfig'
import { getAuth } from 'firebase/auth'
import {
  collection,
  getDocs,
  query,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import AntdCard from '../../components/AntdCard'
import AdminAccounts from './AdminAccounts'
const { confirm } = Modal

const { Column } = Table

const AdminPanel = () => {
  const [users, setUsers] = useState([])
  const [data, setData] = useState([])
  const [inquiries, setInquiries] = useState([])
  const [selectedMenu, setSelectedMenu] = useState('dashboard')
  const [currLogged, setCurrLogged] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const collectionRef = collection(db, 'inquiries')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setInquiries(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getData()
  }, [])

  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure delete this item?',
      icon: <ExclamationCircleOutlined />,
      content: 'Once deleted, it will be removed completely from the database.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',

      onOk() {
        console.log('OK')
        deleteItem(id)
      },

      onCancel() {
        console.log('Cancel')
      },
    })
  }

  useEffect(() => {
    const collectionRef = collection(db, 'users')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      const mappedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      setUsers(mappedData)
    }
    getData()

    // get current logged in
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        setCurrLogged(user.email)
      } else {
        // No user is signed in.
        console.log('There is no logged in user')
      }
    })
  }, [])
  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) {
      navigate('/admin')
    } else {
      navigate('/admin-login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const newArr = []
    users.forEach((item) => {
      newArr.push({
        key: item.id,
        firstName: item.firstName,
        lastName: item.lastName,
        contactNum: item.contactNumber,
        email: item.email,
        address: item.location,
        tags: ['paid'],
      })
    })
    setData(newArr)
  }, [users])
  const deleteItem = async (id) => {
    console.log(id)
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)

    // make it look real time
    const filtered = users.filter((item) => item.id !== id)
    setUsers(filtered)
  }
  return (
    <div className='py-5'>
      <Container>
        <div className='d-flex justify-content-between'>
          <div>
            <Button
              onClick={() => setSelectedMenu('dashboard')}
              className='me-2'
            >
              Dashboard
            </Button>
            <Button
              className='me-2'
              onClick={() => setSelectedMenu('inquiries')}
            >
              Inquiries
            </Button>
            {currLogged === 'aipoweredhelpdesk@gmail.com' ? (
              <Button onClick={() => setSelectedMenu('admin-accounts')}>
                Admin Accounts
              </Button>
            ) : (
              ''
            )}
          </div>
          <h6>Welcome {currLogged}!</h6>
        </div>
      </Container>
      {selectedMenu === 'inquiries' ? (
        <Container className='text-center mt-5'>
          <h1 className='display-6 titillium-400'>Inquiries</h1>
          <div className='row'>
            {inquiries.map((item, index) => (
              <div key={index} className='col-sm-6 col-md-4 col-lg-3'>
                <AntdCard item={item} />
              </div>
            ))}
          </div>
        </Container>
      ) : (
        ''
      )}
      {selectedMenu === 'dashboard' ? (
        <Container className='text-center mt-5'>
          <h1 className='display-6 titillium-400'>Dashboard</h1>
          <Table dataSource={data.length > 0 ? data : ''}>
            <Column title='UID' dataIndex='key' key='key' />
            <Column title='First Name' dataIndex='firstName' key='firstName' />
            <Column title='Last Name' dataIndex='lastName' key='lastName' />
            <Column title='Location' dataIndex='address' key='address' />
            <Column title='Contact' dataIndex='contactNum' key='contactNum' />
            <Column title='Email' dataIndex='email' key='email' />
            <Column
              title='Status'
              dataIndex='tags'
              key='tags'
              render={(tags) => (
                <>
                  {tags
                    ? tags.map((tag) => (
                        <Tag
                          color={`${tag === 'paid' ? 'green' : 'red'}`}
                          key={tag}
                        >
                          {tag}
                        </Tag>
                      ))
                    : ''}
                </>
              )}
            />
            <Column
              title='Action'
              key='action'
              render={(_, record) => (
                <Space size='middle'>
                  <a
                    className='text-danger'
                    onClick={() => showDeleteConfirm(record.key)}
                  >
                    Delete
                  </a>
                </Space>
              )}
            />
          </Table>
        </Container>
      ) : (
        ''
      )}

      {selectedMenu === 'admin-accounts' ? <AdminAccounts /> : ''}
    </div>
  )
}

export default AdminPanel
