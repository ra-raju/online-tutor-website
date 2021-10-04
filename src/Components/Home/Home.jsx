import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="hero-section container">
        <div className="hero-img">
          <img
            src="https://image.freepik.com/free-vector/learning-concept-illustration_114360-4118.jpg"
            alt=""
          />
        </div>
        <div className="hero-text">
          <h1>Learn anything , learn anytime</h1>
          <p>
            Taking an online learning program, you'll be an officially
            registered student at your institution and have access to the same
            resources as an on-campus student, like your institution's digital
            library, learning management system (like Blackboard), student union
            membership and more! An online degree is similar to taking a degree
            program on campus, but you have the freedom to direct your own study
            schedule.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
