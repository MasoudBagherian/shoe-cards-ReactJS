import React, { useContext } from 'react';
import { Context } from '../../context/context';
import CardContent from './CardContent/CardContent';

import PosterList from './PosterList/PosterList';
const Card = () => {
  const { state } = useContext(Context);
  return (
    <div className="card">
      <PosterList />
      <CardContent />
    </div>
  );
};

export default Card;
