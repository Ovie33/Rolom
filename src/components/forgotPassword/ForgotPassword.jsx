import React from 'react'
import personLogo from './forgotpassword.svg'

function forgotPassword() {
  return (
    <div className='lg:flex justify-center items-center h-screen pl-40 pr-40'>
      <div>
        <img src={personLogo} alt="" />
      </div>
      <div className='flex justify-center items-center flex-col '>
        <h1 className='text-3xl font-bold mb-8'>Forgotten Password</h1>
        <form action="">
          <div>
            <input type="text" placeholder='Email' className='bg-slate-50 pt-3 pb-3 pl-5 pr-32 lg:pr-60   mb-4 border-b-slate-400 border-b-4 text-lg text-start'/>
          </div>
          <div>
            <input type="text" placeholder='Phone Number' className='bg-slate-50 pt-3 pb-3 pl-5 pr-32 lg:pr-60 mb-4 border-b-slate-400 border-b-4 text-lg'/>
          </div>
          <div>
            <input type="text" placeholder='New Password' className='bg-slate-50 pt-3 pb-3 pl-5 pr-32 lg:pr-60 mb-4 border-b-slate-400 border-b-4 text-lg'/>
          </div>
          <button className='bg-blue-700 pt-3 pb-3 pl-16 pr-16 lg:pl-24 lg:pr-24 rounded-lg text-white text-2xl'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default forgotPassword