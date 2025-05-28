import React from 'react';

// Placeholder images (replace with your own URLs)
const images = [
  'https://picsum.photos/id/1015/400/400',
  'https://picsum.photos/id/1016/400/400',
  'https://picsum.photos/id/1018/400/400',
  'https://picsum.photos/id/1020/400/400',
  'https://picsum.photos/id/1024/400/400',
  'https://picsum.photos/id/1025/400/400',
  'https://picsum.photos/id/1027/400/400',
  'https://picsum.photos/id/1035/400/400',
  'https://picsum.photos/id/1039/400/400',
  'https://picsum.photos/id/1040/400/400',
];

const shards = [
  // Top right shard
  'M200,100 L260,110 L300,80 L320,140 L270,160 L200,200 Z',
  // Top left shard
  'M200,100 L140,110 L100,80 L80,140 L130,160 L200,200 Z',
  // Right shard
  'M200,200 L270,160 L340,200 L320,260 L260,230 Z',
  // Left shard
  'M200,200 L130,160 L60,200 L80,260 L140,230 Z',
  // Bottom right shard
  'M200,200 L260,230 L270,320 L210,340 L200,270 Z',
  // Bottom left shard
  'M200,200 L140,230 L130,320 L190,340 L200,270 Z',
  // Bottom center shard
  'M200,200 L200,270 L210,340 L190,340 Z',
  // Top center shard
  'M200,100 L200,60 L220,80 L200,120 L180,80 L200,60 Z',
  // Center right shard
  'M200,200 L270,160 L300,220 L260,230 Z',
  // Center left shard
  'M200,200 L130,160 L100,220 L140,230 Z',
];

const ShatteredGlass = () => (
  <div style={{ width: '100vw', height: '100vh', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg
      viewBox="0 0 400 400"
      width="90vw"
      height="90vh"
      style={{ display: 'block' }}
    >
      <defs>
        {images.map((img, i) => (
          <pattern
            id={`img${i}`}
            key={i}
            patternUnits="userSpaceOnUse"
            width="400"
            height="400"
          >
            <image href={img} x="0" y="0" width="400" height="400" preserveAspectRatio="xMidYMid slice" />
          </pattern>
        ))}
      </defs>
      {shards.map((d, i) => (
        <path
          key={i}
          d={d}
          fill={`url(#img${i})`}
          stroke="#b9f2ff"
          strokeWidth="4"
          style={{ filter: 'drop-shadow(0 0 8px #00eaff44)' }}
        />
      ))}
    </svg>
  </div>
);

export default ShatteredGlass; 