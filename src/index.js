import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';


const toDos = ["listen to hot mulligna", "drink hot cocoa", "eat hot cheetos"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)