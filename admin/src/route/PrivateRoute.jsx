// import React from 'react'
// import { Navigate } from 'react-router-dom';

// function PrivateRoute({children}) {
//     //  ;
  
//   const token = localStorage.getItem('Token');
//   if(!token){
//     return <Navigate to={'/login'}/>
//   }
// return children;
// }

// export default PrivateRoute


import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Use named import

function PrivateRoute({ children }) {
  const token = localStorage.getItem('Token');
// console.log(token)
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Decode token and check expiration
  try {
    const decodedToken = jwtDecode(token); // Use named import correctly
  //   ;
    if (decodedToken.exp * 1000 < Date.now()) {
      localStorage.removeItem('Token');
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.error("Invalid token:", error);
    localStorage.removeItem('Token');
    return <Navigate to="/login" />;
  }

  return children;
}

export default PrivateRoute;

