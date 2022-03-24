import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css'

const toDos = ["Eat more powdered donuts", "Eat another cheeseburger", "Do laundry"]

ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root')
)

