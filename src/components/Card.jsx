// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ name, profession, photo }) => {
  return (
    <div className="card">
      <img src={photo} alt={name} className="card-photo" />
      <h2 className="card-name">{name}</h2>
      <p className="card-profession">{profession}</p>
    </div>
  );
};

export default Card;
