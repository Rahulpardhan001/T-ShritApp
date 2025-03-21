import React from "react";
import { FaPlus, FaShoppingCart } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


function Sidebar({ setIsSidebarOpen }) {
  const dispatch = useDispatch();
const navigate  = useNavigate()
  return (
    <>
      <nav className="mt-5 px-2">
        <ul className="space-y-3">
          <li className="flex justify-center gap-3 items-center md:justify-start">
            <Link
              to={"/addproduct"}
              className="flex p-3 rounded gap-4 hover:bg-gray-200 items-center"
            >
              <FaPlus className="text-amber-600 text-xl" />
              <div
                className="hidden md:inline md:ml-2"
                onClick={() => setIsSidebarOpen(false)}
              >
                Add Product
              </div>
            </Link>
          </li>
          <li className="flex justify-center items-center md:justify-start">
            <Link
              to={"/"}
              className="flex p-3 rounded gap-4 hover:bg-gray-200 items-center"
            >
              <AiOutlineProduct className="text-amber-600 text-xl" />
              <div
                className="hidden md:inline md:ml-2"
                onClick={() => setIsSidebarOpen(false)}
              >
                Products
              </div>
            </Link>
          </li>
          <li className="flex justify-center items-center md:justify-start">
            <Link
              to={"/order"}
              className="flex p-3 rounded gap-4 hover:bg-gray-200"
            >
              <FaShoppingCart className="text-amber-600 text-xl" />
              <div
                className="hidden md:inline md:ml-2"
                onClick={() => setIsSidebarOpen(false)}
              >
                Order Management
              </div>
            </Link>
          </li>
         
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
