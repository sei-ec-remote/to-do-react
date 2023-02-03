import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import MyList from './MyList'

const toDos = ["Watch show", "Play game", "Finish homework"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)