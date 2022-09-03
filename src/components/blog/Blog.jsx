import React from 'react'
import img1 from './img/download.jpg'

function Blog() {
  return (
    <div className='container mx-auto my-10'>
    {/*----CARD BASE-----*/}
      <div className='w-full lg:pr-3'>
        <div className='shadow rounded-xl'>
          <div>
            <img src={img1} alt="" className='w-full'/>
          </div>
          <div className='flex justify-between p-3 items-center'>
            <div className='text-gray-800 leading-relaxed'>
              <h4 className='text-left text-sm'>Title: WEB DESIGN</h4>
              <h4 className='text-left text-sm'>posted by: Frankie Freemann</h4>
            </div>
          <button className='bg-sky-500 rounded-md p-2 text-sm'>Read more</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Blog