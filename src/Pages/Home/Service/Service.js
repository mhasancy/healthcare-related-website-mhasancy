import React from "react";
import { Link } from "react-router-dom";

const Service = ({ serviceData }) => {
  const { id, title, intro, image } = serviceData;
  return (
    <div className="col container">
      <div className="card h-100">
        <img src={image} className="card-img-top img-fluid" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p style={{ height: "160px" }} className="card-text">
            {intro}
          </p>
          <Link to={`/booking/${id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
