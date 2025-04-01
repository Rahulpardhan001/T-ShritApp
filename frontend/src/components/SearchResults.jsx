import React from 'react'
import ProductCard from './ProductCard'

function SearchResults() {


  return (
    <>
    <div className='text-2xl text-center pt-7 '>Searching Products</div>
 <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 my-9 px-14">
            <ProductCard  />
      </div>
    </>
   
  )
}

export default SearchResults
