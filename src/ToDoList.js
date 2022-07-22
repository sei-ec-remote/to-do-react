import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem'

class ToDoList extends Component {
  render() {
    let todoList = this.props.tasks.map((items, index) => {
      return <ListItem task={items} key={index}/>
    })
    return (
    <>
    <li>{todoList}</li>
    </>
    )
  }
}

export default ToDoList