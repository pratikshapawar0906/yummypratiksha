import React from 'react';

const GalleryImg = ({ img, isActive }) => {
  return (
    <div className={`gallery-img-container ${isActive ? 'gallary-border' : ''}`}>
      <img src={img} alt="Gallery" className="img-fluid" />
    </div>
  );
};

export default GalleryImg;
