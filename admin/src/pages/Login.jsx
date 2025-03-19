import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { LoginThunk } from "../Thunk/authThunk";

function Login() {
    const dispatch =  useDispatch()
    const navigate =useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // ************handle change *********//
  const handleChange = (e) => {
    const { name, value } = e.target;
    //  console.log(name, value,"ldsjf")
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // **************handle submit button************//
const submitHandle=async(e)=>{
    e.preventDefault();
    console.log(formData)
   const res = await dispatch(LoginThunk(formData));
   console.log(res.payload,"data ++++++++++++++++++")
   if(res.payload.success === true){
    navigate('/')
   }
   }
  return (
    <>
      <div className="flex justify-center h-[80vh] items-center">
        <form  onSubmit={submitHandle} className="shadow shadow-green-400  w-[30%] p-8">
          <h2 className="text-center text-4xl font">Login</h2>
          <div className="flex flex-col gap-2 py-1.5 pb-5">
            <label className="text-xl" htmlFor="">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow py-2.5 focus:outline-none rounded px-1.5"
            />
          </div>
          <div className="flex flex-col gap-2 py-1.5">
            <label className="text-xl" htmlFor="">
              Password
            </label>
            <input
              type="text"
              placeholder="Enter Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow py-2.5 focus:outline-none rounded px-1.5"
            />
          </div>
          <h3>
            Don't have an account?{" "}
            <Link className="text-blue-500 text-xl" to={"/signup"}>
              Sign Up
            </Link>
          </h3>

          <div className="flex justify-center mt-7">
            <button className="shadow hover:shadow-green-600 p-2 bg-green-700 text-white  rounded px-6 text-2xl cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
