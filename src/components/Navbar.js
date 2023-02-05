import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar(props) {
  return (
    <nav className="nav-bar">
      <div className="main-logo">
        <Link to="/cars">CARS</Link>
      </div>
      <div className="navbar-info">
        <p className="navlinks">TEAM</p>
        <Link to="/messages" className="navlinks">
          CONTACT
        </Link>
        <p className="navlinks">ABOUT</p>
      </div>
    </nav>
  );
}
