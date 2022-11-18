import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import MovieAppProvider from './context/MovieContext';

ReactDOM.render(
  <React.StrictMode>
    <MovieAppProvider>
      <App />
    </MovieAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


