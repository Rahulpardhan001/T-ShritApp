
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { userLogin } from "../Thunk/authThunk";


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState({
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

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(userLogin(inputData));
      if (userLogin.fulfilled.match(resultAction)) {
        // debugger;
        if (resultAction.payload.role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Login Error:', err);
    }
  };
  return (
    <>
      <section>
        <div className="container mx-auto px-1">
          <div className="singuppage flex flex-col lg:flex-row gap-8 lg:gap-36 items-center">
            <div className="left">
              <img
                className="w-full lg:w-[819px] h-auto "
                src="../src/assets/img/authImg.png "
                alt=""
              />
            </div>

            {/* Right side */}
            <div className="rgt p-2 w-full lg:w-80">
              <div className="mb-9 text-center lg:text-left">
                <h2 className="font-medium text-3xl "> Log in to Exclusive</h2>
                <h6 className="text-sm mt-4 font-medium">
                  Enter your detail below
                </h6>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="border-b-2 mt-4">
                  <input
                    className="w-full px-1 focus:outline-none"
                    type="text"
                    placeholder="Email or Phone Number"
                    name="email"
                    value={inputData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="border-b-2 mt-4">
                  <input
                    className="w-full px-1 focus:outline-none"
                    id="password"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={inputData.password}
                    onChange={handleChange}
                  />
                </div>
              
                <div className="mt-8  flex justify-between items-center">
                  <button className=" bg-button2 text-white rounded py-2 px-8">
                    Login
                  </button>
                  <Link className="text-button2" to={"#"}>
                    Forget Password?{" "}
                  </Link>
                </div>
           
              </form>
              <div className='text-center lg:text-left mt-4'>
                <h2>Don't have an account?<Link to='/signup'> Sign up</Link></h2>
            </div>
              {/* <div className='text-center lg:text-left mt-4'>
                <h2>Already have account? <Link to='/Login'>Log in</Link></h2>
            </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
