import React from 'react'
import RegisterLogo from '../Pages/registerIllustration.svg'
import Input from '../components/Input/Input'

function Register() {
  return (
   <div>
        <div className='flex flex-row m-auto justify-center min-h-screen items-center' style={{width: 800 + 'px'}}>
        <img src={RegisterLogo} alt="An illustration" className='mr-20 pt-4' style={{height: 460 + 'px'}} />
        <div className='mr-32' style={{width: 300 + 'px'}}>
            <form>
                <h1 className='text-center text-lg mb-4 font-bold'>REGISTER</h1>
                <Input name="firstname" id="" placeholder="Firstname" />
                <Input name="lastname" id="" placeholder="Lastname" />
                <Input name="email" id="" placeholder="Email" />
                <Input name="password" id="" placeholder="Password" />
                <button className='bg-blue-600 hover:bg-blue-400 p-2 mt-5 rounded text-white'>Register</button>
            </form>
        </div>
    </div>
   </div>
  )
}

export default Register