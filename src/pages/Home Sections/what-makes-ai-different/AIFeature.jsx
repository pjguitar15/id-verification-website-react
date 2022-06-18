import React from 'react'

const AIFeature = (props) => {
  return (
    <div className='row py-4'>
      <div className='col-md-6 d-flex align-items-center'>
        <div>
          <h1 className='titillium-700'>{props.title}</h1>
          <p
            className='rubik-400 col-lg-10'
            style={{ fontSize: '16px', textAlign: 'justify' }}
          >
            {props.content}
          </p>
        </div>
      </div>
      <div className='col-md-6 d-flex justify-content-end'>
        <div className='col-12 col-lg-9'>
          <img
            src={props.img}
            className='w-100 h-100'
            style={{ objectFit: 'cover' }}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default AIFeature
