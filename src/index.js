import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Eat pizza", "Drink water", "Eat Cheddar-Sour Cream Ruffles"]

ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root')
)
