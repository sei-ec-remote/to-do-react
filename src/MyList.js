import React, { Component } from 'react'
import './App.css'
import ListItem from './components/ListItem'



class MyList extends Component {
  render() {
    const tasks = ['Buy Icream', 'Eat Icecream', 'Go Workout']
    let excitedTasks = tasks.map((task, index) => {
      let newTask = task + '!'
      return <ListItem task={newTask} key={index} />
    })
    return(<div>
      <h1 className='App'>Things I should stop procrastinating:</h1>
      <ul>
        {excitedTasks}
      </ul>
    </div>)
  }
}

export default MyList