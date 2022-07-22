import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MyList from './MyList';

const theList = [
  'mow the lawn',
  'clean the bathrooms',
  'do the dishes',
  'wash the car'
]

ReactDOM.render(
  <React.StrictMode>
    <MyList
      theList={theList}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
