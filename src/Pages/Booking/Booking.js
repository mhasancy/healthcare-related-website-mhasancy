import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Booking = () => {
  const { serviceId } = useParams();
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mhasancy/test/main/serviceData.json"
    )
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, [serviceId]);
  const matchedService = servicesData?.find(
    (serviceData) => serviceData?.id === serviceId
  );
  return (
    <div className="container">
      <h1 className="fw-bold text-center ms-md-4 p-md-2 mx-auto my-5">
        Book Your
        <span className="text-primary"> Service</span>.
      </h1>
      <h2 className="fw-bold fs-2">{matchedService?.title}</h2>
      <h4 className="fw-light lh-base">{matchedService?.description}</h4>
      <Link to="/">
        <button className="btn btn-primary">Book Now</button>
      </Link>
    </div>
  );
};

export default Booking;
