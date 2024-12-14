import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let loggedUserData = localStorage.getItem("isLoggedIn");
  return loggedUserData ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
