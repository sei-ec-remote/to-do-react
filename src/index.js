import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Go to a Fratellis Concert", "Drink 8 cups of water a day", "Take the dogs on a walk"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)