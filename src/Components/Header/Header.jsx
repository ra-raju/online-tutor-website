import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className="nav">
        {/* nav title */}
        <div className="nav-title">
          <h1>Online tutor</h1>
        </div>
        {/* nav link */}
        <div className="navbar">
          <NavLink to="/home" className="navLink" activeClassName="active">
            home
          </NavLink>
          <NavLink to="/services" className="navLink" activeClassName="active">
            service
          </NavLink>
          <NavLink to="/about" className="navLink" activeClassName="active">
            about
          </NavLink>
          <NavLink to="/contact" className="navLink" activeClassName="active">
            contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
