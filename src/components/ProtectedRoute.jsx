import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  let { user } = UserAuth();
  console.log("****",user);
 return user? children:<Navigate to="/" replace/>
}

export default ProtectedRoute;
