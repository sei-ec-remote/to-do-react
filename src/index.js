import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import ListItem from './MyList';
import './index.css';

const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)
let todoItems = this.props.theList.map((item, index) => (
  <ListItem task={item} key={index} />
))