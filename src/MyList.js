import './App.css'
import React, { Component } from 'react'
import ListItem from './components/ListItem'




class MyList extends Component {
  render() {
    let toDoJSX = this.props.list.map((listItem, index) => (
      <ListItem todo={listItem} key= {index} />
    ))
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {toDoJSX}
        </ul>
      </div>
    )
  }
}

export default MyList;
