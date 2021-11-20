import React from 'react';
import ReactDOM from 'react-dom';
import MainRoutes from './routes';
import { Provider } from "react-redux";
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MainRoutes />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);


