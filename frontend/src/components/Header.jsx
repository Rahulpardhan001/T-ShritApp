import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ProfileDropdown from "./profiledropdown";
import { getcartitem } from "../Thunk/productThunk";
import Search from "./Search";
import { getwishlist } from "../Thunk/wishlistThunk";

function Header() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { token, user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);

  const { loading, items: wishitems } = useSelector((state) => state.wishlist);
  // console.log(wishitems.length,"wish length" , wishitems)
  useEffect(() => {
    if (token) {
      dispatch(getcartitem());
      dispatch(getwishlist());
    }
  }, [token, dispatch]);

  return (
    <div className="header">
      <div className="container mx-auto">
        <div className="tophead flex flex-col md:flex-row justify-center items-center text-center bg-black text-white py-3 text-sm md:text-base">
          <h2 className=" ">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h2>
        </div>
        <nav className="flex flex-col lg:flex-row justify-between align-middle items-center mt-5 mb-1  py-2 lg:gap-0 px-16">
          <div className=" items-center">
            <h2 className="text-[000000] text-[24px] font-bold ">
              <Link to={"/"}>Exclusive</Link>
            </h2>
          </div>
          <div className=" items-center lg:text-left ">
            <ul className="hidden lg:flex gap-6 font-medium ">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>Contact</li>
              <li>About</li>
              {token ? (
                ""
              ) : (
                <li>
                  <Link to={"/signup"}>Sign up</Link>
                </li>
              )}
            </ul>
          </div>
          <div className=" flex flex-col md:flex-row gap-8 items-center px-2">
        {/****************ADDing Search functionality********* */}
            {token && <Search />}

            {token && (
              <div className="flex gap-10 items-center text-xl">
                <span className="relative flex">
                  {wishitems?.length >=0 && (
                    <span className="absolute animate-bounce  right-[-19px] top-[-22px] bg-red-700 rounded-full text-white p-1 w-6 h-6 flex justify-center items-center text-sm">
                      {wishitems?.length}
                    </span>
                  )}
                <Link to={"/wishlist"}>
                    <FaRegHeart />
                  </Link>
                </span>

                <Link to={"/cart"}>
                  <span className="flex relative">
                    <IoCartOutline />
                    {items?.length >0 && (
                      <span className="absolute animate-bounce right-[-19px] top-[-22px] bg-red-700 rounded-full text-white p-1 w-6 h-6 flex justify-center items-center text-sm">
                      {items?.length}
                    </span>
                    )}
                  </span>
                </Link>
                <ProfileDropdown user={user} />
              </div>
            )}
          </div>
        </nav>
        <hr />
      </div>
    </div>
  );
}

export default Header;
