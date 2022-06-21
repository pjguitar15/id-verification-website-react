import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Table, Tag } from 'antd'
import { db } from '../../firebase/firebaseConfig'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'

const { Column } = Table

const AdminAccounts = () => {
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  //   const data = [
  //     {
  //       key: 'sdfsdfsdwe',
  //       email: 'email@email.com',
  //       dateCreated: '05-05-21',
  //       tag: ['admin'],
  //     },
  //   ]

  useEffect(() => {
    const collectionRef = collection(db, 'admin-accounts')
    const q = query(collectionRef, orderBy('timestamp', 'desc'))
    const getData = async () => {
      const data = await getDocs(q)
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getData()
  }, [])

  useEffect(() => {
    const formattedData = []
    data.forEach((item) => {
      const itemList = {
        key: item.id,
        email: item.email,
        dateCreated: item.timestamp,
        tag: [item.position],
      }
      formattedData.push(itemList)
    })
    setDisplayData(formattedData)
  }, [data])

  return (
    <div>
      <Container>
        <p className='rubik-400 my-3 text-danger'>
          Note: Only <span className='fw-bold'>main admin</span> can see this
          panel
        </p>
        <Table dataSource={displayData.length > 0 ? displayData : ''}>
          <Column title='UID' dataIndex='key' key='key' />
          <Column title='Email' dataIndex='email' key='email' />
          <Column
            title='Date Created'
            dataIndex='dateCreated'
            key='dateCreated'
          />
          <Column
            title='Position'
            dataIndex='tag'
            key='tag'
            render={(item) => (
              <>
                {item
                  ? item.map((tag) => (
                      <Tag
                        color={`${tag === 'admin' ? 'yellow' : 'green'}`}
                        key={tag}
                      >
                        {tag}
                      </Tag>
                    ))
                  : ''}
              </>
            )}
          />
        </Table>
      </Container>
    </div>
  )
}

export default AdminAccounts
