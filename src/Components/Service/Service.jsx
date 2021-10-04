import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = (props) => {
  console.log(props.service);
  const {
    img,
    description,
    title,
    tag,
    love,
    price,
    tutorName,
    tutorPhoto,
    totalInrolled,
  } = props.service;
  return (
    <div>
      <Col>
        <Card className="card">
          <Card.Img variant="top" src={img} className="card-img" />

          <Card.Body>
            <span className="tag">{tag}</span>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <h4 className="card-price">${price}</h4>
          </Card.Body>
          <Card.Footer className="card-footer">
            <div className="tutor">
              <img src={tutorPhoto} className="tutor-img" alt="" />
              <p className="tutor-name">{tutorName}</p>
            </div>

            <div className="student">
              <div>
                <p>
                  <i class="fas fa-user"></i>{' '}
                  <span className="total-enroll">{totalInrolled}</span>
                </p>
              </div>
              <div>
                <p>
                  <i class="fas fa-heart"></i>{' '}
                  <span className="loved">{love}</span>
                </p>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
