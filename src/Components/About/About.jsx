import React from 'react';
import './About.css';

const About = () => {
  return (
    <div>
      {/* about us section */}
      <div className="about d-flex align-items-center justify-content-around">
        <div className="about-img">
          <img
            src="https://image.freepik.com/free-vector/contact-us-concept-landing-page_52683-12859.jpg"
            alt="about-img"
          />
        </div>
        <div className="about-description">
          <h1>We share knowledge with the world</h1>
          <p>
            We help organizations of all types and sizes prepare for the path
            ahead — wherever it leads. Our curated collection of business and
            technical courses help companies, governments, and nonprofits go
            further by placing learning at the center of their strategies.
          </p>
        </div>
      </div>

      {/* activities section */}

      <div className="our-activities">
        <h1 className="activities-title">We just keep growing</h1>
        <p className="activities-info">
          Our global community and our course catalog get bigger every day.
          Check out our latest numbers as of June 2021.
        </p>

        <div className="activities">
          <div className="learner">
            <p>
              <span className="amount">40K</span> <br />{' '}
              <span className="learner"> Learner</span>
            </p>
          </div>
          <div className="teacher">
            <p>
              <span className="amount">35</span> <br />{' '}
              <span className="teacher"> Teachers</span>
            </p>
          </div>
          <div className="courses">
            <p>
              <span className="amount">30</span> <br />{' '}
              <span className="course"> Courses</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
