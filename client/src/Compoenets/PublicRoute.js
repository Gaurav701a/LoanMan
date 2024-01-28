import React from 'react'
import { useNavigate } from 'react-router-dom'
const PublicRoute = ({children}) => {
    const Navigate=useNavigate();
  if(localStorage.getItem("token")){
    return Navigate("/");
  }
  else{
    return children;
  }
}

export default PublicRoute