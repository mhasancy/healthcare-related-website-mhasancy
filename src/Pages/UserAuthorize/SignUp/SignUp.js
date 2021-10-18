import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";

const SignUp = () => {
  const {
    handleSignUpEmail,
    handleSignUpName,
    handleSignUpPassword,
    handleSignUp,
    error,
    handleLogin,
  } = useAuth();
  return (
    <div>
      <div>
        <form onSubmit={handleSignUp}>
          <h3>Please SignUp</h3>
          <label htmlFor="name">Name:</label>
          <input onBlur={handleSignUpName} type="text" name="name" />
          <br />
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
          <input type="submit" value="SignUp" />
        </form>

        <button onClick={handleLogin}>Google Login</button>
        <br />

        <Link to="/login">Already Registered</Link>
      </div>
    </div>
  );
};

export default SignUp;
