import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./service.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services">
      <div className="service-heading text-center my-4">
        <h1>Services We Offer</h1>
        <p className="w-75 mx-auto mb-5">
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue.
        </p>
      </div>
      <div className="service-items ms-3">
        <Row xs={1} md={2} lg={3} className="g-4 service-row">
          {services.map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;
