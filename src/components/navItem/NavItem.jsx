import React from 'react'

function NavItem({label, icon}) {
  return (
    <div>
        <a href='#' className='text-gray-600 p-4 flex hover:text-yellow-500 hover:font-bold'>
            {icon}
            {label}
        </a>
    </div>
  )
}

export default NavItem