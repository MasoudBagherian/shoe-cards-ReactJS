import React from 'react';
import CardContent from './CardContent/CardContent';
import CardPoster from './CardPoster/CardPoster';
const Card = () => {
  return (
    <div className="card">
      <CardPoster />
      <CardContent />
    </div>
  );
};

export default Card;
