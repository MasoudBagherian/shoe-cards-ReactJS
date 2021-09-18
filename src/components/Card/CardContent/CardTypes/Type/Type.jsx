import React, { useContext } from 'react';
import { setIndex } from '../../../../../context/actions';
import { Context } from '../../../../../context/context';

const Type = (props) => {
  const { state, dispatch } = useContext(Context);
  let classes = 'type';
  if (props.index === state.currentActiveIndex) {
    classes = 'type type--selected';
  }
  return (
    <button
      className={classes}
      style={{
        backgroundColor: props.bgColor,
      }}
      onClick={() => dispatch(setIndex(props.index))}
      disabled={state.buttonsDisabled}></button>
  );
};

export default Type;
