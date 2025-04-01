import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

function Product() {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const { products, loading, error } = useSelector((state) => state.product);
  // console.log(products,"all product s s")
  // ************* Show more products function ******************//
  const handleShowMore = () => {
    setVisibleProducts(products.length); // Show all products
  };

  return (
    <>
    
      <div className="container px-16">
        <div className="products my-5">
          <div className="flex gap-5 items-center">
            <div className="bg-button2 w-5 h-10 rounded"></div>
            <h3 className="text-button2 font-bold">Our Products</h3>
          </div>
          <h2 className="font-bold text-3xl text-text2 mt-5 ">
            Explore Our Products
          </h2>

          {/*********** show our product data  ***********/}
          <div className="p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-9">
            <ProductCard visibleProducts={visibleProducts} />
          </div>
          {/***************** View All Products button *********/}
          <div className="flex justify-center ">
            {visibleProducts < products.length && (
              <button
                className=" p-3 bg-button2 font-medium text-white py-2 rounded hover:bg-red-600 transition"
                onClick={handleShowMore}
              >
                View All Products
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
