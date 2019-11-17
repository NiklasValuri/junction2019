import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { HashRouter } from 'react-router-dom';
import headerComponent from './components/header';

ReactDOM.render(
  <HashRouter>
    {headerComponent()}
    <App />
  </HashRouter>,
  document.getElementById('root'),
);
