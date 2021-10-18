import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/about">About</Link>
      <Link to="/Logout">Home</Link>
      <button onClick={logOut}>Logout</button>

      <p>{user?.email}</p>
    </div>
  );
};

export default Navbar;
