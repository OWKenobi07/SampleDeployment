import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router} from 'react-router-dom'

import "antd/dist/antd.css";
import './index.css';
import App from './App';

const appElement = document.getElementById('app');

ReactDOM.render(
  <React.Fragment>
      <Router>
        <App />
      </Router>
  </React.Fragment>,
  appElement
);

