import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mhasancy/test/main/serviceData.json"
    )
      .then((res) => res.json())
      .then((data) => setServicesData(data));
  }, []);
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {servicesData?.map((serviceData) => (
        <Service key={serviceData.id} serviceData={serviceData}></Service>
      ))}
    </div>
  );
};

export default Services;
