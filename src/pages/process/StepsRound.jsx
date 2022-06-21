import React, { useState, useEffect } from 'react'

const StepsRound = ({ step, label, isLast, isFocused }) => {
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimension])
  return (
    <>
      {/* round */}
      <div>
        <div
          className={`${isFocused ? 'text-white' : 'bg-light border'}`}
          style={{
            background: '#2EA76C',
            height: `${windowDimension.winWidth < 990 ? '2.5rem' : '4rem'}`,
            width: `${windowDimension.winWidth < 990 ? '2.5rem' : '4rem'}`,
            borderRadius: '50%',
            position: 'relative',
          }}
        >
          {/* text inside round */}
          <div
            className='rubik-400'
            style={{
              fontSize: `${windowDimension.winWidth < 990 ? '16px' : '22px'}`,
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
      <div
        className={`rubik-400 ${
          windowDimension.winWidth < 990 ? 'ms-1' : 'ms-3'
        } `}
        style={{
          fontSize: `${windowDimension.winWidth < 990 ? '14px' : '18px'}`,
        }}
      >
        {label}
      </div>
      {/* line */}
      {!isLast ? (
        <div
          className={`${windowDimension.winWidth < 990 ? 'mx-1' : 'mx-3'}`}
          style={{ background: 'gray', height: '1px', width: '100%' }}
        ></div>
      ) : (
        ''
      )}
    </>
  )
}

export default StepsRound
