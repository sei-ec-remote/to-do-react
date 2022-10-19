import React, { Component } from 'react'
import "../MyList.css"
import ListItem from './ListItem'


class MyList extends Component {
  render() {
    const toDoItems = this.props.theList.map((item, index) => (
      <ListItem key= {index} task={item}/>
    ))
    return (
      <div id="ListDiv">
        <h1>Things I Should Stop Procrastinating</h1>
        <ul>
          {toDoItems}
        </ul>
      </div>
    )
  }
}

export default MyList
