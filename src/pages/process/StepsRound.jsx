import React from 'react'

const StepsRound = ({ step, label, isLast, isFocused }) => {
  return (
    <>
      {/* round */}
      <div>
        <div
          className={`${isFocused ? 'text-white' : 'bg-light border'}`}
          style={{
            background: '#2EA76C',
            height: '4rem',
            width: '4rem',
            borderRadius: '50%',
            position: 'relative',
          }}
        >
          {/* text inside round */}
          <div
            className='rubik-400'
            style={{
              fontSize: '22px',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {step}
          </div>
          {/* end of text inside round */}
        </div>
      </div>
      {/* end of round */}
      {/* label */}
      <div className='rubik-400 ms-3' style={{ fontSize: '18px' }}>
        {label}
      </div>
      {/* line */}
      {!isLast ? (
        <div
          className='mx-3'
          style={{ background: 'gray', height: '1px', width: '100%' }}
        ></div>
      ) : (
        ''
      )}
    </>
  )
}

export default StepsRound
