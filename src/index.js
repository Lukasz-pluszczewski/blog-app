import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './store/configureStore';

import './favicon.ico';
import './styles/styles.scss';

const store = configureStore();

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app'),
  function loadPrism() { // function to enable code syntax highlighting in rendered markdown (https://github.com/rexxars/react-markdown/issues/58)
    const scr = document.createElement('script');
    scr.src = 'https://unpkg.com/prismjs@1.6.0/prism.js';
    document.head.appendChild(scr);
  }
);
