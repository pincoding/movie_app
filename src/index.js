import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { GlobalStyled } from './components/GlobalStyled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <Router />
  </React.StrictMode>
);

// npm i react-router-dom