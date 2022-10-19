import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ['make bed', 'do dishes', 'fold laundry']

ReactDOM.render(
  <MyList theList = {toDos}/>,
  document.getElementById('root')
)