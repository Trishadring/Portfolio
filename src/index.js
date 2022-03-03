import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './pages/App/App';

ReactDOM.render(
  <Router><App/></Router>,
  document.getElementById('root')
);