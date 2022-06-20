import { Card } from 'antd'

const AntdCard = ({ item }) => (
  <>
    <Card title={item.firstName + ' ' + item.lastName}>
      <p style={{ textAlign: 'justify' }}>{item.message}</p>
      <hr />
      <div className='text-start'>Email: {item.email}</div>
      <div className='text-start'>Contact: {item.contactNumber}</div>
      <div className='text-start'>Company: {item.companyName}</div>
    </Card>
  </>
)

export default AntdCard
