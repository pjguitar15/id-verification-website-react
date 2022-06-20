import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Button, notification } from 'antd'
import qr from '../../assets/qr.png'
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { db } from '../../firebase/firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

const Context = React.createContext({
  name: 'Default',
})

const Payment = ({ cancelClick, setIsStepTwoDone }) => {
  const [localStorageItems, setLocalStorageItems] = useState({})
  const [seconds, setSeconds] = useState(59)
  const [minutes, setMinutes] = useState(9)
  const [usdAmount, setUsdAmount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [api, contextHolder] = notification.useNotification()
  const [paymentId, setPaymentId] = useState('')
  // for testing purposes, we changed it to finished. Bring it back to waiting later
  const [status, setStatus] = useState('finished')

  const openNotification = (placement) => {
    api.success({
      message: `Success`,
      description: (
        <Context.Consumer>
          {() => `Wallet address has been copied to clipboard!`}
        </Context.Consumer>
      ),
      placement,
    })
  }

  useEffect(() => {
    setToggle(true)
    const firstName = localStorage.getItem('firstName')
    const middleName = localStorage.getItem('middleName')
    const lastName = localStorage.getItem('lastName')
    const contactNumber = localStorage.getItem('contactNumber')
    const email = localStorage.getItem('email')
    const location = localStorage.getItem('location')
    setLocalStorageItems({
      firstName,
      middleName,
      lastName,
      contactNumber,
      email,
      location,
    })

    // set usd amount
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usdt/usd.json`
      )
      .then((res) => {
        const result = Object.values(res.data)[1]
        setUsdAmount(result * 1)
      })

    // Create payment post request
  }, [])

  useEffect(() => {
    axios({
      method: 'post',
      url: 'https://api.nowpayments.io/v1/payment',
      headers: {
        'x-api-key': 'X2B0G4C-YBDM2YN-NRWFC4T-4959DGG',
        'Content-Type': ' application/json',
      },
      data: {
        price_amount: 20,
        price_currency: 'usdttrc20',
        // pay_amount: 20, // optional
        pay_currency: 'usdttrc20',
        ipn_callback_url: 'https://nowpayments.io',
        order_id: 'RGDBP-21314',
        order_description: 'AI-powered ID Verification',
        // case: 'success',
      },
    })
      .then((res) => {
        console.log('Created payment:')
        console.log(res)
        console.log(res.data.payment_id)
        setPaymentId(res.data.payment_id)
        console.log('-------------------------')
      })
      .then(() => {
        setToggle(false)
      })
      .catch((error) => console.log(error.response.data))
  }, [toggle])

  // timer
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (minutes > -1 && !(minutes === 0 && seconds === 0)) {
        if (seconds > 1) {
          setSeconds(seconds - 1)
          // Now payments GET request
          if (paymentId) {
            axios
              .get(`https://api.nowpayments.io/v1/payment/${paymentId}`, {
                headers: {
                  'x-api-key': 'X2B0G4C-YBDM2YN-NRWFC4T-4959DGG',
                },
              })
              .then((res) => {
                // if status is finished, set status state to "finished"
                if (res.data.payment_status !== 'finished') {
                  // displays all currency
                  console.log('GET PAYMENT STATUS RESPONSE: ')
                  console.log(res)
                  setStatus(res.data.payment_status)
                } else {
                  setStatus('finished')
                  // If status is finished then timer should stop
                  clearInterval(myInterval)
                }
              })
          }
        } else {
          setSeconds(59)
          setMinutes(minutes - 1)
        }
      } else {
        clearInterval(myInterval)
        setMinutes(0)
        setSeconds(0)
      }
    }, 1000)

    return () => {
      clearInterval(myInterval)
    }
  })

  const payHandler = async () => {
    setIsStepTwoDone(true)
    const firstName = localStorage.getItem('firstName')
    const middleName = localStorage.getItem('middleName')
    const lastName = localStorage.getItem('lastName')
    const contactNumber = localStorage.getItem('contactNumber')
    const email = localStorage.getItem('email')
    const location = localStorage.getItem('location')
    const collectionRef = collection(db, 'users')
    // Add data to firebase
    await addDoc(collectionRef, {
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      contactNumber: contactNumber,
      email: email,
      location: location,
      selfieImg: localStorage.getItem('selfieImg'),
      idImg: localStorage.getItem('idImg'),
      timestamp: serverTimestamp(),
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Context.Provider
      value={{
        name: 'Ant Design',
      }}
    >
      {contextHolder}
      <Container>
        <div className='col-lg-8 mx-auto'>
          <h4 className='px-3 py-3 text-white neon'>
            <span className='me-2'>
              <svg
                fill='white'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                width='32px'
                height='32px'
              >
                <path d='M 12 1 C 5.935 1 1 5.935 1 12 C 1 18.065 5.935 23 12 23 C 18.065 23 23 18.065 23 12 C 23 5.935 18.065 1 12 1 z M 12 3 C 16.963 3 21 7.038 21 12 C 21 16.963 16.963 21 12 21 C 7.038 21 3 16.963 3 12 C 3 7.038 7.038 3 12 3 z M 7 7 L 7 9 L 11 9 L 11 10.048828 C 8.7935403 10.157378 6 10.631324 6 12 C 6 13.368676 8.7935403 13.842622 11 13.951172 L 11 18 L 13 18 L 13 13.951172 C 15.20646 13.842622 18 13.368676 18 12 C 18 10.631324 15.20646 10.157378 13 10.048828 L 13 9 L 17 9 L 17 7 L 7 7 z M 11 11.027344 L 11 12 L 13 12 L 13 11.027344 C 15.42179 11.151768 16.880168 11.700988 17.003906 11.978516 C 16.863906 12.334516 15.021 13 12 13 C 8.978 13 7.1360937 12.335484 6.9960938 12.021484 C 7.1198324 11.706835 8.5777007 11.152269 11 11.027344 z' />
              </svg>
            </span>
            Tether payment
          </h4>
          <h4 className='text-success'>20USDT</h4>
          <p
            className='titillium-600 p-0 m-0 text-muted'
            style={{ fontSize: '16px' }}
          >
            Time left to pay: {minutes}:
            {seconds === 60 || seconds === 0 ? '00' : seconds}
            {seconds.toString().length === 1 && seconds !== 0 ? '0' : ''}
            {}
            {minutes === 0 && seconds === 0 ? '(Session Expired)' : ''}
          </p>
          <p
            className='p-0 m-0 py-3 titillium-600 text-muted'
            style={{ fontSize: '16px' }}
          >
            Status:{' '}
            <span
              className={`px-2 border rounded ${
                status === 'waiting'
                  ? 'bg-warning border-warning text-dark'
                  : ''
              }  ${
                status === 'confirming'
                  ? 'bg-warning border-warning text-dark'
                  : ''
              } ${
                status === 'confirmed'
                  ? 'bg-warning border-warning text-dark'
                  : ''
              } ${
                status === 'sending'
                  ? 'bg-warning border-warning text-dark'
                  : ''
              } ${
                status === 'finished'
                  ? 'bg-success border-success text-light'
                  : ''
              }`}
            >
              {status}
            </span>
          </p>
          <hr />
          <h6 className='mb-3'>Details</h6>
          <div
            className='d-flex justify-content-between py-2 px-4'
            style={{ background: '#f1f1f1' }}
          >
            <h6 className='p-0 m-0'>Full name:</h6>
            <h6 className='p-0 m-0'>
              {localStorageItems.firstName} {localStorageItems.middleName}{' '}
              {localStorageItems.lastName}
            </h6>
          </div>
          <div className='d-flex justify-content-between  py-2 px-4'>
            <h6 className='p-0 m-0'>Contact Number:</h6>
            <h6 className='p-0 m-0'>{localStorageItems.contactNumber}</h6>
          </div>
          <div
            className='d-flex justify-content-between  py-2 px-4'
            style={{ background: '#f1f1f1' }}
          >
            <h6 className='p-0 m-0'>Email:</h6>
            <h6 className='p-0 m-0'>{localStorageItems.email}</h6>
          </div>
          <div className='d-flex justify-content-between  py-2 px-4'>
            <h6 className='p-0 m-0'>Location:</h6>
            <h6 className='p-0 m-0'>{localStorageItems.location}</h6>
          </div>
          <hr />
          {/* wallet address */}
          <h6>Wallet Address</h6>
          {/* copy address button */}
          <div>
            TVD45QYemqYqgiCDehSr53aKh7TJdb8tbM
            <CopyToClipboard
              className='ms-3'
              text='TVD45QYemqYqgiCDehSr53aKh7TJdb8tbM'
            >
              <Button onClick={() => openNotification('topLeft')}>
                Copy to clipboard
              </Button>
            </CopyToClipboard>
          </div>

          {/* qr code */}
          {/* add image for proof on the right side of qr */}
          <div className='col-5 col-md-4 col-lg-3 my-3'>
            <img className='w-100 h-100' src={qr} alt='qr' />
          </div>
          {/* a flex div with f0f0f0 bg, that shows exchange rate and amount */}
          <div
            className='p-3 my-3 rubik-400 d-flex justify-content-between'
            style={{ background: '#f4f4f4' }}
          >
            <div>
              <div>Exchange Rate</div>
              <div>Amount</div>
            </div>
            <div>
              <div>USDT = {usdAmount} USD</div>
              <div>20 USDT</div>
            </div>
          </div>
          {/* attention message */}
          <Button
            disabled={status !== 'finished'}
            onClick={payHandler}
            className='titillium-400 px-4 mt-2 border-0'
            type='primary'
            shape='round'
            // icon={<FileDoneOutlined />}
            size='large'
            style={{
              background: status !== 'finished' ? '#bebebe' : '#40B452',
              color: status !== 'finished' ? '#363636' : '#ffffff',
            }}
          >
            {status !== 'finished'
              ? 'Waiting for payment success...'
              : 'Proceed to receipt'}
          </Button>

          {/* <Button
          onClick={cancelClick}
          className='titillium-400 ms-2 px-4 mt-2'
          type='primary'
          shape='round'
          // icon={<FileDoneOutlined />}
          size='large'
          style={{ background: '#cf4a4a', border: 'none' }}
        >
          Cancel
        </Button> */}
          <div className='mt-4'>
            <p>
              <span className='text-danger'>Attention! </span>
              This address only supports USDT transfers via the TRC20 protocol.
              Do not send transfers from smart contracts, TRX coins or any other
              crypto to it. Such deposits will not be credited.
            </p>
            <p>
              Send the <span className='fw-bold'>exact amount of 20USDT </span>
              to the address shown on this page <span>in one transaction.</span>
            </p>
            <p>
              Send exactly the amount shown in one transaction, otherwise your
              deposit may fail. Payments in multiple transactions are not
              supported.
            </p>
            <p>
              The funds will be credited as soon as we get 1 confirmation from
              the TRON network.
            </p>
            <p>
              <span className='text-danger'>Attention! </span>
              Please note that the address the system gave you for this payment
              is unique and can only be used once. Each payment needs to be
              initiated anew.
            </p>
            <p>Crypto deposits are monitored according to our AML program.</p>
          </div>
        </div>
      </Container>
    </Context.Provider>
  )
}

export default Payment
