import React from 'react'
import ProductCard from '../components/ProductCard'
import HeroBanner from '../components/HeroBanner'
import Category from '../components/Category'
import Product from './Product'


function Home() {
 
  return (

    <div className='container mx-auto px-1'>
  
      <HeroBanner/>
      <Category/>
      <Product/>
      {/* <ProductCard/> */}
      <div className='flex justify-center mb-3 px-16'>
        <img className='w-full' src="../src/assets/img/Frame 600.png" alt="music" />
      </div>
    </div>
  )
}
export default Home