import * as actionTypes from './actionTypes';
export const setIndex = (index) => ({
  type: actionTypes.SET_INDEX,
  payload: { index },
});
export const disableButtons = (isDisabled) => ({
  type: actionTypes.DISABLE_BUTTONS,
  payload: { isDisabled },
});
