import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';

import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Pizzaria from './pages/pizzaria';
import Home from './pages/home';

ReactDOM.render(
  <React.StrictMode>
      <Pizzaria/>
  </React.StrictMode>,
  document.getElementById('root')
);


