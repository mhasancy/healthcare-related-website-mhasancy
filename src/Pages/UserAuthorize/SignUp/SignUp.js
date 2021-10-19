//imported file
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";
const SignUp = () => {
  const { googleSignIn, setError, setUser, setIsLoading } = useAuth();
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
        // setIsLoading(false);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";
  const handleLogin = () => {
    googleSignIn().then((results) => {
      history.push(redirectUrl);
    });
  };
  return (
    <div className="container w-md-50">
      <h1 className="fw-bold text-center ms-md-4 p-md-2 mx-auto my-5">
        Please
        <span className="text-primary"> SignUp</span>.
      </h1>
      <form className="form my-3" onSubmit={handleSubmit(onSubmitData)}>
        <input
          placeholder="Your Name"
          className="form-control my-2"
          type="text"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-primary">Name field is required</p>}

        <input
          placeholder="Your Email"
          className="form-control my-2"
          type="email"
          {...register("email", { required: true })}
        />

        {errors.email && (
          <p className="text-primary">Email field is required</p>
        )}

        <input
          placeholder="Your Password"
          className="form-control my-2"
          type="password"
          {...register("password", { required: true })}
        />

        {errors.password && (
          <p className="text-primary pt-3">Password field is required</p>
        )}

        <input
          type="submit"
          value="Sign Up"
          className="form-control btn btn-primary"
        />
      </form>
      <button className="btn btn-secondary" onClick={handleLogin}>
        <i className="fab fa-google"></i> SignUp with Google
      </button>
      <br />
      <Link className="btn btn-secondary my-2" to="/login">
        Already Registered
      </Link>
    </div>
  );
};

export default SignUp;
