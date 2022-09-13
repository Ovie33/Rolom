import React from 'react'

function AboutComponent({Title, property}) {
  return (
    <div className='flex justify-between gap-48'>
        <p className='font-bold'>{Title}</p>
        <p>{property}</p>                  
    </div>
  )
}

export default AboutComponent