import React, { useEffect } from "react";
import {
  DeleteProduct,
  GetProduct,
  UpdateProduct,
} from "../Thunk/ProductThunk";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { AiFillProduct } from "react-icons/ai";

// import Loader from "../components/Loader";
import Loading from "../assets/Loader/Loading";
import Search from "../components/Search";

function Product() {
  const { products, isLoading, error } = useSelector((state) => state.Product);
  const location = useLocation();

  // console.log(products[8], "ldjlfs");
  const productCount = products?.length;
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("here")
    dispatch(GetProduct());
  }, [dispatch]);

  // ********delete single product handler ************//
  const handleDelete = (id) => {
    // console.log(id, "id is ");
    // debugger;
    dispatch(DeleteProduct(id));
  };

  // ********update single product handler ************//
  const updateProduct = (id, item) => {
    console.log(id, item, "ldjflskjfjjflksdjklfjsdkl sdfkjfklj");
    dispatch(UpdateProduct(id, item));
  };

  if (error) return <p>Error: {error}</p>;
  if (!products || products?.length === 0)
    return (
      <p className="text-center pt-4 font-extralight text-4xl">
        No Product Available
      </p>
    );
  // console.log(products,"products")
  return (
    <div>
      {isLoading && <Loading />}
      <div className="flex justify-between items-center">
        <div className="text-2xl my-1 py-3 font-mono flex items-center gap-1">
          <AiFillProduct className="text-red-500" />
          Total Products: <span className="text-green-600">
            {productCount}
          </span>{" "}
        </div>
        {/****************** Search *******************/}
        <Search/>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 ">
        {products?.length > 0 &&
          products?.map((item, index) => (
            <div key={index} className="product-card  p-4 shadow-lg  ">
              <div className="product-images rounded">
                <img
                  src={item?.image[0]}
                  alt={item?.productName}
                  className="w-full h-40 object-contain rounded  "
                />
              </div>
              <h2 className="text-lg font-bold text-green-500">
                {item?.productName}
              </h2>
              <p>
                <strong>Brand:</strong> {item?.brandName}
              </p>
              <p>
                <strong>Price:</strong> ₹{item?.price}.00
              </p>
              <p>
                <strong>Stock:</strong> {item?.stock} available
              </p>
              <p className="text-sm">
                {" "}
                <strong>Description:</strong>
                {item?.description}
              </p>
              <div className="mt-3 flex justify-between">
                <span
                  className=" text-center  rounded cursor-pointer shadow p-2 shadow-green-800 font-mono hover:shadow-red-400"
                  onClick={() => handleDelete(item?._id)}
                >
                  <MdDelete className="hover:animate-bounce" />
                </span>

                <Link
                  to={`/update/${item?._id}`}
                  className="rounded cursor-pointer shadow p-2  shadow-green-800 font-mono hover:shadow-red-400"
                >
                  <RxUpdate className="hover:animate-spin" />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Product;
