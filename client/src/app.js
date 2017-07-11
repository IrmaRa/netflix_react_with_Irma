import React from 'react';
import ReactDOM from 'react-dom';
import MoviesContainer from './containers/MoviesContainer'

window.addEventListener('load', function () {
  ReactDOM.render(
    <MoviesContainer/>,
    document.getElementById('app')
  );
});
