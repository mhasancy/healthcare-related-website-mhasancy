import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";
const SignUp = () => {
  const {
    handleEmailSignUp,
    error,
    handleLogin,
    setEmailData,
    setPasswordData,
    setNameData,
    googleSignIn,
    setError,
    setUser,
    setIsLoading,
  } = useAuth();
  const auth = getAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitData = (inputData) => {
    const { name, email, password } = inputData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((results) => {
        setIsLoading(true);
        const userData = results.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        });
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <input type="text" {...register("name", { required: true })} /> <br />
        {errors.name && <span>Name field is required</span>}
        <br />
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
      <button onClick={googleSignIn}>Google Login</button>
      <br />
      <Link to="/login">Already Registered</Link>
    </>
  );
};

export default SignUp;
