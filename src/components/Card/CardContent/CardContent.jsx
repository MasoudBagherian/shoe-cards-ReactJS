import React from 'react';
import CardName from '../CardName/CardName';
import CardTypes from './CardTypes/CardTypes';
import CardInfo from './../CardInfo/CardInfo';
import CardSizes from '../CardSizes/CardSizes';
import CardFooter from '../CardFooter/CardFooter';

const CardContent = () => {
  return (
    <div className="card__content">
      <CardName />
      <CardInfo />
      <CardTypes />
      <CardSizes />
      <CardFooter />
    </div>
  );
};

export default CardContent;
