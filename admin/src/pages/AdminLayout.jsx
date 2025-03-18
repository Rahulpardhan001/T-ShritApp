import React, { useState } from "react";
import {Outlet } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="grid md:grid-cols-12 grid-cols-1 h-[100vh]">
        {/* Sidebar */}
        <div 
          className={`fixed md:static md:block col-span-2 shadow  h-full bg-white z-50 transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} w-[200px] md:w-auto`}
          style={{ zIndex: isSidebarOpen ? 100 : "auto" }}
        >
          {/* Admin Header */}
          <div className=" pb-3 flex justify-center items-center p-3">
            {/* <h1 className="text-2xl font-mono md:block "><span className=" text-red-500">A</span>dmin</h1> */}
            {/* Close Button for Mobile */}
            <button 
              className="md:hidden absolute top-4 text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation */}
          <Sidebar setIsSidebarOpen={setIsSidebarOpen}/>
          
        </div>
      

        {/* Overlay to prevent clicks on content when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
            style={{ zIndex: 99 }}
          ></div>
        )}

        {/* Main Content */}
        <div className=" md:col-span-10 col-span-1 w-full p-4 relative">
          {/* Hamburger Menu */}
          <button 
            className="md:hidden text-2xl absolute top-4 left-4"
            onClick={() => setIsSidebarOpen(true)}
          >
            <FaBars />
          </button>

          <div className="px-10">
            {/* Page Content */}
            <Outlet />
          </div>
        </div>
      </header>
    </>
  );
}

export default AdminLayout;
