import React from 'react'

<<<<<<< HEAD
function Input( {type, name, placeholder, id} ) {
  return (
    <div>
       <input type={type} name={name} id={id} placeholder={placeholder} 
=======
function Input( {name, placeholder, id} ) {
  return (
    <div>
       <input type="text" name={name} id={id} placeholder={placeholder} 
>>>>>>> 8bd0b28ecaeb97768a6775cb91633890f88f156e
       className='block p-1.5 mb-5 bg-zinc-50 border-b-2 text-sm focus:outline-none w-80 border-b-blue-400'/>
    </div>
  )
}

export default Input