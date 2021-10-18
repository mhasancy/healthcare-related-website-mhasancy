import React from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";

const Login = () => {
  const {
    googleSignIn,
    handleSignUpEmail,
    handleSignUpPassword,
    handleSignUp,
    error,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";

  const handleLogin = () => {
    googleSignIn().then((results) => {
      history.push(redirectUrl);
    });
  };

  // const getData = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div>
      <div>
        <form onSubmit={handleSignUp}>
          <h3>Please Login</h3>
          <label htmlFor="email">Email:</label>
          <input onBlur={handleSignUpEmail} type="email" name="email" />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            onBlur={handleSignUpPassword}
            type="password"
            name="password"
          />
          <p>{error}</p>
          <br />
          <input type="submit" value="Login" />
        </form>
        <Link to="/signup">New to Site</Link>
        <button onClick={handleLogin}>Google Login</button>
      </div>
    </div>
  );
};

export default Login;
