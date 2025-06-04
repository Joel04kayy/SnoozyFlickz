import React, { useState } from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Sample photos array - replace with your actual photos
  const photos = [
    {
      id: 1,
      url: '/path/to/photo1.jpg',
      title: 'Photo 1',
      description: 'Description for photo 1'
    },
    {
      id: 2,
      url: '/path/to/photo2.jpg',
      title: 'Photo 2',
      description: 'Description for photo 2'
    },
    {
      id: 3,
      url: '/path/to/photo3.jpg',
      title: 'Photo 3',
      description: 'Description for photo 3'
    },
    {
      id: 4,
      url: '/path/to/photo4.jpg',
      title: 'Photo 4',
      description: 'Description for photo 4'
    },
    {
      id: 5,
      url: '/path/to/photo5.jpg',
      title: 'Photo 5',
      description: 'Description for photo 5'
    },
    {
      id: 6,
      url: '/path/to/photo6.jpg',
      title: 'Photo 6',
      description: 'Description for photo 6'
    },
    {
      id: 7,
      url: '/path/to/photo7.jpg',
      title: 'Photo 7',
      description: 'Description for photo 7'
    }
  ];

  return (
    <div className="photo-gallery" id="gallery">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="polaroid-stack">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="polaroid-card"
            style={{
              '--rotation': `${-60 + (index * 8)}deg`,
              '--z-index': index,
              '--hover-rotation': `${-60 + (index * 8) + 10}deg`,
              '--hover-translate': '15px',
              '--offset-x': `${-300 + (index * 100)}px`
            }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="polaroid-content">
              <img src={photo.url} alt={photo.title} />
              <div className="polaroid-caption">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <div className="photo-modal" onClick={() => setSelectedPhoto(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedPhoto(null)}>×</button>
            <img src={selectedPhoto.url} alt={selectedPhoto.title} />
            <div className="modal-info">
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery; 