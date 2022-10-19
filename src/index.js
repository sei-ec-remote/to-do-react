import React from 'react';
import ReactDOM from 'react-dom';
import './MyList.css';
import MyList from './MyList';
import './index.css'

const toDos = ['Go to the gym 6x', 'Hit my protein goals', 'Go to bed earlier']

ReactDOM.render(
    <MyList theList={toDos}/>,
  document.getElementById('root')
);