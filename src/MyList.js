import React, { Component } from 'react'
import './App.css'
import ListItem from './ListItem.js'

class MyList extends Component {
  render() {
    let todoItems = this.props.theList.map((item, index) => {
      return <ListItem task={item} key={index} />
    })
    
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text" value="Type an item here" />
        </form>
        <button class="add" value="Add it!" />
      </div>
    )
  }
}

export default MyList
