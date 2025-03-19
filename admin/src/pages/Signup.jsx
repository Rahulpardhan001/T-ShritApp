import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signupThunk } from "../Thunk/authThunk";
function Signup() {
   const dispatch =  useDispatch()
  const [formData, setFormData] = useState({
    username:'',
    email:'',
    password:''
  });
// ************handle change *********//
const handleChange=(e)=>{
     const {name, value} = e.target;
    //  console.log(name, value,"ldsjf")
    setFormData((prev)=>({
        ...prev,
        [name]:value,
    }))
}

// **************handle submit button************//
const submitHandle=(e)=>{
 e.preventDefault();
 console.log(formData)
 dispatch(signupThunk(formData));

}

  return (
    <div className="flex justify-center h-[80vh] items-center">
      <form  onSubmit={submitHandle} className="shadow shadow-blue-400  w-[30%] p-8 ">
        <h2 className="text-center text-2xl font">signup</h2>
        <div className="flex flex-col gap-2 py-1.5">
          <label className="text-xl" htmlFor="">
            Username
          </label>
          <input
            type="text"
            name='username'
            placeholder="Enter username..."
            value={formData.username}
            onChange={handleChange}
            className="shadow py-2.5 focus:outline-none rounded px-1.5"
          />
        </div>
        {/* email */}
        <div className="flex flex-col gap-2 py-1.5">
          <label className="text-xl" htmlFor="">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email..."
            value={formData.email}
            onChange={handleChange}
            className="shadow py-2.5 focus:outline-none rounded px-1.5"
          />
        </div>
        {/* password */}
        <div className="flex flex-col gap-2 py-1.5">
          <label className="text-xl" htmlFor="">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter Password..."
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow py-2.5 focus:outline-none rounded px-1.5"
          />
        </div>
        <h3>
          Already have an Account?{" "}
          <Link className="text-blue-500 text-xl" to={"/"}>
            Login
          </Link>
        </h3>

        <div className="flex justify-center mt-7">
          <button className="shadow hover:shadow-blue-600  rounded px-4 text-2xl cursor-pointer">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
