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
