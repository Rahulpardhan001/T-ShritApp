import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { TiStar } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeartCircleCheck } from "react-icons/fa6";

import {
  fetchProduct,
  fetchSingleProduct,
  addtocart,
  getcartitem,
} from "../Thunk/productThunk";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import {
  addwishlist,
  deleteWishlistItem,
  getwishlist,
} from "../Thunk/wishlistThunk";

function ProductCard({ visibleProducts }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [wishToggle, setWishToggle] = useState(false);

  const { products, loading, error } = useSelector((state) => state.product);
  const { items: wishitems } = useSelector((state) => state.wishlist);
  // console.log(wishitems, "pro cart wish items");
  const rating = 4; // Example rating, can be replaced with dynamic data if available

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const handleSingleProduct = (id) => {
    // console.log("click", id)
    dispatch(fetchSingleProduct(id));
    navigate(`/product/${id}`);
  };

  // ****************handlewishlist*********//
  const handlewishlist = async (id) => {
    // console.log("click", id)

    await dispatch(addwishlist({ productId: id }));
    dispatch(getwishlist());
    // navigate(`/product/${id}`);
  };
  const handlewishDel = async (id) => {
    // console.log(id,"id is del wisht")
    await dispatch(deleteWishlistItem(id));
    dispatch(getwishlist());
  };

  // ****************AddToCart Button ****************//
  const addToCart = async (id, quantity) => {
    try {
      // console.log(id, quantity, "cart page addtocart");
      const data = await dispatch(
        addtocart({ productId: id, quantity })
      ).unwrap();
      if (data?.items) {
        // Fetch updated cart items and wishlist
        await dispatch(getcartitem());
        await dispatch(getwishlist());
      }
    } catch (error) {
      console.error("Failed to add to cart:", error); // Handle error if any
    }
  };

  const handlewishToggle = (id) => {
    setWishToggle((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {products.length === 0 && (
        <div className="text-3xl px-4 ">Product Not Found...</div>
      )}
      {products.slice(0, visibleProducts)?.map((product) => (
        <div
          key={product._id}
          className="card p-3 bg-white rounded-md shadow-lg hover:shadow-xl hover:scale-105  transition duration-700 ease-in-out ... "
        >
          {/******************  Image Container *******************/}
          <div className="flex justify-center items-center   ">
            <div className="w-[80%]">
              <img
                className="w-full  object-contain cursor-pointer p-2"
                src={product?.image[0]}
                alt={product?.productName}
                onClick={() => handleSingleProduct(product?._id)}
              />
            </div>

            {/******************wishlist add **********  */}

            {/* <span>
  {wishitems.some((curElem) => curElem._id === product._id) ? (
    <span className="absolute top-3 right-1 bg-white text-red-500 rounded-full text-2xl cursor-pointer hover:scale-105 transition">
      <FaHeartCircleCheck onClick={() => handlewishDel(product._id)} />
    </span>
  ) : (
    <span className="absolute top-3 right-1 bg-white rounded-full text-2xl cursor-pointer hover:scale-105 transition">
      <FaRegHeart onClick={() => handlewishlist(product._id)} />
    </span>
  )}
</span> */}

        
          </div>

          {/************ * Product Details ****************/}
          <div className="mt-3 w-full text-start">
            <h2 className="text-lg sm:text-xl font-medium truncate">
              {product?.productName}
            </h2>

            <div className="flex gap-3 mt-1">
              <span className="text-button2 font-bold">${product.price}</span>
              <del className="text-gray-400">$270</del>
            </div>
            {/************  Rating *****************/}
            <div className="flex items-center mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <TiStar
                  key={i}
                  className={i < rating ? "text-[#FFAD33]" : "text-gray-300"}
                />
              ))}
            </div>
            {/********************** Add to Cart Button ***************/}
            <div className="flex justify-between items-center">
              <button
                className="mt-4    py-2  rounded hover:bg-primary-dark transition"
                onClick={() => addToCart(product._id, 1)}
              >
                <FaCartPlus className="text-2xl" />
                {/* {loading ? "Adding..." : "Add to Cart"} */}
              </button>
            {/******************wishlist add **********  */}
              <span>
                {wishitems.some((curElem) => curElem._id === product._id) ? (
                  <span className=" bg-white text-red-500 rounded-full text-2xl cursor-pointer hover:scale-105 transition">
                    <FaHeartCircleCheck
                      onClick={() => handlewishDel(product._id)}
                    />
                  </span>
                ) : (
                  <span className=" bg-white rounded-full text-2xl cursor-pointer hover:scale-105 transition">
                    <FaRegHeart onClick={() => handlewishlist(product._id)} />
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
