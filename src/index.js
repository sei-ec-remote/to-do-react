import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Listen to Hot Mulligan", "Drink hot cocoa", "Eat hot cheetos"]


// const submitBtn =document.getElementById('submit')
// const inputItem = document.getElementById('textbox').value
// submitBtn.addEventListener('click', () => {
//   toDos.push(inputItem)
// })


ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)

