import React from 'react';
import { Row } from 'react-bootstrap';
import useService from '../../Hooks/useService';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services] = useService([]);
  return (
    <div className="services">
      {/* service title */}
      <div className="service-heading text-center my-4">
        <h1>Services We Offer</h1>
        <p className="w-75 mx-auto mb-5">
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue.
        </p>
      </div>

      {/* service container */}

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
