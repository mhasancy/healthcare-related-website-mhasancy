import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-bg row">
      <div className="col-3  ps-5 text-start">
        <h3>Floral Care Hospital</h3>
        <br />
        <h5 className="w-75 fw-light  ">
          Floral Care is an specializes hospital in England. We provide great
          care for our people through our community Services.
        </h5>
      </div>
      <div className="col-3 text-start  ps-5">
        <h3>Our Links</h3>
        <br />
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-3 text-start  ps-5">
        <h3>Other Links</h3>
        <br />
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-3">
        <h3>Contact Us</h3>
      </div>
    </div>
  );
};

export default Footer;
