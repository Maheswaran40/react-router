import React from "react";
import { Navigate } from "react-router-dom";

function Protect({ children }) {
  var isloggedin = localStorage.getItem("isLoggedIn");
  if (!isloggedin) {
    return <Navigate path="/" replace />;
  }
  return children;
}

export default Protect;
