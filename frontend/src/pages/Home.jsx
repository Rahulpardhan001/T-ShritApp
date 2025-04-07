import React from 'react'
import ProductCard from '../components/ProductCard'
import HeroBanner from '../components/HeroBanner'
import Category from '../components/Category'
import Product from './Product'
import { IMAGES } from '../assets/ImageGallary/images'


function Home() {
 
  return (

    <div className='container mx-auto px-1'>
  
      <HeroBanner/>
      <Category/>
      <Product/>
      {/* <ProductCard/> */}
      <div className='flex justify-center mb-3 px-16'>
        <img className='w-full' src={IMAGES.SLIDE_IMG2} alt="music" />
      </div>
    </div>
  )
}
export default Home