import React, { Component } from 'react'
import ListItem from './ListItem'
import './App.css'

class MyList extends Component {
  render() {
    let toDoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index}/>
    })
    return(
      <div>
        <h1>Things I Should Stop Procrastinating:</h1>
        <ul>
          {toDoItems}
        </ul>
      </div>
    )
  }
}

export default MyList