import React from 'react';
import './BrokenGlass.css';

const BrokenGlass = () => {
  // Define the glass fragments with irregular shapes using clip-path
  const fragments = [
    { 
      id: 1, 
      clipPath: 'polygon(0 0, 45% 0, 40% 35%, 0 40%)',
      position: { top: '0', left: '0' }
    },
    { 
      id: 2, 
      clipPath: 'polygon(45% 0, 100% 0, 100% 30%, 60% 25%)',
      position: { top: '0', right: '0' }
    },
    { 
      id: 3, 
      clipPath: 'polygon(0 40%, 40% 35%, 35% 70%, 0 75%)',
      position: { top: '35%', left: '0' }
    },
    { 
      id: 4, 
      clipPath: 'polygon(40% 35%, 60% 25%, 65% 60%, 35% 70%)',
      position: { top: '25%', left: '35%' }
    },
    { 
      id: 5, 
      clipPath: 'polygon(60% 25%, 100% 30%, 100% 65%, 65% 60%)',
      position: { top: '25%', right: '0' }
    },
    { 
      id: 6, 
      clipPath: 'polygon(0 75%, 35% 70%, 30% 100%, 0 100%)',
      position: { bottom: '0', left: '0' }
    },
    { 
      id: 7, 
      clipPath: 'polygon(35% 70%, 65% 60%, 70% 100%, 30% 100%)',
      position: { bottom: '0', left: '35%' }
    },
    { 
      id: 8, 
      clipPath: 'polygon(65% 60%, 100% 65%, 100% 100%, 70% 100%)',
      position: { bottom: '0', right: '0' }
    }
  ];

  return (
    <div className="broken-glass-container">
      <div className="broken-glass">
        {fragments.map((fragment) => (
          <div
            key={fragment.id}
            className="glass-fragment"
            style={{
              clipPath: fragment.clipPath,
              position: 'absolute',
              ...fragment.position,
              width: '100%',
              height: '100%'
            }}
          >
            <div className="fragment-content">
              <div className="photo-placeholder"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrokenGlass; 