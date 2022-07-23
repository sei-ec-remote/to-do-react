import React, { Component } from 'react'
import './App.css'
import Listitem from './Listitem.js'

class MyList extends Component {
  
  render() {
    let todoItems = this.props.theList.map((item, index) => (
      <Listitem task={item} key={index} />
    ))

    return (
      <div>
        <h1>Things I should stop procrastinating: </h1>
        <ul>
          {todoItems}
        </ul>
      </div>
    )
  }
}

export default MyList