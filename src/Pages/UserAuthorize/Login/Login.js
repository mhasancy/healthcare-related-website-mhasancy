//imported file
import { getAuth } from "@firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";

//log in component
const Login = () => {
  //auth context
  const auth = getAuth();
  //destructuring
  const {
    googleSignIn,
    setUser,
    setError,
    setIsLoading,
    emailLogin,
    error,
    errorDataClear,
  } = useAuth();
  //location redirectUrl
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";
  //googleSignIn handle
  const handleGoogleLogin = () => {
    googleSignIn().then(() => {
      history.push(redirectUrl);
    });
  };

  //use hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //use hook form and email SignIn with context
  const onSubmitData = (inputData) => {
    const { email, password } = inputData;
    emailLogin(auth, email, password)
      .then((results) => {
        setIsLoading(true);
        const userData = results.user;
        setUser(userData);
        history.push(redirectUrl);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong password, please try again or reset password.");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found, please check your email or signup.");
        } else {
          setError(error.message);
        }
      });
  };

  return (
    <div className="row row-cols-1 h-100 row-cols-md-2 p-0 shadow gradient-bg bg-primary container mx-auto my-5 radius-card overflow-hidden">
      <div className="col col-md-7 container bg-white py-4">
        <h2 className="fw-bold text-center ms-md-4 p-md-2 mx-auto my-5">
          Please
          <span className="gradient-txt"> Login</span>
        </h2>
        <form
          className="form my-3 mx-auto px-4 "
          onSubmit={handleSubmit(onSubmitData)}
        >
          <input
            placeholder="Your Email"
            className="form-control rounded-pill my-2 rounded-pill"
            type="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="gradient-txt pt-1">Email field is required</p>
          )}
          <input
            placeholder="Your Password"
            className="form-control rounded-pill my-2 rounded-pill"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="gradient-txt pt-1">Password field is required</p>
          )}
          <span>
            {error && <p className="gradient-txt">{error}</p>}
            <input
              className="form-control rounded-pill btn btn-primary gradient-btn px-3 fw-bold"
              type="submit"
              value="Login"
            />
          </span>
        </form>
        <button
          className="rounded-pill btn btn-primary gradient-btn fw-bold"
          onClick={handleGoogleLogin}
        >
          <i className="fab fa-google"></i> Login with Google
        </button>
        <br />
      </div>

      <div className="col col-md-5 row g-0 justify-content-center align-items-center my-4">
        <h2 className="fw-bold fs-2 text-white">Hello Friend !</h2>
        <h3 className="fw-light w-75 fs-3 text-white">
          Please signup with your personal details to start journey with us!!
        </h3>
        <p>
          <Link
            onClick={errorDataClear}
            className="btn btn-light my-2 rounded-pill px-3 fw-bold"
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
