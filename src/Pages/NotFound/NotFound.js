//imported file
import React from "react";
import { NavLink } from "react-router-dom";
//404 component
const NotFound = () => {
  return (
    <div className="container-fluid">
      <h1 className="font-bold" style={{ fontSize: "200px" }}>
        404
      </h1>
      <h3 className="font-bold" style={{ fontSize: "50px" }}>
        Oops! The requested page is not available.
      </h3>
      <br />
      <NavLink to="/">
        <button className="btn btn-primary">Go to Homepage</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
