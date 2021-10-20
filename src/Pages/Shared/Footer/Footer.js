//imported file
import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

//footer component
const Footer = () => {
  return (
    <div className="container-fluid img-fluid footer-bg row row-cols-1 g-4 btn-yellow text-dark mt-5  py-5 text-start">
      <div className="row">
        {/* short about */}
        <div className="col col-md-5">
          <h2 className="fw-bold fs-2 text-start ms-3 ps-4">
            <span className="gradient-txt">Floral Care</span> Hospital
          </h2>
          <br />
          <h4 className="fw-light fs-4 text-start ms-4 ps-3 lh-base">
            Floral Care is an specializes hospital in England. We provide great
            care for our people through our community Services. Make yourself
            comfortable to take out services on demand. And be always aware of
            your health and safety.
          </h4>
          <div className="flex g-4 d-flex justify-content-start ps-3 pt-4 pb-4">
            <a href="https://developer.mozilla.org/">
              <i className="fab gradient-txt fa-twitter-square fs-2 ms-4 text-dark"></i>
            </a>
            <a href="https://developer.mozilla.org/">
              <i className="fab gradient-txt fa-facebook-square fs-2 ms-5 text-dark"></i>
            </a>
            <a href="https://developer.mozilla.org/">
              <i className="fab gradient-txt fa-linkedin fs-2 ms-5 text-dark"></i>
            </a>
            <a href="https://developer.mozilla.org/">
              <i className="fab gradient-txt fa-youtube fs-2 ms-5 text-dark"></i>
            </a>
          </div>
        </div>
        {/* address */}
        <div className="col col-md-4">
          <h2 className="fw-bold fs-2 text-start ms-3 ps-4">Contact</h2>
          <br />
          <h5 className="fw-normal fs-5 text-start ms-4 ps-3 lh-base w-75">
            23/2, Aston Villa, <br />
            England. <br />
            <br />
            Tel: +44 01234 567890 <br /> Fax: +44 025 7689 <br />
            <br />
            Email: info@floralcare.ac.uk
            <br />
            visit:{" "}
            <a
              className="text-dark text-decoration-none"
              href="http://www.floralcare.ac.uk"
              target="_blank"
              rel="noreferrer"
            >
              www.floralcare.ac.uk
            </a>
          </h5>
        </div>
        {/* useful links */}
        <div className="col col-md-3">
          <h2 className="fw-bold fs-2 text-start ms-3 ps-4">Pages</h2>
          <br />
          <ul className="fs-5 text-start ms-4 ps-3 lh-base w-75 list-unstyled">
            <li className="">
              <NavLink
                className="active text-dark text-decoration-none"
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-dark text-decoration-none"
                to="/booking/:serviceId"
              >
                Booking
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-dark text-decoration-none"
                to="/research"
              >
                Research
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-dark text-decoration-none">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className="text-dark text-decoration-none">
                Log In
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className="text-dark text-decoration-none">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
