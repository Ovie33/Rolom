import React from 'react'

function ExamBtn({text}) {
  return (
    <div>
        <button className='py-2 px-3 bg-blue-500 rounded-md text-white'>
        {text}
        </button>
    </div>
  )
}

export default ExamBtn