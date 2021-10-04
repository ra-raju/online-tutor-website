import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Contact.css';

export const Contact = () => {
  const history = useHistory();

  const formHandler = () => {
    history.push('/contact/submitted');
  };
  return (
    <div className="contact-section">
      <h1 className="contact-heading text-center">Contact Us</h1>
      <div className="contact">
        {/* this is form section */}
        <Form className="form">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="your name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="name@example.com"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={formHandler}>
            Submit
          </Button>
        </Form>

        {/* map section */}
        <div className="map">
          <iframe
            title="this is map"
            width="400"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=New%20Monsurabad%20Chittagong+(Online%20tutor)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>{' '}
          <a href="https://www.symptoma.com/en/info/covid-19">
            Q&A Coronavirus
          </a>{' '}
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=33a6b7bbcc17500c82d9b2d130850098a2b430b4"
          ></script>
        </div>
      </div>
    </div>
  );
};
