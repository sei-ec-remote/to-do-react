import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';

const toDos = ["Eat dinner", "watch a movie", "make popcorn", "go to bed"]

ReactDOM.render(
  <React.StrictMode>
    <MyList theList={toDos} />
  </React.StrictMode>,
  document.getElementById('root')
);

