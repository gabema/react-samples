import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const getRootElement = () => document.getElementById('root');

const getBaseUrlParam = (elem) => elem.getAttribute('data-base-url');

ReactDOM.render(
  <App baseURL={getBaseUrlParam(getRootElement())}/>,
  getRootElement()
);
