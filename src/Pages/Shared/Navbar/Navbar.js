import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  console.log(user);
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Logout">Home</Link>
      {user.email ? (
        <>
          <span>{user?.displayName}</span>{" "}
          <button onClick={logOut}>Logout</button>{" "}
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> <Link to="/signup">Signup</Link>{" "}
        </>
      )}
    </div>
  );
};

export default Navbar;
