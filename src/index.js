import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';
import reportWebVitals from './reportWebVitals';

const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
);

reportWebVitals();