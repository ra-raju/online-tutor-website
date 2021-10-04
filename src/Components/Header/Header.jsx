import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-title">
          <h1>Online tutor</h1>
        </div>
        <div className="navbar">
          <NavLink to="/home" className="navLink">
            home
          </NavLink>
          <NavLink to="/services" className="navLink">
            service
          </NavLink>
          <NavLink to="/about" className="navLink">
            about
          </NavLink>
          <NavLink to="/xyz" className="navLink">
            xyz
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
