import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Logo from './images/copo.svg';

function App() {
  return (
    <BrowserRouter>
      <div id="meals">
        <span>TRYBE</span>
        <img src={Logo} alt="imageLogo" />
        <Login />
      </div>
    </BrowserRouter>
  );
}

export default App;
