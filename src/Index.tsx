// ./src/main.js

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store }   from './reducers/index';
import { createGlobalStyle } from 'styled-components'
let colorPrimary = '#0A0B5B'
const GlobalStyle = createGlobalStyle`
  body {
    background-color:${colorPrimary};
    font-size:20px;
  }
`

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle/>
          <App />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
