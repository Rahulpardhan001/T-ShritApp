import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { GiLevelFour } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import { logout } from '../Redux-toolkit/Slice/authSlice';
import { Dropdown } from "flowbite-react";
import { MdLogout } from "react-icons/md";
import Search from './Search';
function Navbar() {
  const [toggle,setToggle] = useState(false)
 const navigate =  useNavigate()
  const dispatch = useDispatch();
  const handletoggle =()=>{
    setToggle((prev)=> !prev)
  }

  
  const handleLogout =()=>{
    console.log("hello")
    dispatch(logout());
    navigate("/login");  
  }
  
  return (
    <nav className='flex justify-between bg-amber-600 p-4 '>
      <div className="logo flex items-center gap-3 ">
      <Link to={'/'}><GiLevelFour className='text-3xl text-white' /></Link>
      </div>
      <Search/>
      <div>
      <Dropdown label="Profile" dismissOnClick={false} className="z-2" >
      <Dropdown.Item className='flex items-center gap-3' onClick={handleLogout}>Logout <MdLogout /></Dropdown.Item>
    </Dropdown>

      </div>
     

  
    </nav>
  )
}

export default Navbar



//  function Profile() {
//   const dispatch = useDispatch();
//   const handleLogout =()=>{
//     console.log("hello")
//     // dispatch(logout());
//     // localStorage.removeItem('Token')
//     // window.location.reload();
  
//   }
//   return (
//     <div className='shadow rounded bg-white text-black p-3 px-6 absolute right-6 top-11'>
//       {/* <div>userName</div> */}
//       <span className='flex gap-2 items-center' onClick={handleLogout}>Logout<RiLogoutCircleRLine /></span>
//     </div>
//   )
// }


