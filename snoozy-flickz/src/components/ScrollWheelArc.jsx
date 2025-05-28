import React from 'react';
import './ScrollWheelArc.css';

const NUM_CARDS = 32;

const ScrollWheelArc = () => {
  const radius = 1400;
  const angleStep = 70 / (NUM_CARDS - 1);
  const startAngle = -35;
  const centerIdx = Math.floor(NUM_CARDS / 2);

  return (
    <div className="arc-outer">
      <div className="arc-cards">
        {Array.from({ length: NUM_CARDS }).map((_, i) => {
          const angle = startAngle + i * angleStep;
          const distFromCenter = Math.abs(i - centerIdx) / centerIdx;
          const scale = 1 - distFromCenter * 0.55;
          const rotateY = angle * 1.25;
          const isHighlight = i === NUM_CARDS - 1;
          return (
            <div
              key={i}
              className={`arc-card${isHighlight ? ' highlight' : ''}`}
              style={{
                transform: `rotateY(${rotateY}deg) translateZ(${radius}px) scale(${scale})`,
                zIndex: 100 - Math.abs(i - centerIdx),
                marginLeft: i === 0 ? 0 : -32 * scale,
                marginRight: i === NUM_CARDS - 1 ? 0 : -32 * scale,
              }}
            >
              <div className="arc-card-gradient" />
              <div className="arc-card-sheen" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollWheelArc; 