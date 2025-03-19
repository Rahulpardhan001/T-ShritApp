import React, { useState } from 'react'
import { FaRegUser } from "react-icons/fa";
import { GiLevelFour } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";
function Navbar() {
  const [toggle,setToggle] = useState(false)
  const handletoggle =()=>{
    setToggle((prev)=> !prev)
  }
  
  return (
    <nav className='flex justify-between bg-amber-600 p-4 text-white relative'>
      <div className="logo flex items-center gap-3"><GiLevelFour />logo</div>
      <div title='Profile' className="profile cursor-pointer text-2xl "onClick={handletoggle}><FaRegUser/> </div>
     {
      toggle?<Profile/>:""
     }
    </nav>
  )
}

export default Navbar



export function Profile() {
  const handleLogout =()=>{
    console.log("hello")
    localStorage.removeItem('Token')
    window.location.reload();

  }
  return (
    <div className='shadow rounded bg-white text-black p-3 px-6 absolute right-6 top-11'>
      {/* <div>userName</div> */}
      <span className='flex gap-2 items-center'onClick={handleLogout}>Logout<RiLogoutCircleRLine /></span>
    </div>
  )
}


