import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    // debugger;
  
  const token = localStorage.getItem('Token');
  if(!token){
    return <Navigate to={'/login'}/>
  }
return children;
}

export default PrivateRoute


