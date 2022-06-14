import React from 'react'

const SelfieInstructions = () => {
  return (
    <div>
      <p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='green'
          className='bi bi-check2 me-2'
          viewBox='0 0 16 16'
        >
          <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
        </svg>
        Take a selfie of yourself with a neutral expression
      </p>
      <p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='green'
          className='bi bi-check2 me-2'
          viewBox='0 0 16 16'
        >
          <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
        </svg>
        Make sure your whole face is visible, centered, and your eyes are open
      </p>
      <p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='red'
          className='bi bi-x me-2'
          viewBox='0 0 16 16'
        >
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>
        Do not crop your ID or use screenshots of your ID
      </p>
      <p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          fill='red'
          className='bi bi-x me-2'
          viewBox='0 0 16 16'
        >
          <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
        </svg>
        Do not hide or alter parts of your face (No hats/beauty
        images/filters/headgear)
      </p>
    </div>
  )
}

export default SelfieInstructions
