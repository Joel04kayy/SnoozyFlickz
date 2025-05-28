import React from 'react';
import './ScrollWheel3D.css';

const NUM_CARDS = 28;
const topRow = [
  'Starknet', 'Moonbeam', 'Qredo', 'MINA', 'Casper'
];

const ScrollWheel3D = () => {
  const radius = 900;
  const angleStep = 120 / (NUM_CARDS - 1);
  const startAngle = -60;

  return (
    <div className="scrollwheel3d-outer-bg">
      {/* Top row of dark cards */}
      <div className="top-row">
        {topRow.map((txt, i) => (
          <div className="top-card" key={i}>{txt}</div>
        ))}
      </div>
      {/* Arc of white rectangles */}
      <div className="arc-lower">
        {Array.from({ length: NUM_CARDS }).map((_, i) => {
          const angle = startAngle + i * angleStep;
          const isHighlight = i === NUM_CARDS - 1;
          return (
            <div
              key={i}
              className={`domino-card${isHighlight ? ' highlight' : ''}`}
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`
              }}
            />
          );
        })}
      </div>
      {/* Centered text below arc */}
      <div className="arc-center-text">
        <h2>Portfolio</h2>
        <p>We are happy to be a satellite for teams whose transparent goals are to improve and create value for Web3.<br />
        DAW3 VENTURES provides comprehensive advisory support: attraction of investments, audit, listing, market making, strategic planning, etc.</p>
      </div>
    </div>
  );
};

export default ScrollWheel3D; 