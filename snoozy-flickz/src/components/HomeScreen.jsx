import React from 'react';
import './HomeScreen.css';

const NUM_ROWS = 3;
const NUM_COLS = 3;

const HomeScreen = () => {
  return (
    <div className="home-container">
      <header className="site-header">
        <h1 className="site-title">Snoozy Flickz</h1>
        <p className="site-subtitle">Capturing Cars. Creating Stories.</p>
      </header>
      <div className="photo-grid">
        {[...Array(NUM_ROWS * NUM_COLS)].map((_, idx) => (
          <div key={idx} className="photo-placeholder" />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen; 