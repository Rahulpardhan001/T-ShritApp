import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import { userRegister } from '../redux/feature/authSlice';
import { toast } from "react-toastify";
import { userRegister } from "../Thunk/authThunk";
import { IMAGES } from "../assets/ImageGallary/images";
function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userRegister(inputData));
    navigate('/login')
    setInputData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <section>
        <div className="container mx-auto px-1">
          <div className="singuppage flex flex-col lg:flex-row gap-8 lg:gap-36 items-center">
            <div className="left">
              <img
                className="w-full lg:w-[819px] h-auto "
                src={IMAGES.LOGIN_IMG}
                alt=""
              />
            </div>

            {/* Right side */}
            <div className="rgt p-2 w-full lg:w-80">
              <div className="mb-9 text-center lg:text-left">
                <h2 className="font-medium text-3xl "> Create an account</h2>
                <h6 className="text-sm mt-4 font-medium">
                  Enter your detail below
                </h6>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="name border-b-2 mt-2">
                  <input
                    className="w-full px-1 focus:outline-none"
                    type="text"
                    name="username"
                    placeholder="Name"
                    value={inputData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="border-b-2 mt-4">
                  <input
                    className="w-full px-1 focus:outline-none"
                    name="email"
                    type="text"
                    placeholder="Email or Phone Number"
                    value={inputData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="border-b-2 mt-4">
                  <input
                    className="w-full px-1 focus:outline-none"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={inputData.password}
                    onChange={handleChange}
                  />
                </div>
                <button className="mt-8 w-full bg-button2 text-white rounded py-2">
                  Create Account
                </button>
              </form>
              <div className="text-center lg:text-left mt-4">
                <h2>
                  Already have account? <Link to="/Login">Log in</Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
