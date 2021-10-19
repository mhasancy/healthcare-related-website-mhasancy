import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";

const Login = () => {
  const auth = getAuth();
  const {
    processLogin,
    googleSignIn,
    handleEmailChange,
    handlePasswordChange,
    handleEmailSignUp,
    emailSignIn,
    error,
    setUser,
    setError,
    setIsLoading,
  } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";

  const handleLogin = () => {
    googleSignIn().then((results) => {
      history.push(redirectUrl);
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitData = (inputData) => {
    const { email, password } = inputData;
    signInWithEmailAndPassword(auth, email, password)
      .then((results) => {
        setIsLoading(true);
        const userData = results.user;
        setUser(userData);
        console.log(userData);
        // setIsLoading(false);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // const getData = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <input type="email" {...register("email", { required: true })} />
        <br />
        {errors.email && <span>Email field is required</span>}
        <br />
        <input type="password" {...register("password", { required: true })} />
        <br />
        {errors.password && <span>Password field is required</span>}
        <br />
        <input type="submit" value="Sign Up" /> <br /> <br />
      </form>
      <button onClick={handleLogin}>Google Login</button>
      <br />
      <Link to="/login">Already Registered</Link>
    </>
  );
};

export default Login;
