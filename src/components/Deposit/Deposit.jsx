import React from 'react'

function Deposit({ammount}) {
  return (
    <div>
          <p className='border-t-2 py-1'>
                        <span className='pr-10 font-bold'>Deposited</span>
                        <span>{ammount}</span>
           </p>
    </div>
  )
}

export default Deposit