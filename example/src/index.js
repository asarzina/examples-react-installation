import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import '../../style.css';

const app = (<App initialId="123456" />);
const app2 = (<App initialId="123457" />);

ReactDOM.render(
  app,
  document.getElementById('app')
);

ReactDOM.render(
  app2,
  document.getElementById('app2')
);
