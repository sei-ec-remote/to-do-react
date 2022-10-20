import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import './index.css';

const toDos = ["Buy ice cream", "Eat ice cream", "Go to the gym"]

const submitBtn = document.getElementById('submit')
const inputItem = document.getElementById('text').value

submitBtn.addEventListener('click', () => {
  toDos.push(inputItem)
})

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)