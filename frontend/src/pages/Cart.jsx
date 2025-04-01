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

  useEffect(() => {
    dispatch(getcartitem());
  }, [dispatch]);

  const handleQuantityChange = (productId, newQuantity) => {
    setUpdatedQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(Number(newQuantity), 1),
    }));
  };

  const handleUpdate = async () => {
    for (let productId in updatedQuantities) {
      const updatedQuantity = updatedQuantities[productId];
      await dispatch(
        updatecartitem({ productId, quantity: updatedQuantity })
      ).unwrap();
      await dispatch(getcartitem());
    }
  };

  const handledeleteitem = async (id) => {
    try {
      await dispatch(deletecartitem({ productId: id })).unwrap();
      await dispatch(getcartitem());
    } catch (error) {
      console.error("Failed to delete cart item:", error.message || error);
    }
  };

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 lg:px-16">
      <h2 className="text-2xl font-bold mb-6 text-center sm:text-left text-gray-800">Your Cart</h2>
      
      {items.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-4">
          <table className="w-full table-auto text-sm sm:text-base">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">Product</th>
                <th className="px-4 py-3 text-left font-semibold">Price</th>
                <th className="px-4 py-3 text-left font-semibold">Quantity</th>
                <th className="px-4 py-3 text-left font-semibold">Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-100 transition">
                  <td className="px-4 py-3 flex items-center gap-4 relative">
                    <button
                      className="absolute left-2 top-2 bg-red-500 text-white p-1 rounded-full"
                      onClick={() => handledeleteitem(item?.productId?._id)}
                    >
                      <RxCross2 size={14} />
                    </button>
                    <img
                      className="w-16 h-16 object-cover rounded"
                      src={item?.productId?.image}
                      alt={item?.productId?.productName}
                    />
                    <span className="text-gray-700 font-medium">{item.productId?.productName}</span>
                  </td>
                  <td className="px-4 py-3 text-gray-700 font-medium">₹{item?.productId?.price}</td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      min="1"
                      value={updatedQuantities[item?.productId?._id] || item.quantity}
                      onChange={(e) => handleQuantityChange(item?.productId?._id, e.target.value)}
                      className="w-16 p-2 border rounded text-center"
                    />
                  </td>
                  <td className="px-4 py-3 text-gray-700 font-medium">₹{item?.quantity * item?.productId?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-end mt-6">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition"
              onClick={handleUpdate}
            >
              Update Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-14 text-gray-500 text-lg sm:text-xl">
          <MdRemoveShoppingCart className="text-6xl mb-4" />
          <p>Cart is Empty</p>
        </div>
      )}
    </div>
  );
}

export default Cart;