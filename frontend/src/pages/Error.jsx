import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
   <div className='flex justify-center'>
     <div className='mt-28 p-2 text-center my-7'>
    <span className='font-semibold text-[80px] leading-10 tracking-wider '> 404 Not Found</span>
       <p className='my-10 '> Your visited page not found. You may go home page.</p>
       <span className='bg-button2 p-2 rounded text-white px-6   '><Link to={'/'}>Back to home page</Link></span>
    </div>
   </div>
  )
}

export default Error
