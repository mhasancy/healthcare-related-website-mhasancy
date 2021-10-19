import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-light d-flex justify-content-between"
      style={{ backgroundColor: "rgb(34, 34, 34)", height: "70px" }}
    >
      <div className="container">
        <nav className="navbar-brand" to="/">
          <span className="fw-bold">Floral Care Hospital</span>
        </nav>
        <div className="navbar fw-bold" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                aria-current="page"
                className="nav-link active active"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/departments">
                Departments
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
              {/* {user.email ? (
                <span>
                  {user?.displayName} <button onClick={logOut}>Logout</button>{" "}
                </span>
              ) : (
                <span>
                  <NavLink to="/login">Login</NavLink>{" "}
                  <NavLink to="/signup">Signup</NavLink>{" "}
                </span>
              )} */}
            </li>

            {user?.email ? (
              <>
                <li className="nav-item">
                  <NavLink to="" className="nav-link">
                    {user?.displayName}
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" onClick={logOut}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link">
                    Log in
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/signup" className="nav-link">
                    Sign up
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
