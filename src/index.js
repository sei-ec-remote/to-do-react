import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
// import reportWebVitals from './reportWebVitals';
const toDoList =["Homework", "Laundry", "Any other cleaning"]
ReactDOM.render(
    <MyList theList={toDoList}/>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
