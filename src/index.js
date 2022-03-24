import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["finish this deliverable", "eat dinner", "go to bed", "hopefully stop feeling like hot shit"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById("root")
)
