import React from 'react';
import { useHistory } from 'react-router';
import './NotFound.css';

const NotFound = () => {
  const history = useHistory();

  const backHomePageHandler = () => {
    history.push('/home');
  };
  return (
    <div className="notfound">
      {/* not found text */}
      <div className="notfound-info">
        <h1>Sorry!! This page not found</h1>
        <button className="btn-regular" onClick={backHomePageHandler}>
          go to home page
        </button>
      </div>

      {/* not found img */}

      <div className="notfound-img-container">
        <img
          src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"
          alt="img"
          className="notfound-img"
        />
      </div>
    </div>
  );
};

export default NotFound;
