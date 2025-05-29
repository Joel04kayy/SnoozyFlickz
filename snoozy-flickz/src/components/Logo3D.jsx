import React, { useRef, useState, useEffect } from 'react';
import './Logo3D.css';

const LAYERS = 12;
const DEPTH = 0.04; // em per layer

const getLayerColor = (layerIdx, totalLayers) => {
  // Front is white, back is dark gray
  const t = layerIdx / (totalLayers - 1);
  const shade = Math.round(255 - t * 120); // 255 (white) to 135 (dark gray)
  return `rgb(${shade},${shade},${shade})`;
};

const renderLetterLayers = (letter, letterIdx) => (
  <span className="logo-3d-stack" key={letterIdx} style={{ '--i': letterIdx }}>
    {Array.from({ length: LAYERS }).map((_, layerIdx) => (
      <span
        className="stack-layer"
        key={layerIdx}
        style={{
          color: getLayerColor(layerIdx, LAYERS),
          zIndex: LAYERS - layerIdx,
          transform: `translateZ(${-layerIdx * DEPTH}em) translateY(${-layerIdx * 0.01}em)`
        }}
      >
        {letter}
      </span>
    ))}
  </span>
);

const text = 'Snoozy Flickz';

const Logo3D = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const maxAngleY = 2;
      const maxAngleXUp = 2;
      const maxAngleXDown = 0.5;
      const xPercent = e.clientX / window.innerWidth; // 0 (left) to 1 (right)
      const yPercent = e.clientY / window.innerHeight; // 0 (top) to 1 (bottom)
      // Y: left/right
      let rotY = (xPercent - 0.5) * 2 * maxAngleY;
      // X: up/down (top is negative, bottom is positive)
      let rotX;
      if (yPercent < 0.5) {
        // Above center: up tilt (max 2)
        rotX = (0.5 - yPercent) * 2 * maxAngleXUp;
      } else {
        // Below center: down tilt (max 0.5)
        rotX = -(yPercent - 0.5) * 2 * maxAngleXDown;
      }
      setRotation({ x: rotX, y: rotY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="logo-3d-container"
      ref={containerRef}
    >
      <h1
        className="logo-3d-text"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
      >
        {Array.from(text).map((char, i) => renderLetterLayers(char, i))}
      </h1>
    </div>
  );
};

export default Logo3D; 