import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const Navigate=useNavigate();
  if(localStorage.getItem("token")){
    return children;
  }
  else{
    return Navigate("/login");
  }
}

export default ProtectedRoute