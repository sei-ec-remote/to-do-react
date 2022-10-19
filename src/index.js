import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import reportWebVitals from './reportWebVitals';

const toDos = ['Walk the dog', 'Make pasta', 'Do the laundry', 'Pack an order', 'Mail the letter']

ReactDOM.render(
    <MyList theList={toDos} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
