import React, { Component } from 'react'
import ListItem from './ListItem'
// import Input from './Input'
import './App.css'

class MyList extends Component 
{
  theList = ['Buy ice cream', 'Do deliverable', 'Have dinner', 'Sleep', 'Repeat']

  constructor()
  {
    super()
    this.state = {
      todos: this.theList
    }
    this.addListItem = this.addListItem.bind(this)
    this.removeListItems = this.removeListItems.bind(this)
  }
  
  addListItem()
  {
    this.setState(prevState => {
        const input = document.getElementById('input')
        let updatedTodos = prevState.todos

        updatedTodos.push(input.value)

        input.value = ''
        return {todos: updatedTodos}
      })
  }

  removeListItems()
  {
    this.setState( prevState => {
      let todos = prevState.todos
      for(let i = 0; i <= todos.length; i++)
      {
        todos.pop()
      }

      return {todos: todos}
    })
  }

  render()
  {
    const todoItems = this.state.todos.map( (item, index) => {
        return <ListItem item={item} key={index}/>
    })

    return (
      <div className="MyList">
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <input type="text" placeholder="Type an item here" id="input"/>
        <button onClick={this.addListItem}>Add it!</button>
        <br />
        <button onClick={this.removeListItems}>Finished the list!</button>
      </div>
    )
  }
}

export default MyList
