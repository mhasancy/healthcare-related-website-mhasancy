//imported file
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

//services component
const Services = () => {
  //data set
  const [servicesData, setServicesData] = useState([]);

  //data load
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mhasancy/test/main/serviceData.json"
    )
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return (
    <div className=" container mx-auto my-5">
      <h1 className="fw-bold text-center ms-md-4 p-md-2  my-5">
        Book Your
        <span className="gradient-txt"> Services</span>.
      </h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
        {servicesData?.map((serviceData) => (
          <Service key={serviceData.id} serviceData={serviceData}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
