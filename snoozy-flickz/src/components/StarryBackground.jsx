import React from 'react';
import './StarryBackground.css';

const NUM_STARS = 600;
const STAR_COLORS = ['#fff', '#b3c6ff', '#e0e7ff', '#a5b4fc'];

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

const StarryBackground = () => (
  <div className="starry-bg-root">
    {Array.from({ length: NUM_STARS }).map((_, i) => {
      const size = randomBetween(1, 2.5);
      const color = STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)];
      const top = randomBetween(0, 100);
      const left = randomBetween(0, 100);
      const opacity = randomBetween(0.7, 1);
      const duration = randomBetween(1.5, 4);
      const delay = randomBetween(0, 3);
      return (
        <div
          key={i}
          className="starry-bg-star"
          style={{
            top: `${top}vh`,
            left: `${left}vw`,
            width: size,
            height: size,
            background: color,
            opacity,
            animationDuration: `${duration}s`,
            animationDelay: `${delay}s`,
            boxShadow: `0 0 ${size * 6}px ${color}`,
          }}
        />
      );
    })}
  </div>
);

export default StarryBackground; 