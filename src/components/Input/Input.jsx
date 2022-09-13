import React from 'react'

function Input( {type, name, placeholder, id} ) {
  return (
    <div>
       <input type={type} name={name} id={id} placeholder={placeholder} 
       className='block p-1.5 mb-4 bg-zinc-50 border-b-2 text-sm focus:outline-none w-80 border-b-blue-400'/>
    </div>
  )
}

export default Input