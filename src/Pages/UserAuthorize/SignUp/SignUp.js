//imported file
import { getAuth, updateProfile } from "@firebase/auth";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";
const SignUp = () => {
  const { googleSignIn, setError, setUser, setIsLoading, emailSignup, error } =
    useAuth();
  const auth = getAuth();

  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";

  const handleLogin = () => {
    googleSignIn().then(() => {
      history.push(redirectUrl);
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmitData = (inputData) => {
    const { name, email, password } = inputData;
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      emailSignup(auth, email, password)
        .then((results) => {
          setIsLoading(true);
          setError("");
          const userData = results.user;
          setUser(userData);
          setIsLoading(false);
          updateProfile(auth.currentUser, {
            displayName: name,
          });
          history.push(redirectUrl);
          window.history.go(0);
        })
        .catch((error) => {
          if (
            error.message === "Firebase: Error (auth/email-already-in-use)."
          ) {
            setError(
              "Email already used, please log in or try again with a new email."
            );
          } else {
            setError(error.message);
          }
        });
    }
  };
  return (
    <div className="row row-cols-1 h-100 row-cols-md-2 shadow container p-0 mx-auto my-5 radius-card gradient-bg bg-primary overflow-hidden">
      <div className="col col-md-5 row g-0 justify-content-center align-items-center my-3">
        <h2 className="fw-bold fs-2 text-white">Welcome Back!!</h2>
        <h3 className="fw-light w-75 fs-3 text-white">
          Please login with your personal details to connected with us!!
        </h3>
        <p>
          <Link
            className="btn btn-light my-2 rounded-pill px-3 fw-bold"
            to="/login"
          >
            Log In
          </Link>
        </p>
      </div>
      <div className="col col-md-7 bg-white py-4">
        <div className="container">
          <h2 className="fw-bold text-center ms-md-4 p-md-2 mx-auto my-5">
            Create
            <span className="gradient-txt"> Account</span>
          </h2>
          <form className="form my-3" onSubmit={handleSubmit(onSubmitData)}>
            <input
              placeholder="Your Name"
              className="form-control rounded-pill my-2"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="gradient-txt">Name field is required</p>
            )}

            <input
              placeholder="Your Email"
              className="form-control rounded-pill my-2"
              type="email"
              {...register("email", { required: true })}
            />

            {errors.email && (
              <p className="gradient-txt">Email field is required</p>
            )}

            <input
              placeholder="Your Password"
              className="form-control rounded-pill my-2"
              type="password"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <p className="gradient-txt pt-3">Password field is required</p>
            )}
            {error && <p className="gradient-txt">{error}</p>}
            <input
              type="submit"
              value="Sign Up"
              className="form-control rounded-pill btn btn-primary gradient-btn fw-bold px-3"
            />
          </form>
          <button
            className="btn btn-primary rounded-pill px-3 gradient-btn fw-bold"
            onClick={handleLogin}
          >
            <i className="fab fa-google"></i> SignUp with Google
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
