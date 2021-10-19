//imported file
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
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
  const { googleSignIn, setUser, setError, setIsLoading } = useAuth();
  //redirectUrl
  const location = useLocation();
  const history = useHistory();
  const redirectUrl = location.state?.from || "/";

  const handleGoogleLogin = () => {
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
        history.push(redirectUrl);
      })
      .then((results) => {
        setIsLoading(true);
        const userData = results.user;
        setUser(userData);
        // setIsLoading(false);
        setIsLoading(false);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container w-md-50">
      <h1 className="fw-bold text-center ms-md-4 p-md-2 mx-auto my-5">
        Please
        <span className="text-primary"> Login</span>.
      </h1>
      <form className="form my-3" onSubmit={handleSubmit(onSubmitData)}>
        <input
          placeholder="Your Email"
          className="form-control my-2"
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="text-primary pt-1">Email field is required</p>
        )}
        <input
          placeholder="Your Password"
          className="form-control my-2"
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <p className="text-primary pt-1">Password field is required</p>
        )}
        <span>
          <input
            className="form-control btn btn-primary"
            type="submit"
            value="Login"
          />
        </span>
      </form>
      <button className="btn btn-secondary" onClick={handleGoogleLogin}>
        <i className="fab fa-google"></i> Login with Google
      </button>
      <br />
      <Link className="btn btn-secondary my-2" to="/signup">
        New to Site?
      </Link>
    </div>
  );
};

export default Login;
