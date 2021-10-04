import React from 'react';
import { Contact } from '../Contact/Contact';
import Event from '../Event/Event';
import Hero from '../Hero/Hero';
import TopService from '../TopService/TopService';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Hero />
      <TopService />
      <Event />
      <Contact />
    </div>
  );
};

export default Home;
