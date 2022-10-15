import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router} from 'react-router-dom'

import "antd/dist/antd.css";
import './index.css';
import App from './App';

ReactDOM.render(
  <React.Fragment>
      <Router>
        <App />
      </Router>
  </React.Fragment>,
  document.getElementById('root')
);

