import React from 'react';
import Timer from '../Timer/Timer';
import './Event.css';

const Event = () => {
  return (
    <div className="event">
      <div className="event-details">
        <h3>21 Octabar 2021</h3>
        <h1>Web Devlopment Event</h1>
        <p>
          It is a global conference that explores the latest case studies, tools
          and techniques to help bridge the gap between product, UX, design and
          development. It features more than 50 speakers, conducts 16 workshops
          and attracts 2,000 attendees across the globe.
        </p>

        <div className="">
          <Timer />
        </div>
      </div>
    </div>
  );
};

export default Event;

/* 
<div className="day time">
            <p>
              <span>{20}</span> <br /> <span>day</span>
            </p>
          </div>
          <div className="hours time">
            <p>
              <span>12</span> <br /> <span>hours</span>
            </p>
          </div>
          <div className="min time">
            <p>
              <span>52</span> <br /> <span>min</span>
            </p>
          </div>
          <div className="sec time">
            <p>
              <span>20</span> <br /> <span>sec</span>
            </p>
          </div> */
