import React from 'react';

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
  'https://picsum.photos/id/1041/400/400',
  'https://picsum.photos/id/1042/400/400',
  'https://picsum.photos/id/1043/400/400',
  'https://picsum.photos/id/1044/400/400',
  'https://picsum.photos/id/1045/400/400',
  'https://picsum.photos/id/1046/400/400',
  'https://picsum.photos/id/1047/400/400',
  'https://picsum.photos/id/1048/400/400',
  'https://picsum.photos/id/1049/400/400',
  'https://picsum.photos/id/1050/400/400',
];

// SVG paths for 20 shards, roughly matching the reference image
const shards = [
  'M120,60 L180,40 L200,100 L140,110 Z', // top left
  'M180,40 L240,60 L260,110 L200,100 Z', // top center
  'M240,60 L300,80 L320,140 L260,110 Z', // top right
  'M320,140 L340,200 L270,160 L260,110 Z', // right upper
  'M340,200 L320,260 L270,160 Z', // right mid
  'M320,260 L270,320 L260,230 L270,160 Z', // right lower
  'M270,320 L210,340 L200,270 L260,230 Z', // bottom right
  'M210,340 L150,320 L200,270 Z', // bottom center right
  'M150,320 L90,260 L140,230 L200,270 Z', // bottom center left
  'M90,260 L60,200 L130,160 L140,230 Z', // bottom left
  'M60,200 L80,140 L130,160 Z', // left lower
  'M80,140 L100,80 L140,110 L130,160 Z', // left upper
  'M140,110 L200,100 L130,160 Z', // left top inner
  'M200,100 L260,110 L270,160 L200,200 L130,160 Z', // center ring top
  'M200,200 L270,160 L260,230 L200,270 L140,230 L130,160 Z', // center ring bottom
  'M200,100 L200,40 L220,80 L200,120 L180,80 L200,40 Z', // top center small
  'M200,200 L200,270 L210,340 L190,340 Z', // bottom center small
  'M200,200 L270,160 L300,220 L260,230 Z', // right center small
  'M200,200 L130,160 L100,220 L140,230 Z', // left center small
  'M200,200 L200,100 L260,110 L270,160 Z', // center right
];

const GlassRing = ({ siteName = 'Your Website' }) => (
  <div style={{ width: '100vw', height: '100vh', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
    <svg
      viewBox="0 0 400 400"
      width="90vw"
      height="90vw"
      style={{ display: 'block', position: 'absolute', top: 0, left: 0 }}
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
          strokeWidth="3"
          filter="url(#shadow)"
          transform="translate(200,200) scale(0.92) translate(-200,-200)"
          style={{
            filter: 'drop-shadow(0 0 8px #00eaff44)'
          }}
        />
      ))}
    </svg>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: '#fff',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textShadow: '0 2px 16px #000',
      pointerEvents: 'none',
      textAlign: 'center',
      letterSpacing: '2px',
      zIndex: 2
    }}>{siteName}</div>
  </div>
);

export default GlassRing; 