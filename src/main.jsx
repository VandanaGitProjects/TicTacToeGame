import React from 'react';
import ReactDOM from 'react-dom/client';
import App1 from './App.jsx';

ReactDOM.createRoot(document.getElementById('div1')).render(
  <React.StrictMode>
    <App1 />
    <h5>I am in Main jsx file</h5>
  </React.StrictMode>
);
