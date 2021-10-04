import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from '../Service/Service';

const TopService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('./service.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const history = useHistory();

  const goServicePage = () => {
    history.push('/services');
  };

  return (
    <div className="services">
      <div className="service-heading text-center my-4">
        <h1>Our top service</h1>
      </div>
      <div className="service-items ms-3">
        <Row xs={1} md={2} lg={3} className="g-4 service-row">
          {services.slice(0, 3).map((service) => (
            <Service service={service} key={service.id} />
          ))}
        </Row>
      </div>

      <Button
        variant="dark"
        className="my-5 mx-auto d-block px-4"
        title="see all service"
        onClick={goServicePage}
      >
        <i class="fas fa-chevron-right"></i>
      </Button>
    </div>
  );
};

export default TopService;