import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, token } = useContext(AuthContext);

  return user && token ? children : <Navigate to="/" />;
};

export default PrivateRoute;
