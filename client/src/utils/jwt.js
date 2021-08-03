import React from "react";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router";

const getToken = () => {
  const token = localStorage.getItem("auth-token");
  return token;
};

const getRole = () => {
  const token = localStorage.getItem("auth-token");
  if (token === null || token === "") return <Redirect to="/login" />;
  const userJwt = jwtDecode(token);
  return userJwt;
};

const verifyRole = (role) => {
  const user = getRole();
  if (user.role === role) {
    return user;
  } else {
    return new Error("No Token Found");
  }
};

const verifyRoles = (roles) => {
  const user = getRole();
  for (let i = 0; i < roles; i++) {
    if (roles[i] === user.role) {
      return user;
    }
  }
  return false;
};

export { getRole, verifyRole, verifyRoles, getToken };
