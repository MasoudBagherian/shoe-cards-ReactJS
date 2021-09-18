import React from 'react';
import { render } from 'react-dom';

import App from './App';

import './assets/sass/main.scss';
import ContextProvider from './context/context';

render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById('root')
);
