import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

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
    <div>
      <h2>{matchedService?.title}</h2>
      <h2>{matchedService?.description}</h2>
    </div>
  );
};

export default Booking;
