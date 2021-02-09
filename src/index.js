import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function tick() {
  const element = (
    <div>
      <App />
      <p>The time is {new Date().toLocaleTimeString()}.</p>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);