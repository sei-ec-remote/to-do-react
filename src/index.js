import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
//import AddThing from './AddThing';
import './index.css';

const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos","learning react","learning ds&algo"]

ReactDOM.render(
  <MyList theList={toDos} />,
  // <AddThing/>,
  document.getElementById('root')
)