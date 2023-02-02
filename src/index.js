import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import reportWebVitals from './reportWebVitals';

const toDos = ['Eat muffins', 'Make a Mai Tai', 'Drink a Mai Tai','Make a Mai Tai','Watch Survivor', 'Drink a Mai Tai']

  
ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root'),
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
