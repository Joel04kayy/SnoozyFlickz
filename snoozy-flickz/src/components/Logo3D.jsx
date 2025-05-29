import React from 'react';
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

const Logo3D = () => (
  <div className="logo-3d-container">
    <h1 className="logo-3d-text">
      {Array.from(text).map((char, i) => renderLetterLayers(char, i))}
    </h1>
  </div>
);

export default Logo3D; 