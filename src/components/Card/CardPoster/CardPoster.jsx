import React from 'react';
import shoeImage from '../../../assets/image/blue.png';
import logoImage from '../../../assets/image/logo.png';
import { FaShareAlt as ShareIcon } from 'react-icons/fa';
const CardPoster = () => {
  return (
    <div className="card__poster">
      <div className="card__overlay"></div>
      <div className="card__logo">
        <img src={logoImage} alt="" />
      </div>
      <div className="icon icon--type-1">
        <ShareIcon className="share share--type-1" />
      </div>
      <div className="card__image">
        <img src={shoeImage} alt="" />
      </div>
    </div>
  );
};

export default CardPoster;
