import React, { createContext, useReducer } from 'react';
import { initState, reducer } from './reducer';

export const Context = createContext();

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
