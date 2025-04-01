import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai"; // You can change this to any other profile icon
import { useDispatch } from "react-redux"; // For dispatching actions like logout (if necessary)
import { Link, useNavigate } from "react-router-dom"; // For navigation after logout
import { logout } from "../redux/feature/authSlice";
import { TbLogout } from "react-icons/tb";
import { RiUser3Fill } from "react-icons/ri";
import { IoKey } from "react-icons/io5";


function ProfileDropdown({ user }) {
  const [isOpen, setIsOpen] = useState(false); // State to toggle dropdown visibility
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown visibility

  const handleLogout = () => {
    // Dispatch any logout action if needed or clear tokens, etc.
    dispatch(logout());

    // Navigate to login or home page after logout
    navigate("/login"); // Adjust the route as needed
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 "
      >
        <AiOutlineUser className="w-6 h-6" /> {/* Profile Icon */}
      </button>

      {isOpen && (
        <div className="absolute z-10 right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className=" w-full flex gap-6 items-center text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase">
            <RiUser3Fill />
            {user}
          </div>
          {/*************Change password ************ */}
          <div className=" w-full flex gap-6 items-center text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 uppercase">
          <IoKey />
          <Link to={'/changepassword'}>
            Change passeword    
          </Link>
          </div>
          <div className="py-1">
            <button
              onClick={handleLogout}
              className=" w-full flex gap-6 items-center text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <TbLogout />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
