import React from 'react'
import {FaPlus, FaShoppingCart } from "react-icons/fa";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from 'react-router-dom';
 function Sidebar({setIsSidebarOpen}) {
  return (
    <>
       <nav className="px-2 mt-5">
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Link to={"/addproduct"} className="flex gap-4 items-center rounded hover:bg-gray-200 p-3">
                <FaPlus className="text-xl text-amber-600" />
                <div className="md:ml-2 md:inline hidden" onClick={() => setIsSidebarOpen(false)}>
                  Add Product
                  </div>
                </Link>
              </li>
              <li className=" flex   items-center justify-center md:justify-start">
                <Link to={"/getproducts"} className="flex gap-4 items-center rounded  hover:bg-gray-200 p-3" >
                <AiOutlineProduct className="text-xl  text-amber-600" />
                <div className="md:ml-2 md:inline hidden" onClick={() => setIsSidebarOpen(false)}>
                  Products
                  </div>
                </Link>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Link to={"/order"} className="flex rounded gap-4 hover:bg-gray-200 p-3" >
                <FaShoppingCart className="text-xl  text-amber-600" />
                <div className="md:ml-2 md:inline hidden" onClick={() => setIsSidebarOpen(false)}>
                  Order List
                </div>
                </Link>
              </li>
            </ul>
          </nav>
    </>
  )
}

export default Sidebar;