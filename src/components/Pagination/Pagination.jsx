import React from 'react'
import Left from './left-arrow.svg'
import Right from './right-arrow.svg'

function pagination() {
  return (
    <div className='flex gap-2'>
        <img src={Left} alt="left arrow" />
        <button className='px-3 py-2'>1</button>
        <button className='px-3 py-2'>2</button>
        <button className='px-3 py-2'>3</button>
        <button className='px-3 py-2'>4</button>
        <button className='px-3 py-2'>5</button>
        <button className='px-3 py-2'>6</button>
        <button className='px-3 py-2'>7</button>
        <img src={Right} alt="right arrow" />
    </div>
  )
}

export default pagination