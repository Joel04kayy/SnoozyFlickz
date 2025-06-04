import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <a href="#gallery" className="nav-link">Gallery</a>
        <a href="#journey" className="nav-link">Journey</a>
        <a href="#socials" className="nav-link">Socials</a>
      </div>
    </nav>
  );
};

export default Navbar; 