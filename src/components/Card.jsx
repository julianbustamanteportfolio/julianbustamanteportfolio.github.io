// src/components/Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ item }) => {
  return (
    <div className="card">
      {item.type === 'image' ? (
        <img src={item.src} alt={`Item ${item.id}`} />
      ) : (
        <video width="100%" controls>
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default Card;
