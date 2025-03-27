import React, { useEffect } from "react";
// import Loading from '../assets/Loader/Loading'
import { useDispatch, useSelector } from "react-redux";
import { OrderThunk } from "../Thunk/orderThunk";
// if(isLoading)return <Loading/>

function Order() {
  const { order } = useSelector((state) => state.order);
  // console.log(order,"ordelslssssssssss+++++==")
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(OrderThunk());
  }, [dispatch]);
  return (
    <>
       <div className="container p-4 mx-auto">
      <h2 className="text-2xl text-center font-bold mb-4">Order List</h2>
      <div className="overflow-x-auto">
        <table className="border border-gray-200 rounded-lg shadow-lg min-w-full overflow-hidden">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Address</th>
              <th className="p-3 text-left">Order Price</th>
              <th className="p-3 text-left">productId</th>
              <th className="p-3 text-left">quantity</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-gray-200 divide-y">
            {order.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-3">{item?.user?.email || "N/A"}</td>
                <td className="p-3">{item?.address || "N/A"}</td>
                <td className="p-3">${item?.orderPrice || "0"}</td>
                <td className="p-3">${item?.orderItems.map((item)=>item.productId) || "0"}</td>
                <td className="p-3">${item?.orderItems.map((item)=>item.quantity) || "0"}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      item?.Status === "pending"
                        ? "bg-yellow-200 text-yellow-800"
                        : item?.Status === "delivered"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {item?.Status || "Pending"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}

export default Order;
