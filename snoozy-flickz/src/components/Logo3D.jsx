import React from 'react';
import './Logo3D.css';

const Logo3D = () => {
  const renderLetter = (letter, index) => (
    <span className="logo-3d-extrude" style={{ '--i': index }} key={index}>
      <span className="front-face">{letter}</span>
      <span className="side-face">{letter}</span>
    </span>
  );

  const text = 'Snoozy Flickz';

  return (
    <div className="logo-3d-container">
      <h1 className="logo-3d-text">
        {Array.from(text).map((char, i) => renderLetter(char, i))}
      </h1>
    </div>
  );
};

export default Logo3D; 