import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'

import Router from './components/Router';
import store from './store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store()}>
      <Router />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root'));
