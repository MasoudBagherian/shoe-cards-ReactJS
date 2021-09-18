import React, { useContext } from 'react';
import { SHOES as shoes } from './../../../globals';
import { Context } from './../../../context/context';
const setBadgeColor = (index) => {
  const shoeInfo = shoes[index];
  return shoeInfo.color.main;
};
const CardName = () => {
  const { state } = useContext(Context);
  return (
    <div className="card__name">
      <div className="heading">
        <h3 className="card__title">Nike Zoom KD 12</h3>
        <span
          className="badge"
          style={{
            backgroundColor: setBadgeColor(state.currentActiveIndex),
          }}>
          new
        </span>
      </div>
      <p className="card__text">men's running shoes</p>
    </div>
  );
};

export default CardName;
