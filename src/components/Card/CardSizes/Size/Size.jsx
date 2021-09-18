import React from 'react';

const Size = (props) => {
  let classes = 'card__size';
  let style = null;
  if (props.index === props.activeIndex) {
    classes = 'card__size card__size--active';
    style = { backgroundColor: props.activeBgColor };
  }
  return (
    <button
      className={classes}
      onClick={props.clickHandler}
      index={props.index}
      style={style}>
      {props.number}
    </button>
  );
};

export default Size;
