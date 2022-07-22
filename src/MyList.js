import React, { Component } from 'react'
import './App.css'
import ToDoList from './ToDoList'

class MyList extends Component {
  render() {
    const tasks = [
      'Wash the dishes', 
      'Take out the trash', 
      'Make the bed'
    ]
    return (
      <div className='App'>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          <li>
          <ToDoList 
            tasks={tasks}
          />
          </li>
        </ul>
      </div>
    )
  }
}

export default MyList
