import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import mainReducer from './reducers/mainReducer';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import App from './components/App';

let createMiddleware = applyMiddleware(thunkMiddleware, logger)(createStore)
let store = createMiddleware(mainReducer)

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
