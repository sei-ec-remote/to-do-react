import React from 'react'
import ReactDOM from 'react-dom'
import MyList from './MyList'
import './index.css'

const toDos = ["Drink coffee", "Walk the dog", "Do some laundry"]

ReactDOM.render(
  <MyList theList={toDos} />,
  document.getElementById('root')
)
