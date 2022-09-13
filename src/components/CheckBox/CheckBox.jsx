import React from 'react'
import Mark from './check.svg'

function CheckBox({label, className}) {
  return (
    <div>
        <div className='px-5'>
            <input type="checkbox" className='' name="" id="" />
            <label className={className}>
                {label}
            </label>
        </div>
    </div>
  )
}

export default CheckBox