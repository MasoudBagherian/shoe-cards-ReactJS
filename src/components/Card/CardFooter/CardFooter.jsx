import React, { useContext } from 'react';
import { SHOES as shoes } from './../../../globals';
import { Context } from './../../../context/context';
import { FaShoppingCart as CartIcon } from 'react-icons/fa';
import { FaDollarSign as DollarIcon } from 'react-icons/fa';
const setBtnBgColor = (index) => {
  const shoeInfo = shoes[index];
  return shoeInfo.color.main;
};
const CardFooter = () => {
  const { state } = useContext(Context);
  return (
    <div className="card__footer">
      <button
        className="card__btn"
        style={{
          backgroundColor: setBtnBgColor(state.currentActiveIndex),
        }}>
        <div className="icon">
          <CartIcon />
        </div>
        <div className="text">add to cart</div>
      </button>
      <div className="card__price">
        <div className="icon">
          <DollarIcon />
        </div>
        <div className="text">189.99</div>
      </div>
    </div>
  );
};

export default CardFooter;
