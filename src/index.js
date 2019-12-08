// @packages
import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import Router from './router';

const node = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  node
);
