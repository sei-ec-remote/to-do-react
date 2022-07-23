import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Listen to Podcasts", "Drink two gallons of water", "Plant a tree", "Walk the dogs"]


ReactDOM.render(
  <MyList theList={toDos}/>,
  document.getElementById('root')
)
