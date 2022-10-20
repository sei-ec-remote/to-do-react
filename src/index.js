import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Pet the Sansers", "Love the Sansers", "Feed the Sansers"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)
