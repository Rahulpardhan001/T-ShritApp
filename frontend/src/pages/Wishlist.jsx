import React, { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import {Link} from "react-router-dom"
import { deleteWishlistItem, getwishlist } from "../Thunk/wishlistThunk";
import { addtocart } from "../Thunk/productThunk";
// import { fetchCartItems } from "../../../ShopingApp/src/reduxToolkit/Thunk/cartThunk";
function Wishlist() {
  
  const { loading, items } = useSelector((state) => state.wishlist);
  const [loadingItem, setLoadingItem] = useState(null); 
  // console.log("hello lkdj",items)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getwishlist());
  }, [dispatch]);
  
  // *************handlewishDel************//
  const handlewishDel = async (id)=>{
// console.log(id,"id is del wisht")
 await dispatch(deleteWishlistItem(id))
await dispatch(getwishlist())
  }

// *******************handle wishlist to  AddToCart ************// 
const addToCart = async (id, quantity) => {
  try {
    // console.log(id, quantity, "cart page addtocart");
    setLoadingItem(id)
    // Dispatch the add to cart action and await the result
    const data = await dispatch(addtocart({ productId: id, quantity })).unwrap();
    if (data?.items) {
    //  await dispatch(fetchCartItems());
    //  await dispatch(getwishlist());
    }
  } catch (error) {
    console.error("Failed to add to cart:", error); // Handle error if any
  } finally{
    setLoadingItem(null)
  }
};
  // if(loading) return <Loader/>
  return (
    <>
      <div className="wishcontainer px-12">
        <div className="flex justify-between my-5">
          <h3 className="p-1 font-normal">Wishlist ({items?.length})</h3>
          <span className="border border-slate-900 p-3 px-3 font-medium text-sm">
          <Link to={'/'}>
            Move All To Bag
          </Link>
          </span>
        </div>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-4 my-5 ">
          {loading && <div><Loader /></div>}
          { items?.length === 0 ? <div className="text-2xl"> Wishlist is Empty</div>:(
            items?.map((item, index) => {
                    return (
                <div className="shadow   relative" key={index}>
                  <div className="image flex justify-center align-middle items-center">
                    <img
                      className=" w-[150px] h-[160px] md:w-[190px] md:h-[180px] object-contain"
                      src={item?.image}
                      alt={item?.productName}
                    />
                  </div>
                  {/* ****************delete button wishlist item ******* */}
                  <span className=" absolute top-2 right-5 border rounded-full p-1" onClick={()=>handlewishDel(item?._id)}>
                    <RiDeleteBin6Line />
                  </span>
                  <span className=" absolute top-2 left-5  rounded bg-button2 text-white text-xs p-1 px-2 ">
                    -35%
                  </span>

                  <div className="flex flex-col px-3">
                    <span className="my-3">{item?.productName}</span>
                    <div className="flex gap-5">
                      <span className="text-button2 font-medium">
                        ${item?.price}
                      </span>
                      <del className="font-normal text-slate-600">$1160</del>
                    </div>
                  </div>

                    {/* *****************add to cart button **************** */}
                    <div className="bg-slate-900 mt-2 text-white p-2 flex justify-center gap-2 items-center cursor-pointer" onClick={()=>addToCart(item?._id,1)}>
                    <span>
                      <TiShoppingCart />
                    </span>
                    {loadingItem === item?._id ? "Adding..." : "Add to cart"}
                    
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Wishlist;
