import React from 'react'
import { getAuth } from "firebase/auth";
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const auth = getAuth();
  // const user = auth.currentUser;
  const user = true;
  if(!user){
    return <Navigate to='/' />
  }else{
    return children;
  }
}

export default ProtectedRoute