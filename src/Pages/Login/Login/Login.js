import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../contexts/useAuth";

const Login = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";

  const handleLogin = () => {
    googleSignIn().then((results) => {
      history.push(redirectUrl);
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Google Login</button>
    </div>
  );
};

export default Login;
