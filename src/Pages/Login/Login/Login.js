import React from "react";
import useAuth from "../../../contexts/useAuth";

const Login = () => {
  const { googleSignIn, logOut } = useAuth();
  return (
    <div>
      <button onClick={googleSignIn}>Google Login</button>
      <button onClick={logOut}>Google Logout</button>
    </div>
  );
};

export default Login;
