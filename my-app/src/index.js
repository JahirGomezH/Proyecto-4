import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  Navigate  from './components/Navigate';
import Jumpbotrro from './components/Jumpbotrro';
import Reserve from './Reserve';
import Food from './Food';
import Menu from './Menu';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigate />
    <Jumpbotrro />
    <Reserve />
    <Food />
    <Menu />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
