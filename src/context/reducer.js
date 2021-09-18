import * as actionTypes from './actionTypes';
export const initState = {
  prevActiveIndex: null,
  currentActiveIndex: 0,
  buttonsDisabled: false,
};
export const reducer = (state, action) => {
  if (action.type === actionTypes.SET_INDEX) {
    if (action.payload.index !== state.currentActiveIndex) {
      return {
        ...state,
        prevActiveIndex: state.currentActiveIndex,
        currentActiveIndex: action.payload.index,
      };
    }
  }
  if (action.type === actionTypes.DISABLE_BUTTONS) {
    return {
      ...state,
      buttonsDisabled: action.payload.isDisabled,
    };
  }
  return state;
};
