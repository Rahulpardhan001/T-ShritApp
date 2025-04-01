// import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom"
// import { logout } from "../redux/feature/authSlice";
// import { useEffect } from "react";
// import { jwtDecode } from 'jwt-decode'; 
// // import { Redirect } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";

// const ProtectedRoute =({children})=>{
    
//     const dispatch = useDispatch()
//     const navigate = useNavigate();
//     // const { token } = useSelector((state) => state.auth);
//     const token = localStorage.getItem('token');
    
//     useEffect(() => {
//         if (!token) {
//             dispatch(logout());
//             navigate('/login');
//         }
//     }, [token, dispatch]);

//     // if (!token) return null; 
//     return children
// }

// export default ProtectedRoute



import React from 'react';
import { Navigate, redirect } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Use named import
import { toast } from 'react-toastify';

function PrivateRoute({ children }) {
    // debugger;
  const token = localStorage.getItem('token');
// console.log(token)
  if (!token) {
  
    return <Navigate to="/login" />;
  }

  // Decode token and check expiration
  try {
    const decodedToken = jwtDecode(token); // Use named import correctly
    // console.log(decodedToken,"decode token is")
  //  debugger;
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem('token');
      localStorage.removeItem("user");
    //   return <Navigate to="/login" />;
    toast.warn("Token has been expired! please again loagin ")
    redirect('/login')
    }
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem('token');
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;

