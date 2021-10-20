//imported file
import React from "react";
import "./Banner.css";

//banner component
const Banner = () => {
  return (
    <div className="mx-auto row img-fluid hero-bg text-start align-items-center container-fluid ps-md-5">
      <div className=" ps-md-5 my-5">
        <h1 className="col-12 col-md-6 fw-bold">
          Get The Best Care For Your <br />
          <span className="gradient-txt"> Health</span>.
        </h1>
        <h4 className="col-12 col-md-6 fw-light text-start lh-base ">
          Health is the root of happiness. We prioritize health <br /> benefit
          using less medicine with revolutionary <br /> drug-food interactions.
        </h4>
        <span className="text-start ">
          <button className="btn btn-primary fw-bold gradient-btn rounded-pill px-3 mt-3">
            <i className="far fa-bookmark"></i> Book Now
          </button>
        </span>
      </div>
    </div>
  );
};

export default Banner;
