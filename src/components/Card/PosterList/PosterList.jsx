import React from 'react';
import CardPoster from './../CardPoster/CardPoster';
import { SHOES as shoes } from './../../../globals';
import { FaShareAlt as ShareIcon } from 'react-icons/fa';
import { useContext } from 'react/cjs/react.development';
import { Context } from './../../../context/context';
import logoImage from '../../../assets/image/logo.png';

const setIconColor = (prodIndex) => {
  const shoeInfo = shoes[prodIndex];
  const image = shoeInfo.image;

  const iconColor = shoeInfo.color.main;
  return iconColor;
};
const PosterList = () => {
  const { state } = useContext(Context);
  return (
    <div className="card__poster">
      <div
        className="card__icon"
        style={{
          color: setIconColor(state.currentActiveIndex),
        }}>
        <ShareIcon className="share" />
      </div>
      <div className="card__logo">
        <img src={logoImage} alt="" />
      </div>
      {shoes.map((shoe, index) => (
        <CardPoster key={`poster-${index}`} index={index} />
      ))}
    </div>
  );
};

export default PosterList;
