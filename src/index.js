import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';


const toDos = ["Wake up", "Breath", "Exist"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)