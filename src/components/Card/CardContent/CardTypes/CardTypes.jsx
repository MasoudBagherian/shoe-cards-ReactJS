import Type from './Type/Type';
import React from 'react';
import { SHOES as shoes } from './../../../../globals';

const CardTypes = () => {
  // const typeClickHandler = (index) => {
  //   setIndex(index);
  // };
  return (
    <section className="card__types">
      <h3 className="card__title">color</h3>
      <div className="card__colors">
        {shoes.map((shoe, index) => (
          <div key={`product-${index}`} className="card__color">
            <Type
              bgColor={shoe.color.main}
              index={index}
              // clickHandler={typeClickHandler.bind(null, index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardTypes;
