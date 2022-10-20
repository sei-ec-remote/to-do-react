import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';



const toDos = ["Make money", "wake up", "Repeat next day"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)



