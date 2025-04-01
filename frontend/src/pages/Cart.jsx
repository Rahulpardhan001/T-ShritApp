import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletecartitem,
  getcartitem,
  updatecartitem,
} from "../Thunk/productThunk";
import { RxCross2 } from "react-icons/rx";
import Loader from "../components/Loader";
import { MdRemoveShoppingCart } from "react-icons/md";

function Cart() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.cart);
  const [updatedQuantities, setUpdatedQuantities] = useState({});
  // console.log(items,"mu cart ite++++++++=")
  useEffect(() => {
    dispatch(getcartitem());
  }, [dispatch]);

  // Handle quantity change for a specific product
  const handleQuantityChange = (productId, newQuantity) => {
    setUpdatedQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(Number(newQuantity), 1), // Ensure quantity cannot be less than 1
    }));
  };

  // Handle cart update by dispatching updated quantities to the server
  const handleUpdate = async () => {
    // try {
    // Loop through updated quantities and dispatch updatecartitem
    for (let productId in updatedQuantities) {
      const updatedQuantity = updatedQuantities[productId];
      await dispatch(
        updatecartitem({ productId, quantity: updatedQuantity })
      ).unwrap();
      if (updatedQuantity !== undefined) {
        await dispatch(getcartitem());
      }
    }
    //   // Fetch updated cart items after the update
    // } catch (error) {
    //   console.error("Error updating cart:", error);
    // }
  };

  // Handle item deletion
  const handledeleteitem = async (id) => {
    try {
      await dispatch(deletecartitem({ productId: id })).unwrap();
      await dispatch(getcartitem());
    } catch (error) {
      console.error("Failed to delete cart item:", error.message || error);
    }
  };

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto my-8 px-16">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {items.length>0 && (
        <div className="overflow-x-auto bg-white rounded-lg shadow-md">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Product
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Price
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Quantity
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id} className="border-b pb-4">
                  <td className="px-4 py-2 flex items-center relative">
                    <span
                      className="absolute left-2 top-0 bg-button2 rounded-full p-1 text-[10px] font-semibold text-white"
                      onClick={() => handledeleteitem(item?.productId?._id)}
                    >
                      <RxCross2 />
                    </span>
                    <img
                      className="w-14 h-14 object-cover mr-4"
                      src={item?.productId?.image}
                      alt={item?.productId?.productName}
                    />
                    <span>{item.productId?.productName}</span>
                  </td>
                  {/* increment and decrement */}
                  <td className="px-4 py-2">₹{item?.productId?.price}</td>
                  <td className="px-4 py-2">
                    <input
                      type="number"
                      min="1"
                      value={
                        updatedQuantities[item?.productId?._id] || item.quantity
                      }
                      onChange={(e) =>
                        handleQuantityChange(
                          item?.productId?._id,
                          e.target.value
                        )
                      }
                      className="p-1 w-20 text-center inputfocus "
                    />
                  </td>
                  <td className="px-4 py-2">
                    ₹{item?.quantity * item?.productId?.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Update Button */}
      {items.length>0 && (
        <div className="flex justify-end mt-6">
          <button
            className="border border-slate-500 px-6 py-3 rounded"
            onClick={handleUpdate}
          >
            Update Cart
          </button>
        </div>
      )}

      {items.length<=0 && (
        <div className="flex items-center justify-center gap-5 py-14 text-gray-500 text-xl">
          {" "}
          <MdRemoveShoppingCart className="text-6xl" />
          Cart is Empty
        </div>
      )}
    </div>
  );
}

export default Cart;
