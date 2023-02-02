import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ['Water the dog', 'walk the car', 'vacuum the ceiling']

ReactDOM.render(
  <MyList theList={ toDos } />,
  document.getElementById('root')
);


