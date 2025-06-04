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
    // Add more photos as needed
  ];

  return (
    <div className="photo-gallery" id="gallery">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div 
            key={photo.id} 
            className="photo-card"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="photo-content">
              <img src={photo.url} alt={photo.title} />
              <div className="photo-overlay">
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