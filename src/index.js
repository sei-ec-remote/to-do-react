import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Laundry", "Stretch", "Play Hitman 2"]

ReactDOM.render(
  //<React.StrictMode>
  <MyList theList={toDos} />,
  //</React.StrictMode>,
  document.getElementById('root')
);
