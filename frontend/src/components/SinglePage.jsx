import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function SinglePage() {
   const navigate = useNavigate();
  const { singleProduct, loading, error } = useSelector((state) => state.product);
  console.log(singleProduct, '>..........');

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-5">Error: {error}</p>;
  if (!singleProduct) return <p className="text-center mt-5">No product details available</p>;

  return (
    <>
      <div className="single-page p-5">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-md p-5">
        <div className="mb-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition"
            >
              ← Back
            </button>
          </div>
          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src={singleProduct?.image}
              alt={singleProduct?.productName}
              className="w-[300px] h-[300px] object-contain"
            />
          </div>
          
          {/* Product Details */}
          <div className="mt-5 text-center">
            <h1 className="text-2xl font-bold">{singleProduct?.productName}</h1>
            <p className="text-gray-600 mt-2">{singleProduct?.description}</p>
            <div className="flex justify-center gap-5 mt-3">
              <span className="text-green-600 font-bold text-xl">${singleProduct?.price}</span>
              <del className="text-gray-400 text-lg">$270</del>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-5 text-center">
            <button className="bg-blue-800 text-white font-semibold  py-2 px-4 rounded-md hover:bg-blue-950  transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SinglePage;
