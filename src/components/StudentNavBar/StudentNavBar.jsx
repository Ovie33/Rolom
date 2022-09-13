import {useState} from 'react'
import BellLogo from './notification.svg'
import Photo from './photo.svg'

function StudentNavBar({onClick, Logo, className}) {

  return (
    <div className='flex justify-between shadow-sm py-3 px-12 items-center'>
    <button onClick={onClick}>
            <img className={className} src={Logo} alt="toggle icon" />
        </button>
    <div className='flex items-center w-40 justify-between'>
      <a href="#">
      <img src={BellLogo} className="" alt="notification icon" />
      </a>
      <div className="flex items-center">
      <img src={Photo} className="" alt="profile photo" />
      <p>username</p>
      </div>
    </div>
  </div>
  )
}

export default StudentNavBar