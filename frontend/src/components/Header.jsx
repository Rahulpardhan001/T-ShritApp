// import React, { useEffect, useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import { FaRegHeart } from "react-icons/fa";
// import { IoCartOutline } from "react-icons/io5";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import ProfileDropdown from "./profiledropdown";
// import { getcartitem } from "../Thunk/productThunk";
// import Search from "./Search";
// import { getwishlist } from "../Thunk/wishlistThunk";

// function Header() {
//   const dispatch = useDispatch();
//   const [search, setSearch] = useState("");
//   const { token, user } = useSelector((state) => state.auth);
//   const { items } = useSelector((state) => state.cart);

//   const { loading, items: wishitems } = useSelector((state) => state.wishlist);
//   // console.log(wishitems.length,"wish length" , wishitems)
//   useEffect(() => {
//     if (token) {
//       dispatch(getcartitem());
//       dispatch(getwishlist());
//     }
//   }, [token, dispatch]);

//   return (
//     <div className="header">
//       <div className="container mx-auto">
//         <div className="tophead flex flex-col md:flex-row justify-center items-center text-center bg-black text-white py-3 text-sm md:text-base">
//           <h2 className=" ">
//             Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
//           </h2>
//         </div>
//         <nav className="flex flex-col lg:flex-row justify-between align-middle items-center mt-5 mb-1  py-2 lg:gap-0 px-16">
//           <div className=" items-center">
//             <h2 className="text-[000000] text-[24px] font-bold ">
//               <Link to={"/"}>Exclusive</Link>
//             </h2>
//           </div>
//           <div className=" items-center lg:text-left ">
//             <ul className="hidden lg:flex gap-6 font-medium ">
//               <li>
//                 <Link to={"/"}>Home</Link>
//               </li>
//               <li>Contact</li>
//               <li>About</li>
//               {token ? (
//                 ""
//               ) : (
//                 <li>
//                   <Link to={"/signup"}>Sign up</Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//           <div className=" flex flex-col md:flex-row gap-8 items-center px-2">
//         {/****************ADDing Search functionality********* */}
//             {token && <Search />}

//             {token && (
//               <div className="flex gap-10 items-center text-xl">
//                 <span className="relative flex">
//                   {wishitems?.length >=0 && (
//                     <span className="absolute animate-bounce  right-[-19px] top-[-22px] bg-red-700 rounded-full text-white p-1 w-6 h-6 flex justify-center items-center text-sm">
//                       {wishitems?.length}
//                     </span>
//                   )}
//                 <Link to={"/wishlist"}>
//                     <FaRegHeart />
//                   </Link>
//                 </span>

//                 <Link to={"/cart"}>
//                   <span className="flex relative">
//                     <IoCartOutline />
//                     {items?.length >0 && (
//                       <span className="absolute animate-bounce right-[-19px] top-[-22px] bg-red-700 rounded-full text-white p-1 w-6 h-6 flex justify-center items-center text-sm">
//                       {items?.length}
//                     </span>
//                     )}
//                   </span>
//                 </Link>
//                 <ProfileDropdown user={user} />
//               </div>
//             )}
//           </div>
//         </nav>
//         <hr />
//       </div>
//     </div>
//   );
// }

// export default Header;

import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProfileDropdown from "./profiledropdown";
import { getcartitem } from "../Thunk/productThunk";
import Search from "./Search";
import { getwishlist } from "../Thunk/wishlistThunk";

function Header() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const { items: wishitems } = useSelector((state) => state.wishlist);

  useEffect(() => {
    if (token) {
      dispatch(getcartitem());
      dispatch(getwishlist());
    }
  }, [token, dispatch]);

  return (
    <header className="w-full bg-white shadow-md">
      <div className="bg-black text-white text-center py-2 text-sm md:text-base">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
      </div>
      <nav className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6 lg:px-16">
        {/* Logo */}
        <h2 className="text-black text-2xl font-bold">
          <Link to="/">Exclusive</Link>
        </h2>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 font-medium text-gray-700">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {!token && (
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          )}
        </ul>
        
        {/* Right Section (Search, Wishlist, Cart, Profile) */}
        <div className="flex items-center gap-6 md:gap-8">
          {token && <Search />}
          {token && (
            <div className="flex gap-6 items-center text-xl">
              {/* Wishlist */}
              <Link to="/wishlist" className="relative">
                <FaRegHeart />
                {wishitems?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                    {wishitems.length}
                  </span>
                )}
              </Link>
              
              {/* Cart */}
              <Link to="/cart" className="relative">
                <IoCartOutline />
                {items?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-700 text-white text-xs w-5 h-5 flex justify-center items-center rounded-full">
                    {items.length}
                  </span>
                )}
              </Link>
              
              {/* Profile */}
              <ProfileDropdown user={user} />
            </div>
          )}
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
