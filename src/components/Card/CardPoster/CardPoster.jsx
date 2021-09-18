import React, { useContext, useEffect, useRef, Fragment } from 'react';
import { SHOES as shoes } from '../../../globals';
import { Context } from './../../../context/context';
import { disableButtons } from '../../../context/actions';

const configPoster = (prodIndex) => {
  const shoeInfo = shoes[prodIndex];
  const image = shoeInfo.image;
  const overlayGradient = `linear-gradient(
    90deg,
    ${shoeInfo.color.dark},
    ${shoeInfo.color.light}`;
  const iconColor = shoeInfo.color.main;
  return { image, overlayGradient, iconColor };
};
const CardPoster = ({ index }) => {
  const overlayRef = useRef();
  const { state, dispatch } = useContext(Context);
  let classes = 'card__overlay';

  if (index === state.prevActiveIndex) {
    classes = 'card__overlay card__overlay--active-old';
  }
  if (index === state.currentActiveIndex) {
    classes = 'card__overlay card__overlay--active-new';
  }

  useEffect(() => {
    if (classes.includes('card__overlay--active-new')) {
      overlayRef.current.style.width = '100%';
    }
    if (classes.includes('card__overlay--active-old')) {
      overlayRef.current.style.width = '100%';
      dispatch(disableButtons(true));
      setTimeout(() => {
        overlayRef.current.style.width = '0';
        dispatch(disableButtons(false));
      }, 1000);
    }
  }, [state.prevActiveIndex, state.currentActiveIndex]);

  return (
    <Fragment>
      <div
        className={classes}
        ref={overlayRef}
        style={{
          transition: 'width 1s',
          background: configPoster(index).overlayGradient,
        }}></div>
      <div
        className="card__image"
        style={{
          transition: '1s',
        }}>
        <img src={configPoster(index).image} alt="" />
      </div>
    </Fragment>
  );
};

export default CardPoster;
