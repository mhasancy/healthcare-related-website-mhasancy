import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../contexts/useAuth";
const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand fs-1 fw-bold text-primary" to="/">
          Floral Care
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink aria-current="page" className="nav-link active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/booking/:serviceId">
                Booking
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/research">
                Research
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
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
