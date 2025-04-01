import React from 'react'

function Footer() {
  return (
    <div className="container mx-auto">
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5  pt-9 bg-black text-white">
        
        {/* Exclusive Section */}
        <div className='flex justify-center md:justify-start'>
          <div className='p-3'>
            <h2 className='font-medium text-2xl leading-normal mb-4'>Exclusive</h2>
            <p className='leading-normal font-medium mb-2'>Subscribe</p>
            <p className='leading-normal font-medium mb-4'>Get 10% off your first order</p>
            <input 
              className='w-full p-2 rounded-md border border-white bg-transparent text-white placeholder-gray-400' 
              type="text" 
              placeholder='Enter your email' 
            />
          </div>
        </div>

        {/* Support Section */}
        <div className='flex justify-center md:justify-start'>
          <div className='p-3'>
            <h2 className='font-medium text-2xl leading-normal mb-4'>Support</h2>
            <p className='leading-normal mb-2'>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className='leading-normal font-medium mb-2'>exclusive@gmail.com</p>
            <p className='leading-normal font-medium mb-2'>+88015-88888-9999</p>
          </div>
        </div>

        {/* Account Section */}
        <div className='flex justify-center md:justify-start'>
          <div className='p-3'>
            <h2 className='font-medium text-2xl leading-normal mb-4'>Account</h2>
            <ul>
              <li className='mb-2'>My Account</li>
              <li className='mb-2'>Login / Register</li>
              <li className='mb-2'>Cart</li>
              <li className='mb-2'>Wishlist</li>
              <li className='mb-2'>Shop</li>
            </ul>
          </div>
        </div>

        {/* Quick Link Section */}
        <div className='flex justify-center md:justify-start'>
          <div className='p-3'>
            <h2 className='font-medium text-2xl leading-normal mb-4'>Quick Link</h2>
            <ul>
              <li className='mb-2'>Privacy Policy</li>
              <li className='mb-2'>Terms Of Use</li>
              <li className='mb-2'>FAQ</li>
              <li className='mb-2'>Contact</li>
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className='flex justify-center md:justify-start'>
          <div className='p-3'>
            <h2 className='font-medium text-2xl leading-normal mb-4'>Download App</h2>
            <p className='leading-normal mb-2'>Save S3 with App New User Only</p>
            <button className='bg-white text-black px-4 py-2 rounded-md mt-2 hover:bg-gray-200'>
              Download Now
            </button>
          </div>
        </div>
        
      </footer>
    </div>
  )
}

export default Footer
