import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="row hero-bg d-flex text-start align-items-center container-fluid">
      <h1 className="col-6 fw-bold ms-5 p-5">
        Get The Best Care For Your <br />
        <span className="text-primary"> Health</span>.
      </h1>
      <h4 className="col-6 fw-light ms-5 text-start m-0 p-5 lh-base">
        Health is the root of happiness. We prioritize health <br /> benefit
        using less medicine with revolutionary <br /> drug-food interactions.
      </h4>
      <span className="ms-5 text-start p-5">
        <button className="btn btn-primary">Book Now</button>
      </span>
    </div>
  );
};

export default Banner;
