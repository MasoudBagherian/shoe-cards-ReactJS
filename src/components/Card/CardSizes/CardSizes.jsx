import React, { useContext, useEffect, useState, useRef } from 'react';
import { SHOES as shoes } from './../../../globals';
import { Context } from './../../../context/context';
import Size from './Size/Size';

const CardSizes = () => {
  const { state } = useContext(Context);
  const buttonsRef = useRef();
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    setActiveIndex(null);
  }, [state.currentActiveIndex]);
  const btnClickHandler = (e) => {
    const index = +e.target.getAttribute('index');
    setActiveIndex(index);
    // let buttons = buttonsRef.current.children;
    // buttons = Array.prototype.slice.call(buttons);
    // buttons.forEach((btn) => {
    //   if (btn === e.target) {
    //     btn.classList.add('card__btn--active');
    //   } else {
    //     btn.classList.remove('card__btn--active');
    //   }
    // });
  };
  const shoe = shoes[state.currentActiveIndex];
  return (
    <div className="card__sizes">
      <h3 className="card__title">size</h3>
      <div className="buttons" ref={buttonsRef}>
        {shoe.sizes.map((size, index) => (
          <Size
            key={`size-${index}`}
            number={size}
            index={index}
            activeBgColor={shoe.color.main}
            activeIndex={activeIndex}
            clickHandler={btnClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSizes;
